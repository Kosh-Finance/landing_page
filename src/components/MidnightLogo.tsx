// Midnight Network logo — recreated from brand assets
// Usage: <MidnightLogo color="#FFFFFF" size={24} wordmark />

interface MidnightLogoProps {
  color?: string;
  size?: number;
  wordmark?: boolean;
  className?: string;
}

// Just the icon mark (circle + 3 squares)
function MidnightMark({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx="50" cy="50" r="43" stroke={color} strokeWidth="11" fill="none" />
      {/* 3 squares — centered, equal size, equal spacing */}
      <rect x="41" y="22" width="18" height="18" fill={color} />
      <rect x="41" y="41" width="18" height="18" fill={color} />
      <rect x="41" y="60" width="18" height="18" fill={color} />
    </svg>
  );
}

export default function MidnightLogo({
  color = "#FFFFFF",
  size = 24,
  wordmark = false,
  className,
}: MidnightLogoProps) {
  if (!wordmark) {
    return <MidnightMark color={color} size={size} />;
  }

  // Full wordmark: icon + "midnight" text
  return (
    <div className={className} style={{ display: "inline-flex", alignItems: "center", gap: size * 0.5 }}>
      <MidnightMark color={color} size={size} />
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: size * 1.1,
          color,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        midnight
      </span>
    </div>
  );
}
