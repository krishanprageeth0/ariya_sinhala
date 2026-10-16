import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface RsvpPayload {
  name: string;
  attending: boolean;
  guestCount: number;
  phone?: string;
  message?: string;
}

interface StoredRsvp extends RsvpPayload {
  id: string;
  createdAt: string;
  ip?: string;
}

const dataDir = path.join(process.cwd(), "data");
const dataFilePath = path.join(dataDir, "rsvps.json");

function ensureDataFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), "utf8");
  }
}

function getRsvps(): StoredRsvp[] {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveRsvps(data: StoredRsvp[]) {
  ensureDataFile();
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
}

export async function POST(req: NextRequest) {
  try {
    const body: RsvpPayload = await req.json();

    if (!body.name || typeof body.name !== "string" || body.name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (typeof body.attending !== "boolean") {
      return NextResponse.json(
        { error: "Attendance choice is required" },
        { status: 400 }
      );
    }

    const guestCount = body.attending ? Math.min(Math.max(Number(body.guestCount) || 1, 1), 10) : 0;

    const rsvps = getRsvps();

    // Check duplicate submissions within same name and contact
    const normalizedName = body.name.trim().toLowerCase();
    const existing = rsvps.find(
      (r) => r.name.trim().toLowerCase() === normalizedName && (!body.phone || r.phone === body.phone)
    );

    const newEntry: StoredRsvp = {
      id: "rsvp_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      name: body.name.trim(),
      attending: body.attending,
      guestCount,
      phone: body.phone?.trim() || "",
      message: body.message?.trim() || "",
      createdAt: new Date().toISOString(),
    };

    if (existing) {
      // Update existing record
      const index = rsvps.indexOf(existing);
      rsvps[index] = newEntry;
    } else {
      rsvps.push(newEntry);
    }

    saveRsvps(rsvps);

    // Optional webhook forward to Google Sheets if configured in environment
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEntry),
        });
      } catch (webhookErr) {
        console.error("Google sheet webhook error:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: body.attending
        ? "ඔබගේ පැමිණීම සාදරයෙන් සටහන් කරගන්නා ලදී! / Your RSVP has been confirmed."
        : "ඔබගේ පණිවිඩය සටහන් කරගන්නා ලදී. / Thank you for informing us.",
      rsvp: newEntry,
    });
  } catch (error) {
    console.error("RSVP error:", error);
    return NextResponse.json(
      { error: "Internal server error saving RSVP" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const rsvps = getRsvps();
  const totalAttending = rsvps.filter((r) => r.attending).length;
  const totalDeclined = rsvps.filter((r) => !r.attending).length;
  const totalGuestCount = rsvps.reduce((acc, curr) => acc + (curr.guestCount || 0), 0);

  return NextResponse.json({
    summary: {
      totalResponses: rsvps.length,
      totalAttending,
      totalDeclined,
      totalGuestCount,
    },
    rsvps,
  });
}
