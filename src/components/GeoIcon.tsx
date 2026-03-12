interface GeoIconProps {
  name:
    | "send"
    | "pay"
    | "save"
    | "spend"
    | "shield"
    | "scale"
    | "globe"
    | "key"
    | "check"
    | "x"
    | "star"
    | "lock"
    | "identity"
    | "eye"
    | "arrow-right"
    | "zap"
    | "circle-check";
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export default function GeoIcon({
  name,
  size = 16,
  color = "currentColor",
  strokeWidth = 1.5,
  className = "",
}: GeoIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "send":
      return (
        <svg {...props}>
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      );

    case "pay":
      return (
        <svg {...props}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
          <path d="M6 15h2" />
          <path d="M10 15h4" />
        </svg>
      );

    case "save":
      return (
        <svg {...props}>
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      );

    case "spend":
      return (
        <svg {...props}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M2 10h20" />
        </svg>
      );

    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );

    case "scale":
      return (
        <svg {...props}>
          <path d="M12 3v18" />
          <path d="M3 9l4-4 5 4 5-4 4 4" />
          <path d="M5 20h14" />
          <path d="M7 9l-4 7h8L7 9Z" />
          <path d="M17 9l-4 7h8l-4-7Z" />
        </svg>
      );

    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      );

    case "key":
      return (
        <svg {...props}>
          <circle cx="7.5" cy="15.5" r="5.5" />
          <path d="M21 2l-9.6 9.6" />
          <path d="M15.5 7.5L17 6" />
          <path d="M19 4l2 2" />
        </svg>
      );

    case "check":
      return (
        <svg {...props}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );

    case "x":
      return (
        <svg {...props}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );

    case "star":
      return (
        <svg {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );

    case "lock":
      return (
        <svg {...props}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      );

    case "identity":
      return (
        <svg {...props}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <circle cx="8" cy="10" r="2" />
          <path d="M14 8h4" />
          <path d="M14 12h4" />
          <path d="M4 16c0-2 2-3 4-3s4 1 4 3" />
        </svg>
      );

    case "eye":
      return (
        <svg {...props}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    case "arrow-right":
      return (
        <svg {...props}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );

    case "zap":
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );

    case "circle-check":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );

    default:
      return null;
  }
}
