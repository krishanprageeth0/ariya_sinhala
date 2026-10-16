import React from "react";

export function LiyawelDivider({
  className = "w-48 text-[#B49A55]",
  showDiamond = true,
}: {
  className?: string;
  showDiamond?: boolean;
}) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D3BD86] to-[#B49A55]" />
      {showDiamond ? (
        <span className="flex items-center gap-1.5 shrink-0 px-1">
          <span className="h-1 w-1 rotate-45 bg-[#D3BD86] opacity-80" />
          <span className="h-2 w-2 rotate-45 bg-[#B49A55] shadow-xs" />
          <span className="h-1 w-1 rotate-45 bg-[#D3BD86] opacity-80" />
        </span>
      ) : (
        <span className="h-1.5 w-1.5 rotate-45 bg-[#B49A55] shrink-0" />
      )}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D3BD86] to-[#B49A55]" />
    </div>
  );
}

export function FloralCorner({
  className = "w-8 h-8 text-[#B49A55]",
  position = "top-left",
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const rotationClass = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${rotationClass} transition-transform`}
      aria-hidden="true"
    >
      <path
        d="M2 46V14C2 7.37 7.37 2 14 2H46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 44V16C8 11.58 11.58 8 16 8H44"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.8" />
      <path
        d="M16 16C19 22 25 24 30 24"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
        strokeLinecap="round"
      />
      <circle cx="30" cy="24" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
