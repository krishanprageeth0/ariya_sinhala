"use client";

import React from "react";
import { LiyawelDivider } from "./ornaments/LiyawelDivider";
import { weddingConfig } from "../config/wedding";
import { MapPin, ExternalLink, Calendar, Clock, Navigation } from "lucide-react";

interface WeddingVenueProps {
  lang: "si" | "en";
}

export function WeddingVenue({ lang }: WeddingVenueProps) {
  const { venue, displayDate, messages } = weddingConfig;

  return (
    <section id="venue" className="scroll-mt-20 px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-2 block text-xs uppercase tracking-[0.34em] text-[#2F5A45] font-semibold">
          {lang === "si" ? "සුන්දර නවාතැන" : "The Setting"}
        </span>

        <h2 className="font-serif text-3xl font-bold text-[#1F3E2F] sm:text-4xl">
          {lang === "si" ? messages.venueHeadingSi : messages.venueHeadingEn}
        </h2>

        <div className="mt-4 flex justify-center">
          <LiyawelDivider className="w-44 text-[#B49A55]" />
        </div>

        {/* Venue Layout Grid */}
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
          {/* Venue Card Details */}
          <div
            className="relative flex flex-col justify-between rounded-[24px] border border-[#D3BD86] p-6 text-left sm:p-8 shadow-[0_18px_38px_-30px_rgba(140,113,52,0.4)]"
            style={{
              background: "linear-gradient(180deg, rgba(253, 250, 242, 0.85) 0%, rgba(244, 235, 218, 0.85) 100%)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="pointer-events-none absolute inset-2 rounded-[18px] border border-[#D3BD86]/45" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B49A55] bg-gradient-to-br from-[#2F5A45] to-[#1F3E2F] text-[#EADFB8] shadow-md">
                <MapPin className="h-7 w-7 text-[#EADFB8]" />
              </div>

              <span className="mt-5 block text-xs uppercase tracking-[0.28em] text-[#8C7134] font-semibold">
                {lang === "si" ? "උත්සව භූමිය" : "Wedding Venue"}
              </span>

              <h3 className="mt-1 font-serif text-2xl font-bold text-[#1F3E2F] sm:text-3xl">
                {lang === "si" ? venue.nameSi : venue.nameEn}
              </h3>

              <p className="mt-2 text-sm text-[#78704F] leading-relaxed">
                {lang === "si" ? venue.addressSi : venue.addressEn}
              </p>
              <p className="text-sm font-medium text-[#3F3B29]">
                {lang === "si" ? venue.citySi : venue.cityEn}
              </p>

              {/* Event Schedule Summary in Venue Card */}
              <div className="mt-6 border-t border-[#B49A55]/30 pt-5 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-xs text-[#3F3B29] sm:text-sm">
                  <Calendar className="h-4 w-4 text-[#8C7134] shrink-0" />
                  <span className="font-serif">{lang === "si" ? displayDate.si.full : displayDate.en.full}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#3F3B29] sm:text-sm">
                  <Clock className="h-4 w-4 text-[#8C7134] shrink-0" />
                  <span>{lang === "si" ? "පෙරවරු 08:30 සිට පස්වරු 04:00 දක්වා" : "08:30 AM – 04:00 PM"}</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="relative mt-8 pt-2">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#2F5A45] bg-[#2F5A45] px-6 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold text-[#EADFB8] shadow-md transition-all duration-300 hover:bg-[#1F3E2F] hover:scale-[1.02] active:scale-95 sm:text-sm"
              >
                <Navigation className="h-4 w-4 text-[#EADFB8] transition-transform group-hover:rotate-45" />
                <span>{lang === "si" ? "Google Maps ඔස්සේ බලන්න" : "Open in Google Maps"}</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="relative min-h-[340px] w-full overflow-hidden rounded-[24px] border border-[#B49A55]/40 shadow-xl">
            <iframe
              title={lang === "si" ? "මංගල උත්සව ස්ථාන සිතියම" : "Wedding Venue Map"}
              src={venue.embedMapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              style={{ filter: "sepia(0.12) contrast(1.05)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
