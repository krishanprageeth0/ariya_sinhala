import React from "react";

export function SriLankanMandala({ className = "w-full h-full text-[#B49A55]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="200" cy="200" r="175" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <circle cx="200" cy="200" r="162" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      
      {/* 16 Radial Floral Rays */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = i * 22.5;
        return (
          <g key={i} transform={`rotate(${angle} 200 200)`}>
            {/* Outer Lotus Petal */}
            <path
              d="M200 25 C208 65, 230 110, 200 145 C170 110, 192 65, 200 25 Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.75"
            />
            {/* Inner Petal Vein */}
            <line x1="200" y1="40" x2="200" y2="135" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
            <circle cx="200" cy="22" r="2.5" fill="currentColor" opacity="0.8" />
          </g>
        );
      })}

      <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="200" cy="200" r="115" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />

      {/* 8 Main Auspicious Lotus Leaves */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = i * 45;
        return (
          <g key={`main-${i}`} transform={`rotate(${angle} 200 200)`}>
            <path
              d="M200 70 C220 100, 240 140, 200 170 C160 140, 180 100, 200 70 Z"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              opacity="0.85"
            />
            <circle cx="200" cy="68" r="3" fill="currentColor" opacity="0.9" />
          </g>
        );
      })}

      {/* Center Sun & Core Bindu */}
      <circle cx="200" cy="200" r="45" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="200" cy="200" r="32" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="200" cy="200" r="18" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="6" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
