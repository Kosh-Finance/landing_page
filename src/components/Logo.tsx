import React from "react";

interface LogoProps {
  variant?: "full" | "icon";
  size?: number;
  className?: string;
}

export default function Logo({ variant = "full", size = 36, className = "" }: LogoProps) {
  const id = React.useId().replace(/:/g, "");

  if (variant === "icon") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Kosh icon"
      >
        <defs>
          <linearGradient id={`ig-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id={`ig2-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* Outer diamond/gem shape */}
        <path
          d="M20 2 L38 14 L38 26 L20 38 L2 26 L2 14 Z"
          fill={`url(#ig-${id})`}
          opacity="0.15"
        />
        <path
          d="M20 2 L38 14 L38 26 L20 38 L2 26 L2 14 Z"
          stroke={`url(#ig2-${id})`}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Inner K letterform */}
        {/* Vertical stroke of K */}
        <rect x="12" y="11" width="3.5" height="18" rx="1.75" fill={`url(#ig-${id})`} />
        {/* Upper diagonal of K */}
        <path
          d="M15.5 20 L25.5 11.5"
          stroke={`url(#ig-${id})`}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Lower diagonal of K */}
        <path
          d="M15.5 20 L26 28.5"
          stroke={`url(#ig-${id})`}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Gem facet line */}
        <path
          d="M20 2 L26 14 L20 20 L14 14 Z"
          fill={`url(#ig2-${id})`}
          opacity="0.12"
        />
      </svg>
    );
  }

  // Full wordmark with icon
  return (
    <svg
      width={Math.round(size * 3.8)}
      height={size}
      viewBox="0 0 144 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kosh"
    >
      <defs>
        <linearGradient id={`wg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id={`wg2-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>

      {/* Icon part */}
      <path
        d="M19 1 L36 12 L36 25 L19 36 L2 25 L2 12 Z"
        fill={`url(#wg-${id})`}
        opacity="0.15"
      />
      <path
        d="M19 1 L36 12 L36 25 L19 36 L2 25 L2 12 Z"
        stroke={`url(#wg2-${id})`}
        strokeWidth="1.5"
        fill="none"
      />
      {/* K strokes in icon */}
      <rect x="11" y="10" width="3.2" height="17" rx="1.6" fill={`url(#wg-${id})`} />
      <path d="M14.2 18.5 L24 10" stroke={`url(#wg-${id})`} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M14.2 18.5 L24.5 27" stroke={`url(#wg-${id})`} strokeWidth="3.2" strokeLinecap="round" />

      {/* "KOSH" wordmark */}
      {/* K */}
      <path
        d="M46 8 L46 29 M46 18.5 L56 8 M46 18.5 L57 29"
        stroke={`url(#wg-${id})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* O */}
      <ellipse
        cx="68" cy="18.5"
        rx="7.5" ry="10.5"
        stroke={`url(#wg-${id})`}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* S */}
      <path
        d="M87.5 9.5 C87.5 9.5 84 8 81 9.5 C78 11 78 14 81 15.5 C84 17 88 18 88 21 C88 24 85 30 80 29"
        stroke={`url(#wg-${id})`}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* H */}
      <path
        d="M95 8 L95 29 M108 8 L108 29 M95 18.5 L108 18.5"
        stroke={`url(#wg-${id})`}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
