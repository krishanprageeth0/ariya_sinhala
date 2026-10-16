import type { Metadata } from "next";
import { Noto_Serif_Sinhala, Noto_Sans_Sinhala, Playfair_Display, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";

const notoSerifSinhala = Noto_Serif_Sinhala({
  subsets: ["sinhala", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-sinhala",
  display: "swap",
});

const notoSansSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-sinhala",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-cormorant",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ariya-sinhala-invitation.lk"),
  title: "සඳුනි සහ රවින්දුගේ මංගල ඇරයුම | Sanduni & Ravindu - Ariya Sinhala Wedding Invitation",
  description:
    "Heritage Kandyan wedding invitation in pearl ivory, forest emerald and champagne gold with Poruwa ceremony details, countdown, photo gallery, location map, and RSVP. Saturday, 12th December 2026 at Araliya Grand, Nuwara Eliya.",
  keywords: [
    "Sri Lankan Wedding Invitation",
    "Ariya Sinhala",
    "Kandyan Wedding",
    "Sanduni and Ravindu",
    "Poruwa Ceremony",
    "Nuwara Eliya Wedding",
    "Digital Wedding Invitation",
  ],
  authors: [{ name: "Sanduni & Ravindu" }],
  openGraph: {
    title: "සඳුනි සහ රවින්දුගේ මංගල ඇරයුම | Sanduni & Ravindu Wedding Invitation",
    description:
      "You are cordially invited to celebrate the wedding of Sanduni Rajapaksha and Ravindu Fernando on Saturday, 12th December 2026 at Araliya Grand, Nuwara Eliya.",
    images: [
      {
        url: "/images/hero-couple.jpg",
        width: 1200,
        height: 630,
        alt: "Sanduni & Ravindu Traditional Kandyan Wedding Invitation",
      },
    ],
    locale: "si_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "සඳුනි සහ රවින්දුගේ මංගල ඇරයුම | Sanduni & Ravindu Wedding",
    description: "Traditional Sri Lankan Kandyan Wedding Invitation. Saturday, 12th December 2026 at Araliya Grand, Nuwara Eliya.",
    images: ["/images/hero-couple.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="si"
      className={`${notoSerifSinhala.variable} ${notoSansSinhala.variable} ${playfair.variable} ${cormorant.variable} ${ebGaramond.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-serif selection:bg-[#B49A55]/30 selection:text-[#1F3E2F]">
        {children}
      </body>
    </html>
  );
}
