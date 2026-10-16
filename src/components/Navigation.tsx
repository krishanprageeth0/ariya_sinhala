"use client";

import React, { useState, useEffect } from "react";
import { Home, Heart, CalendarDays, Image as ImageIcon, MapPin, Mail } from "lucide-react";

interface NavigationProps {
  lang: "si" | "en";
}

export function Navigation({ lang }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "story", "countdown", "events", "gallery", "venue", "rsvp"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      id: "hero",
      labelSi: "මුල් පිටුව",
      labelEn: "Home",
      icon: Home,
    },
    {
      id: "story",
      labelSi: "කතාව",
      labelEn: "Story",
      icon: Heart,
    },
    {
      id: "events",
      labelSi: "උත්සව",
      labelEn: "Events",
      icon: CalendarDays,
    },
    {
      id: "gallery",
      labelSi: "මතකයන්",
      labelEn: "Gallery",
      icon: ImageIcon,
    },
    {
      id: "venue",
      labelSi: "ස්ථානය",
      labelEn: "Venue",
      icon: MapPin,
    },
    {
      id: "rsvp",
      labelSi: "ඇරයුම",
      labelEn: "RSVP",
      icon: Mail,
    },
  ];

  return (
    <nav
      aria-label="Section navigation"
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 px-3 sm:bottom-6"
      style={{ width: "min(92vw, 26rem)" }}
    >
      <ul
        className="flex items-center justify-between gap-1 rounded-full border border-[#B49A55]/50 px-2 py-1.5 shadow-[0_18px_36px_-18px_rgba(140,113,52,0.55)] backdrop-blur-md"
        style={{
          background: "rgba(252, 249, 240, 0.94)",
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const title = lang === "si" ? item.labelSi : item.labelEn;

          return (
            <li key={item.id} className="flex-1">
              <a
                href={`#${item.id}`}
                title={title}
                aria-label={title}
                className={`flex flex-col items-center justify-center rounded-full py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[#2F5A45] text-[#EADFB8] shadow-xs"
                    : "text-[#2F5A45] hover:bg-[#B49A55]/15"
                }`}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">{title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
