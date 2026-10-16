"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { SriLankanMandala } from "./ornaments/SriLankanMandala";
import { LiyawelDivider, FloralCorner } from "./ornaments/LiyawelDivider";
import { weddingConfig } from "../config/wedding";

interface WeddingHeroProps {
  lang: "si" | "en";
}

export function WeddingHero({ lang }: WeddingHeroProps) {
  const { couple, displayDate, messages } = weddingConfig;

  return (
    <section id="hero" className="relative scroll-mt-20 overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24">
      {/* Background Rotating Chandra Mandala */}
      <div className="pointer-events-none absolute left-1/2 -top-[14rem] w-[28rem] -translate-x-1/2 select-none sm:-top-[22rem] sm:w-[44rem]">
        <SriLankanMandala className="w-full h-full text-[#B49A55] opacity-25" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        {/* Main Royal Card */}
        <div
          className="relative rounded-[28px] border border-[#B49A55]/40 px-5 pt-10 pb-6 sm:px-10 sm:pt-14 sm:pb-8 shadow-[0_28px_60px_-35px_rgba(140,113,52,0.35)]"
          style={{
            background: "linear-gradient(180deg, rgba(254, 251, 244, 0.75) 0%, rgba(245, 237, 220, 0.75) 100%)",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* Inner Border Frame */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-2.5 rounded-[20px] border border-[#B49A55]/45 sm:inset-3 sm:rounded-[22px]"
          />

          {/* Floral Corners */}
          <div className="pointer-events-none absolute top-4 left-4">
            <FloralCorner position="top-left" className="h-5 w-5 text-[#B49A55]/70" />
          </div>
          <div className="pointer-events-none absolute top-4 right-4">
            <FloralCorner position="top-right" className="h-5 w-5 text-[#B49A55]/70" />
          </div>

          {/* Traditional Heading */}
          <p className="text-center font-serif text-lg font-bold tracking-widest text-[#1F3E2F] sm:text-2xl">
            {lang === "si" ? messages.invitationGreetingSi : messages.invitationGreetingEn}
          </p>

          <p className="mt-3 text-center text-[0.7rem] uppercase tracking-[0.35em] text-[#8C7134] font-semibold sm:text-xs">
            {lang === "si" ? messages.heroSubheadingSi : messages.heroSubheadingEn}
          </p>

          <div className="mt-4 flex justify-center">
            <LiyawelDivider className="w-44 text-[#B49A55]" />
          </div>

          {/* Couple Names */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 px-2 text-center sm:gap-4">
            <div className="flex flex-col items-center">
              <h2 className="font-serif text-3xl font-semibold italic text-[#2F5A45] sm:text-5xl">
                {lang === "si" ? couple.bride.nameSi : couple.bride.nameEn}
              </h2>
              <span className="text-xs uppercase tracking-wider text-[#78704F]">
                {lang === "si" ? couple.bride.nameEn : couple.bride.nameSi}
              </span>
            </div>

            <span className="font-serif text-2xl italic text-[#963A30] sm:text-4xl">&</span>

            <div className="flex flex-col items-center">
              <h2 className="font-serif text-3xl font-semibold italic text-[#2F5A45] sm:text-5xl">
                {lang === "si" ? couple.groom.nameSi : couple.groom.nameEn}
              </h2>
              <span className="text-xs uppercase tracking-wider text-[#78704F]">
                {lang === "si" ? couple.groom.nameEn : couple.groom.nameSi}
              </span>
            </div>
          </div>

          {/* Parents Information */}
          <div className="mx-auto mt-6 grid max-w-xl grid-cols-1 gap-4 text-center sm:mt-8 sm:grid-cols-2 sm:gap-8">
            <div className="rounded-xl border border-[#D3BD86]/30 bg-[#FFFDF7]/50 p-2.5">
              <p className="text-xs leading-relaxed text-[#78704F] sm:text-sm">
                <span className="block font-bold text-[#3F3B29]">
                  {lang === "si" ? "දියණිය" : "Daughter of"}
                </span>
                <span className="block">
                  {lang === "si" ? couple.bride.parentsSi : couple.bride.parentsEn}
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-[#D3BD86]/30 bg-[#FFFDF7]/50 p-2.5">
              <p className="text-xs leading-relaxed text-[#78704F] sm:text-sm">
                <span className="block font-bold text-[#3F3B29]">
                  {lang === "si" ? "පුතණුවන්" : "Son of"}
                </span>
                <span className="block">
                  {lang === "si" ? couple.groom.parentsSi : couple.groom.parentsEn}
                </span>
              </p>
            </div>
          </div>

          {/* Wedding Date Ribbon */}
          <div className="mx-auto mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-3 px-2 sm:mt-10 sm:max-w-lg sm:gap-6">
            <div className="flex flex-col items-stretch gap-1 sm:gap-2">
              <span className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#2F5A45] to-transparent" />
              <span className="text-center font-serif text-xs font-semibold uppercase tracking-[0.18em] text-[#1F3E2F] sm:text-base">
                {lang === "si" ? displayDate.si.month : displayDate.en.month}
              </span>
              <span className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#2F5A45] to-transparent" />
            </div>

            <span className="font-serif text-4xl font-semibold leading-none text-[#2F5A45] sm:text-6xl">
              {lang === "si" ? displayDate.si.day : displayDate.en.day}
            </span>

            <div className="flex flex-col items-stretch gap-1 sm:gap-2">
              <span className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#2F5A45] to-transparent" />
              <span className="text-center font-serif text-xs font-semibold uppercase tracking-[0.18em] text-[#1F3E2F] sm:text-base">
                {lang === "si" ? displayDate.si.year : displayDate.en.year}
              </span>
              <span className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#2F5A45] to-transparent" />
            </div>
          </div>

          {/* Main Couple Illustration */}
          <div className="relative mt-8 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#B49A55]/50 shadow-xl bg-[#FFFBF2]">
              <Image
                src="/images/hero-couple.jpg"
                alt="Sanduni and Ravindu in Kandyan wedding attire"
                width={600}
                height={800}
                priority
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#story"
          aria-label="Scroll down to Our Story"
          className="mx-auto mt-6 flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-75 sm:mt-8"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.34em] text-[#8C7134]">
            {lang === "si" ? "පහළට බලන්න" : "Scroll Down"}
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[#B49A55]/60 text-[#2F5A45] shadow-xs">
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </span>
        </a>
      </div>
    </section>
  );
}
