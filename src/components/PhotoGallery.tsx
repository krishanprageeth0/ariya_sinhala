"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { LiyawelDivider } from "./ornaments/LiyawelDivider";
import { weddingConfig } from "../config/wedding";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface PhotoGalleryProps {
  lang: "si" | "en";
}

export function PhotoGallery({ lang }: PhotoGalleryProps) {
  const { gallery, messages } = weddingConfig;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : gallery.length - 1));
  }, [selectedIndex, gallery.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < gallery.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex, gallery.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="scroll-mt-20 px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl text-center">
        <span className="mb-2 block text-xs uppercase tracking-[0.34em] text-[#2F5A45] font-semibold">
          {lang === "si" ? "සුන්දර මතක සටහන්" : "Captured Moments"}
        </span>

        <h2 className="font-serif text-3xl font-bold text-[#1F3E2F] sm:text-4xl">
          {lang === "si" ? messages.galleryHeadingSi : messages.galleryHeadingEn}
        </h2>

        <div className="mt-4 flex justify-center">
          <LiyawelDivider className="w-44 text-[#B49A55]" />
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-3">
          {gallery.map((item, idx) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenLightbox(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleOpenLightbox(idx);
              }}
              aria-label={lang === "si" ? item.altSi : item.altEn}
              className={`group relative overflow-hidden rounded-2xl border border-[#D3BD86] bg-[#FFFDF7] shadow-md transition-all duration-300 hover:border-[#B49A55] hover:shadow-xl cursor-pointer ${
                item.span === "tall" ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.src}
                alt={lang === "si" ? item.altSi : item.altEn}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-[#1F3E2F]/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-2 grid h-10 w-10 place-items-center rounded-full bg-[#FFFDF7]/90 text-[#1F3E2F] shadow-lg">
                  <Eye className="h-5 w-5" />
                </span>
                <p className="font-serif text-xs font-semibold text-[#EADFB8] sm:text-sm text-center">
                  {lang === "si" ? item.captionSi : item.captionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-white hover:text-black active:scale-95 sm:top-6 sm:right-6"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-white hover:text-black active:scale-95 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-white hover:text-black active:scale-95 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative flex max-h-[85vh] max-w-4xl flex-col items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[65vh] w-[90vw] max-w-3xl sm:h-[75vh]">
              <Image
                src={gallery[selectedIndex].src}
                alt={lang === "si" ? gallery[selectedIndex].altSi : gallery[selectedIndex].altEn}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 800px"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-3 text-center">
              <p className="font-serif text-sm font-semibold text-[#EADFB8] sm:text-base">
                {lang === "si" ? gallery[selectedIndex].captionSi : gallery[selectedIndex].captionEn}
              </p>
              <p className="text-xs text-stone-400">
                {selectedIndex + 1} / {gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
