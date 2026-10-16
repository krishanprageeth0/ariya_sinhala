"use client";

import React, { useState } from "react";
import { LiyawelDivider } from "./ornaments/LiyawelDivider";
import { PoruwaIcon } from "./ornaments/PoruwaIcon";
import { weddingConfig } from "../config/wedding";
import { Calendar, Clock, MapPin, CalendarPlus, Check, UtensilsCrossed, FileSignature } from "lucide-react";

interface WeddingEventsProps {
  lang: "si" | "en";
}

export function WeddingEvents({ lang }: WeddingEventsProps) {
  const { events, displayDate, venue, messages, couple } = weddingConfig;
  const [downloaded, setDownloaded] = useState(false);

  // Generate downloadable ICS file for the entire wedding
  const downloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Ariya Sinhala//Sri Lankan Wedding Invitation//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "X-WR-CALNAME:Wedding of Sanduni & Ravindu",
      "X-WR-TIMEZONE:Asia/Colombo",
      "BEGIN:VEVENT",
      "UID:wedding-sanduni-ravindu-20261212@ariya.sinhala",
      "DTSTAMP:20261012T000000Z",
      "DTSTART;TZID=Asia/Colombo:20261212T083000",
      "DTEND;TZID=Asia/Colombo:20261212T160000",
      `SUMMARY:Wedding of ${couple.bride.nameEn} & ${couple.groom.nameEn} (${couple.bride.nameSi} සහ ${couple.groom.nameSi})`,
      `DESCRIPTION:Traditional Sri Lankan Kandyan Wedding: Registration at 8:30 AM\\, Poruwa Ceremony at 10:00 AM\\, Reception at 12:30 PM.`,
      `LOCATION:${venue.nameEn}\\, ${venue.addressEn}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Sanduni_and_Ravindu_Wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Wedding of ${couple.bride.nameEn} & ${couple.groom.nameEn}`);
    const details = encodeURIComponent(
      `Traditional Sri Lankan Kandyan Wedding at ${venue.nameEn}.\nRegistration: 8:30 AM\nPoruwa: 10:00 AM\nReception: 12:30 PM`
    );
    const loc = encodeURIComponent(`${venue.nameEn}, ${venue.addressEn}`);
    // 2026-12-12 08:30 to 16:00 in UTC is 03:00 to 10:30 UTC
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261212T030000Z/20261212T103000Z&details=${details}&location=${loc}`;
  };

  return (
    <section id="events" className="scroll-mt-20 px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-2 block text-xs uppercase tracking-[0.34em] text-[#2F5A45] font-semibold">
          {lang === "si" ? "සුබ මොහොතින් එක්වන්න" : "Celebrate With Us"}
        </span>

        <h2 className="font-serif text-3xl font-bold text-[#1F3E2F] sm:text-4xl">
          {lang === "si" ? messages.eventsHeadingSi : messages.eventsHeadingEn}
        </h2>

        <div className="mt-4 flex justify-center">
          <LiyawelDivider className="w-44 text-[#B49A55]" />
        </div>

        {/* Events Cards */}
        <div className="mt-10 flex flex-col gap-6 sm:gap-8 max-w-3xl mx-auto">
          {events.map((evt) => {
            const isPoruwa = evt.iconType === "poruwa";
            const isSignature = evt.iconType === "signature";

            return (
              <div
                key={evt.id}
                className="relative rounded-[24px] border border-[#D3BD86] p-6 text-left sm:p-8 shadow-[0_20px_44px_-28px_rgba(140,113,52,0.35)] transition-all duration-300 hover:border-[#B49A55] hover:shadow-lg"
                style={{
                  background: "linear-gradient(180deg, rgba(253, 250, 242, 0.85) 0%, rgba(244, 235, 218, 0.85) 100%)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Inner Border */}
                <span className="pointer-events-none absolute inset-2 rounded-[18px] border border-[#D3BD86]/45" />

                <div className="relative grid items-center gap-5 sm:grid-cols-[auto_1fr] sm:gap-7">
                  {/* Event Icon Badge */}
                  <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-[#B49A55] bg-gradient-to-br from-[#2F5A45] to-[#1F3E2F] text-[#EADFB8] shadow-md">
                    {isPoruwa && <PoruwaIcon className="h-9 w-9 text-[#EADFB8]" />}
                    {isSignature && <FileSignature className="h-8 w-8 text-[#EADFB8]" />}
                    {!isPoruwa && !isSignature && <UtensilsCrossed className="h-8 w-8 text-[#EADFB8]" />}
                  </div>

                  {/* Event Details */}
                  <div className="text-center sm:text-left">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-[#1F3E2F] sm:text-2xl">
                      {lang === "si" ? evt.titleSi : evt.titleEn}
                    </h3>

                    {evt.descriptionSi && (
                      <p className="mt-1 text-xs text-[#78704F] sm:text-sm">
                        {lang === "si" ? evt.descriptionSi : evt.descriptionEn}
                      </p>
                    )}

                    <div className="mt-4 flex flex-col gap-2 sm:gap-2.5">
                      <div className="flex items-center justify-center gap-2 sm:justify-start text-xs text-[#3F3B29] sm:text-sm">
                        <Calendar className="h-4 w-4 shrink-0 text-[#8C7134]" />
                        <span className="font-serif font-medium">
                          {lang === "si" ? displayDate.si.full : displayDate.en.full}
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-2 sm:justify-start text-xs text-[#3F3B29] sm:text-sm">
                        <Clock className="h-4 w-4 shrink-0 text-[#8C7134]" />
                        <span className="font-serif font-medium">
                          {lang === "si" ? evt.timeSi : evt.timeEn}
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-2 sm:justify-start text-xs text-[#3F3B29] sm:text-sm">
                        <MapPin className="h-4 w-4 shrink-0 text-[#8C7134]" />
                        <span>{lang === "si" ? evt.venueSi : evt.venueEn}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add to Calendar Button Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={downloadIcs}
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#B49A55] bg-[#FFFDF7] px-6 py-3 text-xs uppercase tracking-[0.24em] font-semibold text-[#1F3E2F] shadow-md transition-all duration-300 hover:bg-[#2F5A45] hover:text-[#EADFB8] hover:scale-105 active:scale-95"
          >
            {downloaded ? (
              <>
                <Check className="h-4 w-4 text-[#2F5A45] group-hover:text-[#EADFB8]" />
                <span>{lang === "si" ? "දින දර්ශනයට එක්විය!" : "Added to Calendar!"}</span>
              </>
            ) : (
              <>
                <CalendarPlus className="h-4 w-4 text-[#8C7134] group-hover:text-[#EADFB8]" />
                <span>{lang === "si" ? "දින දර්ශනයට සුරකින්න (.ICS)" : "Save to Calendar (.ICS)"}</span>
              </>
            )}
          </button>

          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#B49A55]/60 bg-transparent px-6 py-3 text-xs uppercase tracking-[0.24em] font-semibold text-[#1F3E2F] transition-all duration-300 hover:bg-[#FFFDF7] hover:scale-105 active:scale-95"
          >
            <Calendar className="h-4 w-4 text-[#8C7134]" />
            <span>Google Calendar</span>
          </a>
        </div>
      </div>
    </section>
  );
}
