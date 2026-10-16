"use client";

import React from "react";
import { SriLankanMandala } from "./ornaments/SriLankanMandala";
import { weddingConfig } from "../config/wedding";
import { Heart } from "lucide-react";

interface WeddingFooterProps {
  lang: "si" | "en";
}

export function WeddingFooter({ lang }: WeddingFooterProps) {
  const { couple, venue, messages } = weddingConfig;

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* Royal Dark Forest Green & Gold Background */}
      <div
        className="relative px-5 pt-16 pb-36 text-center text-[#F0EAD4] sm:pt-20 sm:pb-40"
        style={{
          background: "linear-gradient(180deg, #152821 0%, #0C1712 100%)",
        }}
      >
        {/* Faded Background Mandala Watermark */}
        <div className="pointer-events-none absolute left-1/2 top-10 w-72 -translate-x-1/2 select-none opacity-10">
          <SriLankanMandala className="w-full h-full text-[#EADFB8]" />
        </div>

        <div className="relative mx-auto max-w-xl">
          {/* Subtitle */}
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-[#D3BD86] font-semibold">
            {lang === "si" ? "සුබ මංගලම්" : "Save the Date"}
          </span>

          {/* Date Digits in Traditional Style */}
          <div className="my-4 font-serif text-4xl font-semibold tracking-wider text-[#EADFB8] sm:text-6xl">
            12 . 12 . 2026
          </div>

          <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-[#F0EAD4]/80 sm:text-base">
            {lang === "si" ? messages.closingBlessingSi : messages.closingBlessingEn}
          </p>

          {/* Heart Ornament Divider */}
          <div className="mx-auto my-6 flex w-44 items-center justify-center gap-2">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#EADFB8]/60 to-[#EADFB8]" />
            <Heart className="h-3.5 w-3.5 fill-[#EADFB8] text-[#EADFB8]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#EADFB8]/60 to-[#EADFB8]" />
          </div>

          {/* Couple Names */}
          <div className="font-serif text-2xl italic font-medium text-[#EADFB8] sm:text-4xl">
            {lang === "si" ? (
              <span>
                {couple.bride.nameSi} <span className="text-[#B49A55]">&</span> {couple.groom.nameSi}
              </span>
            ) : (
              <span>
                {couple.bride.nameEn} <span className="text-[#B49A55]">&</span> {couple.groom.nameEn}
              </span>
            )}
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.34em] text-[#D3BD86]">
            {lang === "si" ? venue.nameSi : venue.nameEn} • {lang === "si" ? venue.citySi : venue.cityEn}
          </p>

          <p className="mt-8 text-[0.65rem] tracking-wider text-[#EADFB8]/50 uppercase">
            Ariya Sinhala Traditional Wedding Invitation • 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
