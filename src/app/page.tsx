"use client";

import React, { useState } from "react";
import { InvitationCover } from "../components/InvitationCover";
import { WeddingHero } from "../components/WeddingHero";
import { RelationshipTimeline } from "../components/RelationshipTimeline";
import { WeddingCountdown } from "../components/WeddingCountdown";
import { WeddingEvents } from "../components/WeddingEvents";
import { PhotoGallery } from "../components/PhotoGallery";
import { WeddingVenue } from "../components/WeddingVenue";
import { RSVPForm } from "../components/RSVPForm";
import { WeddingFooter } from "../components/WeddingFooter";
import { Navigation } from "../components/Navigation";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { AudioPlayer } from "../components/AudioPlayer";

export default function WeddingPage() {
  const [lang, setLang] = useState<"si" | "en">("si");
  const [isOpen, setIsOpen] = useState(false);
  const [audioTrigger, setAudioTrigger] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setAudioTrigger(true);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#F7F2E7] text-[#3F3B29] selection:bg-[#B49A55]/30">
      {/* Floating Ambient Gold Particles */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden z-1">
        <span
          className="gold-particle"
          style={{ left: "10%", width: "5px", height: "5px", animationDuration: "14s", animationDelay: "0s" }}
        />
        <span
          className="gold-particle"
          style={{ left: "25%", width: "4px", height: "4px", animationDuration: "18s", animationDelay: "3s" }}
        />
        <span
          className="gold-particle"
          style={{ left: "42%", width: "6px", height: "6px", animationDuration: "16s", animationDelay: "1s" }}
        />
        <span
          className="gold-particle"
          style={{ left: "60%", width: "4px", height: "4px", animationDuration: "20s", animationDelay: "5s" }}
        />
        <span
          className="gold-particle"
          style={{ left: "75%", width: "5px", height: "5px", animationDuration: "15s", animationDelay: "2s" }}
        />
        <span
          className="gold-particle"
          style={{ left: "88%", width: "3px", height: "3px", animationDuration: "22s", animationDelay: "6s" }}
        />
      </div>

      {/* Opening Invitation Screen */}
      {!isOpen && (
        <InvitationCover lang={lang} onOpen={handleOpenInvitation} />
      )}

      {/* Top Floating Controls */}
      <LanguageSwitcher lang={lang} onToggle={setLang} />
      <AudioPlayer autoPlayTrigger={audioTrigger} />

      {/* Main Website Sections */}
      <div className={`transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-90"}`}>
        <WeddingHero lang={lang} />
        <RelationshipTimeline lang={lang} />
        <WeddingCountdown lang={lang} />
        <WeddingEvents lang={lang} />
        <PhotoGallery lang={lang} />
        <WeddingVenue lang={lang} />
        <RSVPForm lang={lang} />
        <WeddingFooter lang={lang} />
      </div>

      {/* Floating Bottom Section Navigation */}
      <Navigation lang={lang} />
    </main>
  );
}
