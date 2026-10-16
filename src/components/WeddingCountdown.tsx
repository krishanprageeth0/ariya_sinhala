"use client";

import React, { useState, useEffect } from "react";
import { LiyawelDivider } from "./ornaments/LiyawelDivider";
import { weddingConfig } from "../config/wedding";
import { Sparkles, CalendarHeart } from "lucide-react";

interface WeddingCountdownProps {
  lang: "si" | "en";
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function WeddingCountdown({ lang }: WeddingCountdownProps) {
  const { weddingDate, messages } = weddingConfig;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(weddingDate).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isPast: false,
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  const padZero = (num: number) => num.toString().padStart(2, "0");

  return (
    <section id="countdown" className="scroll-mt-20 px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        {/* Section Heading */}
        <span className="mb-2 block text-xs uppercase tracking-[0.34em] text-[#2F5A45] font-semibold">
          {lang === "si" ? "සුබ මොහොත එළඹෙන තෙක්" : "The Big Day Awaits"}
        </span>

        <h2 className="font-serif text-3xl font-bold text-[#1F3E2F] sm:text-4xl">
          {lang === "si" ? messages.countdownHeadingSi : messages.countdownHeadingEn}
        </h2>

        <div className="mt-4 flex justify-center">
          <LiyawelDivider className="w-44 text-[#B49A55]" />
        </div>

        {/* Countdown Content */}
        {mounted && timeLeft.isPast ? (
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-[#B49A55] bg-[#FFFDF7] p-8 shadow-md">
            <div className="flex justify-center text-[#963A30]">
              <CalendarHeart className="h-10 w-10 animate-bounce" />
            </div>
            <h3 className="mt-3 font-serif text-2xl font-bold text-[#1F3E2F]">
              {lang === "si" ? "සුබ මංගල දිනය උදා විය!" : "The Wedding Day Has Arrived!"}
            </h3>
            <p className="mt-2 text-sm text-[#78704F]">
              {lang === "si"
                ? "අපගේ ආදරයේ අලුත් පරිච්ඡේදය අති උත්කර්ෂවත්ව ආරම්භ විය. ඔබ සැමගේ ආශිර්වාදයට තුති!"
                : "Our forever has begun. Thank you to everyone for blessing our sacred union!"}
            </p>
          </div>
        ) : (
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-4 gap-2.5 sm:gap-6">
            {/* Days */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl border border-[#D3BD86] bg-gradient-to-b from-[#FFFDF7]/90 to-[#F5ECE0]/90 p-3 sm:p-6 shadow-[0_12px_30px_-18px_rgba(140,113,52,0.35)] backdrop-blur-md">
              <span className="pointer-events-none absolute inset-1.5 rounded-xl border border-[#D3BD86]/40" />
              <span className="font-serif text-2xl font-bold tabular-nums text-[#1F3E2F] sm:text-5xl">
                {mounted ? padZero(timeLeft.days) : "--"}
              </span>
              <span className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] font-medium text-[#78704F] sm:text-xs">
                {lang === "si" ? "දින" : "Days"}
              </span>
            </div>

            {/* Hours */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl border border-[#D3BD86] bg-gradient-to-b from-[#FFFDF7]/90 to-[#F5ECE0]/90 p-3 sm:p-6 shadow-[0_12px_30px_-18px_rgba(140,113,52,0.35)] backdrop-blur-md">
              <span className="pointer-events-none absolute inset-1.5 rounded-xl border border-[#D3BD86]/40" />
              <span className="font-serif text-2xl font-bold tabular-nums text-[#1F3E2F] sm:text-5xl">
                {mounted ? padZero(timeLeft.hours) : "--"}
              </span>
              <span className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] font-medium text-[#78704F] sm:text-xs">
                {lang === "si" ? "පැය" : "Hours"}
              </span>
            </div>

            {/* Minutes */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl border border-[#D3BD86] bg-gradient-to-b from-[#FFFDF7]/90 to-[#F5ECE0]/90 p-3 sm:p-6 shadow-[0_12px_30px_-18px_rgba(140,113,52,0.35)] backdrop-blur-md">
              <span className="pointer-events-none absolute inset-1.5 rounded-xl border border-[#D3BD86]/40" />
              <span className="font-serif text-2xl font-bold tabular-nums text-[#1F3E2F] sm:text-5xl">
                {mounted ? padZero(timeLeft.minutes) : "--"}
              </span>
              <span className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] font-medium text-[#78704F] sm:text-xs">
                {lang === "si" ? "මිනිත්තු" : "Minutes"}
              </span>
            </div>

            {/* Seconds */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl border border-[#D3BD86] bg-gradient-to-b from-[#FFFDF7]/90 to-[#F5ECE0]/90 p-3 sm:p-6 shadow-[0_12px_30px_-18px_rgba(140,113,52,0.35)] backdrop-blur-md">
              <span className="pointer-events-none absolute inset-1.5 rounded-xl border border-[#D3BD86]/40" />
              <span className="font-serif text-2xl font-bold tabular-nums text-[#1F3E2F] sm:text-5xl text-[#963A30]">
                {mounted ? padZero(timeLeft.seconds) : "--"}
              </span>
              <span className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] font-medium text-[#78704F] sm:text-xs">
                {lang === "si" ? "තත්පර" : "Seconds"}
              </span>
            </div>
          </div>
        )}

        <p className="mt-5 text-xs text-[#8C7134] flex items-center justify-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{lang === "si" ? "ශ්‍රී ලංකා සම්මත වේලාවෙන් (Asia/Colombo)" : "Standard Sri Lanka Time (Asia/Colombo)"}</span>
        </p>
      </div>
    </section>
  );
}
