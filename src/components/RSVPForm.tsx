"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { LiyawelDivider, FloralCorner } from "./ornaments/LiyawelDivider";
import { weddingConfig } from "../config/wedding";
import { Send, CheckCircle2, User, Phone, MessageSquare, AlertCircle, Loader2 } from "lucide-react";

interface RSVPFormProps {
  lang: "si" | "en";
}

export function RSVPForm({ lang }: RSVPFormProps) {
  const { rsvp, messages } = weddingConfig;

  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(true);
  const [guestCount, setGuestCount] = useState(1);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleIncrement = () => {
    if (guestCount < rsvp.maxGuestsPerSubmission) {
      setGuestCount((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (guestCount > 1) {
      setGuestCount((prev) => prev - 1);
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#B49A55", "#2F5A45", "#EADFB8", "#D3BD86", "#963A30"],
      });
    } catch {
      // Confetti not available
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!name.trim()) {
      setStatusMessage({
        type: "error",
        text: lang === "si" ? "කරුණාකර ඔබගේ නම ඇතුළත් කරන්න." : "Please enter your full name.",
      });
      return;
    }

    if (attending === null) {
      setStatusMessage({
        type: "error",
        text: lang === "si" ? "කරුණාකර ඔබගේ සහභාගීත්වය තෝරන්න." : "Please choose whether you will attend.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attending,
          guestCount: attending ? guestCount : 0,
          phone: phone.trim(),
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMessage({
          type: "success",
          text:
            lang === "si"
              ? attending
                ? "ඔබගේ පැමිණීම සාදරයෙන් සටහන් කරගන්නා ලදී! අප හා එක්වීම පිළිබඳව අප ඉතා සතුටු වන්නෙමු."
                : "ඔබගේ පිළිතුර සටහන් කරගන්නා ලදී. ඔබගේ ආදරණීය සුබපැතුම් වලට බෙහෙවින් තුති!"
              : attending
              ? "Your RSVP has been joyfully confirmed! We look forward to celebrating with you."
              : "Thank you for letting us know. We appreciate your warm wishes!",
        });

        if (attending) {
          triggerConfetti();
        }

        // Reset form
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || (lang === "si" ? "දෝෂයක් සිදු විය. කරුණාකර නැවත උත්සාහ කරන්න." : "Something went wrong. Please try again."),
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: lang === "si" ? "සම්බන්ධතා දෝෂයකි. කරුණාකර නැවත උත්සාහ කරන්න." : "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="scroll-mt-20 px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-xl text-center">
        <span className="mb-2 block text-xs uppercase tracking-[0.34em] text-[#2F5A45] font-semibold">
          {lang === "si" ? "පැමිණීම දැනුම් දෙන්න" : "Kindly Reply"}
        </span>

        <h2 className="font-serif text-3xl font-bold text-[#1F3E2F] sm:text-4xl">
          {lang === "si" ? messages.rsvpHeadingSi : messages.rsvpHeadingEn}
        </h2>

        <div className="mt-4 flex justify-center">
          <LiyawelDivider className="w-44 text-[#B49A55]" />
        </div>

        <p className="mt-4 text-sm text-[#78704F] leading-relaxed">
          {lang === "si"
            ? "අපගේ මංගල ප්‍රීතිය බෙදාගැනීමට ඔබ සැම සාදරයෙන් පිළිගනිමු. කරුණාකර පහත පෝරමය පුරවා ඔබගේ පැමිණීම තහවුරු කරන්න."
            : "We joyfully await your presence. Please let us know if you will be joining us."}
        </p>

        <p className="mt-2 font-serif text-xs font-semibold text-[#1F3E2F] uppercase tracking-wider sm:text-sm">
          {lang === "si" ? rsvp.deadlineSi : rsvp.deadlineEn}
        </p>

        {/* RSVP Form Card */}
        <form
          onSubmit={handleSubmit}
          className="relative mt-8 rounded-[24px] border border-[#D3BD86] p-6 text-left sm:p-10 shadow-[0_24px_50px_-30px_rgba(140,113,52,0.4)]"
          style={{
            background: "linear-gradient(180deg, rgba(254, 251, 245, 0.9) 0%, rgba(247, 239, 224, 0.9) 100%)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Inner Border Frame */}
          <span className="pointer-events-none absolute inset-2 rounded-[18px] border border-[#B49A55]/40" />

          {/* Floral Corners */}
          <div className="pointer-events-none absolute top-4 left-4">
            <FloralCorner position="top-left" className="h-5 w-5 text-[#B49A55]/60" />
          </div>
          <div className="pointer-events-none absolute top-4 right-4">
            <FloralCorner position="top-right" className="h-5 w-5 text-[#B49A55]/60" />
          </div>

          {/* Full Name */}
          <div className="relative mb-5">
            <label htmlFor="rsvp-name" className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1F3E2F]">
              <User className="h-3.5 w-3.5 text-[#8C7134]" />
              <span>{lang === "si" ? "සම්පූර්ණ නම" : "Full Name"} *</span>
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={lang === "si" ? "ඔබගේ නම ඇතුළත් කරන්න" : "Enter your full name"}
              className="w-full rounded-xl border border-[#B49A55]/50 bg-[#FFFDF7] px-4 py-3 text-sm text-[#3F3B29] placeholder:text-stone-400 focus:border-[#2F5A45] focus:outline-none focus:ring-1 focus:ring-[#2F5A45]"
            />
          </div>

          {/* Attendance Selection */}
          <div className="relative mb-6">
            <p className="mb-2.5 text-xs uppercase tracking-wider font-semibold text-[#1F3E2F]">
              {lang === "si" ? "ඔබ සහභාගී වන්නේද?" : "Will you be attending?"} *
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAttending(true)}
                className={`rounded-xl border py-3 px-2 text-center text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  attending === true
                    ? "border-[#2F5A45] bg-[#2F5A45] text-[#EADFB8] shadow-md"
                    : "border-[#B49A55]/50 bg-[#FFFDF7]/60 text-[#78704F] hover:bg-[#FFFDF7]"
                }`}
              >
                {lang === "si" ? "ප්‍රීතියෙන් සහභාගී වෙමි" : "Joyfully Accept"}
              </button>

              <button
                type="button"
                onClick={() => setAttending(false)}
                className={`rounded-xl border py-3 px-2 text-center text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  attending === false
                    ? "border-[#963A30] bg-[#963A30] text-[#FFFDF7] shadow-md"
                    : "border-[#B49A55]/50 bg-[#FFFDF7]/60 text-[#78704F] hover:bg-[#FFFDF7]"
                }`}
              >
                {lang === "si" ? "සහභාගී විය නොහැක" : "Regretfully Decline"}
              </button>
            </div>
          </div>

          {/* Guest Count (only if attending) */}
          {attending && (
            <div className="relative mb-6 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1F3E2F]">
                  {lang === "si" ? "සහභාගී වන සාමාජිකයින් ගණන" : "Number of Guests"}
                </span>
                <span className="text-xs text-[#8C7134]">
                  (Max {rsvp.maxGuestsPerSubmission})
                </span>
              </div>

              <div className="mt-3 flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={handleDecrement}
                  disabled={guestCount <= 1}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#2F5A45]/40 bg-[#2F5A45]/10 text-xl font-bold text-[#1F3E2F] transition-all hover:bg-[#2F5A45]/20 active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Decrease guest count"
                >
                  -
                </button>

                <span className="font-serif text-3xl font-bold text-[#1F3E2F] tabular-nums min-w-[3rem] text-center">
                  {guestCount}
                </span>

                <button
                  type="button"
                  onClick={handleIncrement}
                  disabled={guestCount >= rsvp.maxGuestsPerSubmission}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#2F5A45]/40 bg-[#2F5A45]/10 text-xl font-bold text-[#1F3E2F] transition-all hover:bg-[#2F5A45]/20 active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Increase guest count"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Contact Phone Number */}
          <div className="relative mb-5">
            <label htmlFor="rsvp-phone" className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1F3E2F]">
              <Phone className="h-3.5 w-3.5 text-[#8C7134]" />
              <span>{lang === "si" ? "දුරකථන / WhatsApp අංකය" : "Contact / WhatsApp Number"}</span>
            </label>
            <input
              id="rsvp-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+94 7X XXX XXXX"
              className="w-full rounded-xl border border-[#B49A55]/50 bg-[#FFFDF7] px-4 py-3 text-sm text-[#3F3B29] placeholder:text-stone-400 focus:border-[#2F5A45] focus:outline-none focus:ring-1 focus:ring-[#2F5A45]"
            />
          </div>

          {/* Wishes / Message */}
          <div className="relative mb-6">
            <label htmlFor="rsvp-message" className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1F3E2F]">
              <MessageSquare className="h-3.5 w-3.5 text-[#8C7134]" />
              <span>{lang === "si" ? "සුබපැතුම් පණිවිඩයක් එක් කරන්න" : "Special Wishes / Message"}</span>
            </label>
            <textarea
              id="rsvp-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={lang === "si" ? "නව යුවළ වෙත ඔබගේ ආදරණීය සුබපැතුම්..." : "Send warm blessings to the couple..."}
              className="w-full rounded-xl border border-[#B49A55]/50 bg-[#FFFDF7] px-4 py-3 text-sm text-[#3F3B29] placeholder:text-stone-400 focus:border-[#2F5A45] focus:outline-none focus:ring-1 focus:ring-[#2F5A45] resize-none"
            />
          </div>

          {/* Status Message Banner */}
          {statusMessage && (
            <div
              className={`mb-5 flex items-start gap-2.5 rounded-xl p-3.5 text-xs leading-relaxed ${
                statusMessage.type === "success"
                  ? "border border-[#2F5A45]/40 bg-[#2F5A45]/10 text-[#1F3E2F]"
                  : "border border-red-300 bg-red-50 text-red-800"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2F5A45]" />
              ) : (
                <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#2F5A45] bg-[#2F5A45] py-4 text-xs uppercase tracking-[0.26em] font-bold text-[#EADFB8] shadow-md transition-all duration-300 hover:bg-[#1F3E2F] hover:shadow-lg hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-wait sm:text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>{lang === "si" ? "යොමු කරමින් පවතී..." : "Submitting..."}</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span>{lang === "si" ? "පිළිතුර යොමු කරන්න" : "Submit RSVP"}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
