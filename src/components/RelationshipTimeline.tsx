"use client";

import React from "react";
import Image from "next/image";
import { LiyawelDivider, FloralCorner } from "./ornaments/LiyawelDivider";
import { weddingConfig } from "../config/wedding";
import { Heart } from "lucide-react";

interface RelationshipTimelineProps {
  lang: "si" | "en";
}

export function RelationshipTimeline({ lang }: RelationshipTimelineProps) {
  const { timeline, displayDate, venue, messages } = weddingConfig;

  return (
    <section id="story" className="scroll-mt-20 px-4 py-12 sm:px-8 sm:py-16">
      <div
        className="relative mx-auto max-w-5xl rounded-[28px] border border-[#D3BD86] p-6 sm:p-12 shadow-[0_24px_50px_-38px_rgba(140,113,52,0.45)]"
        style={{
          background: "linear-gradient(180deg, rgba(253, 250, 242, 0.8) 0%, rgba(244, 236, 218, 0.8) 100%)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Inner Border Frame */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-2 rounded-[20px] border border-[#B49A55]/40 sm:inset-3 sm:rounded-[22px]"
        />

        {/* Floral Corners */}
        <div className="pointer-events-none absolute top-4 left-4">
          <FloralCorner position="top-left" className="h-6 w-6 text-[#B49A55]/70" />
        </div>
        <div className="pointer-events-none absolute top-4 right-4">
          <FloralCorner position="top-right" className="h-6 w-6 text-[#B49A55]/70" />
        </div>

        {/* Story Intro: Two Columns with Featured Love Story Illustration */}
        <div className="relative grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          {/* Couple Love Story Illustration */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[22px] border border-[#B49A55]/60 p-1 bg-[#FFF9EF] shadow-lg">
            <div className="relative h-full w-full overflow-hidden rounded-[18px]">
              <Image
                src="/images/story-couple.jpg"
                alt="Our Story Artwork"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Romantic Text Intro */}
          <div className="text-center md:text-left">
            <span className="mb-2 block text-xs uppercase tracking-[0.35em] text-[#8C7134] font-semibold">
              {lang === "si" ? messages.storyHeadingSi : messages.storyHeadingEn}
            </span>

            <h2 className="font-serif text-3xl font-bold text-[#1F3E2F] sm:text-4xl md:text-5xl">
              {lang === "si" ? "සදාතනික ආදරය" : "Together Forever"}
            </h2>

            <div className="mt-4 flex justify-center md:justify-start">
              <LiyawelDivider className="w-36 text-[#B49A55]" />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#78704F] sm:text-base">
              {lang === "si" ? messages.storyDescriptionSi : messages.storyDescriptionEn}
            </p>

            <p className="mt-6 font-serif text-xl italic font-medium text-[#2F5A45] sm:text-2xl">
              {lang === "si" ? displayDate.si.full : displayDate.en.full}
            </p>

            <p className="mt-2 text-xs uppercase tracking-widest text-[#3F3B29] font-medium sm:text-sm">
              {lang === "si" ? venue.nameSi : venue.nameEn} • {lang === "si" ? venue.citySi : venue.cityEn}
            </p>
          </div>
        </div>

        {/* Timeline Divider */}
        <div className="relative mx-auto mt-12 border-t border-[#B49A55]/30 pt-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B49A55]/40 bg-[#FFFDF7] px-4 py-1 text-xs uppercase tracking-[0.3em] font-semibold text-[#2F5A45]">
            <Heart className="h-3 w-3 fill-[#963A30] text-[#963A30]" />
            {lang === "si" ? "අප ගෙවූ මඟ සටහන්" : "A Journey Together"}
          </span>
        </div>

        {/* 5 Milestone Cards */}
        <div className="relative mt-8 flex flex-col gap-6 sm:gap-8 max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <div
              key={item.year}
              className="relative grid grid-cols-[auto_1fr] items-start gap-4 rounded-2xl border border-[#D3BD86]/40 bg-[#FFFDF7]/60 p-4 transition-all duration-300 hover:border-[#B49A55] hover:shadow-md sm:gap-6 sm:p-6"
            >
              {/* Year Badge */}
              <div className="flex flex-col items-center justify-center shrink-0 min-w-[4rem] text-center">
                <span className="font-serif text-2xl font-semibold italic text-[#2F5A45] sm:text-3xl">
                  {item.year}
                </span>
                <span className="mt-1 h-1.5 w-1.5 rotate-45 bg-[#B49A55]" />
              </div>

              {/* Milestone Content */}
              <div className="border-l border-[#B49A55]/40 pl-4 sm:pl-6">
                <h4 className="font-serif text-base font-bold uppercase tracking-wider text-[#1F3E2F] sm:text-lg">
                  {lang === "si" ? item.titleSi : item.titleEn}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#78704F] sm:text-sm">
                  {lang === "si" ? item.descriptionSi : item.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
