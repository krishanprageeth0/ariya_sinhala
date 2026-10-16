import React from "react";

export function PoruwaIcon({ className = "w-8 h-8 text-[#EADFB8]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Auspicious Pinnacle (Kotha) */}
      <path d="M24 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="8" r="2" fill="currentColor" />
      
      {/* Traditional Carved Roof Tier 1 */}
      <path
        d="M10 18C16 12 32 12 38 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13 18C18 14 30 14 35 18"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />

      {/* Canopy Arch & Beams */}
      <line x1="8" y1="19" x2="40" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="22" x2="38" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

      {/* Poruwa Pillars (Kunu / Pillars) with floral capitals */}
      <line x1="12" y1="22" x2="12" y2="40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="19" y1="22" x2="19" y2="40" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
      <line x1="29" y1="22" x2="29" y2="40" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
      <line x1="36" y1="22" x2="36" y2="40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* White Jasmine Garland draped across pillars */}
      <path
        d="M12 28C15 31 19 31 24 28C29 31 33 31 36 28"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
        opacity="0.8"
      />

      {/* Poruwa Stepped Wooden Platform Base (Padikkama) */}
      <line x1="8" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="43" x2="42" y2="43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="35" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function PunkalasaIcon({ className = "w-8 h-8 text-[#B49A55]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sprouting Coconut Flowers (Pol Mal) */}
      <path d="M24 6V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 10C27 8 30 7 32 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 10C21 8 18 7 16 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 13C28 12 32 12 35 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M24 13C20 12 16 12 13 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* Betel Leaves framing the pot */}
      <path d="M18 16C16 12 11 14 12 18C13 21 16 20 18 20" stroke="currentColor" strokeWidth="1.2" />
      <path d="M30 16C32 12 37 14 36 18C35 21 32 20 30 20" stroke="currentColor" strokeWidth="1.2" />

      {/* Pot Rim */}
      <ellipse cx="24" cy="19" rx="8" ry="2.5" stroke="currentColor" strokeWidth="1.8" />
      
      {/* Auspicious Clay Kalasa Pot Body */}
      <path
        d="M17 20C12 25 12 33 16 38C19 41 29 41 32 38C36 33 36 25 31 20"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Decorative Traditional Engraved Band */}
      <path d="M15 29C19 32 29 32 33 29" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 1.5" />
      <circle cx="24" cy="33" r="1.5" fill="currentColor" />

      {/* Pot Pedestal Base */}
      <line x1="18" y1="41" x2="30" y2="41" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
