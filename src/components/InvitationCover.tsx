"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SriLankanMandala } from "./ornaments/SriLankanMandala";
import { LiyawelDivider, FloralCorner } from "./ornaments/LiyawelDivider";
import { weddingConfig } from "../config/wedding";
import { Sparkles, MailOpen } from "lucide-react";

interface InvitationCoverProps {
  lang: "si" | "en";
  onOpen: () => void;
}

export function InvitationCover({ lang, onOpen }: InvitationCoverProps) {
  const [isOpening, setIsOpening] = useState(false);
  const { couple, displayDate } = weddingConfig;

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-6 transition-all duration-700 ease-in-out ${
        isOpening ? "scale-105 opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#F7F2E7",
        backgroundImage: "radial-gradient(circle at 50% 30%, #FFFDF7 0%, #F4EDE0 100%)",
      }}
    >
      {/* Background Mandala Watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] sm:w-[50rem] opacity-15 select-none">
        <SriLankanMandala className="w-full h-full text-[#B49A55] animate-[spin_120s_linear_infinite]" />
      </div>

      {/* Traditional Invitation Envelope Card */}
      <div
        className="relative mx-auto w-full max-w-lg rounded-[28px] border border-[#D3BD86] p-6 text-center sm:p-10 shadow-[0_25px_60px_-15px_rgba(75,52,39,0.22)]"
        style={{
          background: "linear-gradient(180deg, rgba(255, 252, 245, 0.95) 0%, rgba(247, 240, 226, 0.95) 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Inner Gold Inset Frame */}
        <div className="pointer-events-none absolute inset-2.5 rounded-[20px] border border-[#B49A55]/40" />
        <div className="pointer-events-none absolute inset-3.5 rounded-[16px] border border-[#D3BD86]/25" />

        {/* Traditional Floral Corners */}
        <div className="pointer-events-none absolute top-4 left-4">
          <FloralCorner position="top-left" className="h-6 w-6 text-[#B49A55]" />
        </div>
        <div className="pointer-events-none absolute top-4 right-4">
          <FloralCorner position="top-right" className="h-6 w-6 text-[#B49A55]" />
        </div>
        <div className="pointer-events-none absolute bottom-4 left-4">
          <FloralCorner position="bottom-left" className="h-6 w-6 text-[#B49A55]" />
        </div>
        <div className="pointer-events-none absolute bottom-4 right-4">
          <FloralCorner position="bottom-right" className="h-6 w-6 text-[#B49A55]" />
        </div>

        {/* Traditional Auspicious Header */}
        <div className="relative pt-2">
          <p className="text-xs uppercase tracking-[0.38em] text-[#8C7134] font-semibold sm:text-sm">
            {lang === "si" ? "ශ්‍රී සුභ මංගලම්" : "SRI SUBA MANGALAM"}
          </p>
          <p className="mt-1 font-serif text-[0.82rem] tracking-widest text-[#78704F] uppercase">
            {lang === "si" ? "අපගේ මංගල ඇරයුම" : "The Wedding Invitation"}
          </p>

          <div className="my-3 flex justify-center">
            <LiyawelDivider className="w-36 text-[#B49A55]" />
          </div>
        </div>

        {/* Illustrated Kandyan Couple Badge */}
        <div className="relative mx-auto my-3 flex justify-center">
          <div className="relative h-48 w-40 overflow-hidden rounded-full border-2 border-[#B49A55] p-1 shadow-md sm:h-56 sm:w-48 bg-[#FFF9EF]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/hero-couple.jpg"
                alt="Sanduni & Ravindu"
                fill
                priority
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 160px, 192px"
              />
            </div>
          </div>
        </div>

        {/* Couple Names */}
        <div className="mt-4">
          <h1 className="font-serif text-3xl font-bold tracking-normal text-[#1F3E2F] sm:text-4xl">
            {lang === "si" ? (
              <span>
                {couple.bride.nameSi} <span className="text-[#963A30] font-normal">&</span> {couple.groom.nameSi}
              </span>
            ) : (
              <span>
                {couple.bride.nameEn} <span className="text-[#963A30] font-normal">&</span> {couple.groom.nameEn}
              </span>
            )}
          </h1>
          <p className="mt-1 text-xs tracking-widest text-[#78704F] uppercase">
            {lang === "si" ? `${couple.bride.nameEn} & ${couple.groom.nameEn}` : `${couple.bride.nameSi} සහ ${couple.groom.nameSi}`}
          </p>
        </div>

        {/* Date Display */}
        <div className="mt-4 inline-block rounded-full border border-[#B49A55]/40 bg-[#FFFDF7] px-5 py-1.5 shadow-xs">
          <p className="font-serif text-sm font-semibold tracking-wide text-[#3F3B29] sm:text-base">
            {lang === "si" ? displayDate.si.full : displayDate.en.full}
          </p>
        </div>

        {/* Open Invitation CTA */}
        <div className="mt-6 pb-2">
          <button
            type="button"
            onClick={handleOpenClick}
            className="group relative inline-flex items-center gap-2.5 rounded-full border-2 border-[#1F3E2F] bg-gradient-to-r from-[#2F5A45] to-[#1F3E2F] px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-[#EADFB8] shadow-lg shadow-[#1F3E2F]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 sm:text-sm"
          >
            <MailOpen className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span className="font-medium">
              {lang === "si" ? "ආරාධනය විවෘත කරන්න" : "Open Invitation"}
            </span>
            <Sparkles className="h-3.5 w-3.5 opacity-80" />
          </button>
        </div>
      </div>
    </div>
  );
}
