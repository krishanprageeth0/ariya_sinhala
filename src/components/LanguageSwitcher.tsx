"use client";

import React from "react";
import { Languages } from "lucide-react";

interface LanguageSwitcherProps {
  lang: "si" | "en";
  onToggle: (lang: "si" | "en") => void;
}

export function LanguageSwitcher({ lang, onToggle }: LanguageSwitcherProps) {
  return (
    <div className="fixed left-4 top-4 z-50 flex items-center rounded-full border border-[#B49A55]/60 bg-[#FCF9F0]/90 p-1 shadow-lg shadow-[#8C7134]/15 backdrop-blur-md sm:left-6 sm:top-6">
      <button
        type="button"
        onClick={() => onToggle("si")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
          lang === "si"
            ? "bg-gradient-to-r from-[#2F5A45] to-[#1F3E2F] text-[#EADFB8] shadow-xs"
            : "text-[#4B3427] hover:text-[#1F3E2F]"
        }`}
        aria-label="Switch to Sinhala language"
      >
        <span className="font-sinhala text-sm">සිංහල</span>
      </button>

      <button
        type="button"
        onClick={() => onToggle("en")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
          lang === "en"
            ? "bg-gradient-to-r from-[#2F5A45] to-[#1F3E2F] text-[#EADFB8] shadow-xs"
            : "text-[#4B3427] hover:text-[#1F3E2F]"
        }`}
        aria-label="Switch to English language"
      >
        <Languages className="h-3 w-3" />
        <span>ENG</span>
      </button>
    </div>
  );
}
