interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  useTerminalLabel?: boolean;
}

export default function SectionHeader({
  label,
  title,
  body,
  align = "center",
  useTerminalLabel = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      <div className={useTerminalLabel ? "terminal-label" : `section-label ${align === "center" ? "justify-center" : ""}`}>
        {label}
      </div>
      <h2
        style={{
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#E8E9F0",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {body && (
        <p
          className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}
          style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "#9CA3AF" }}
        >
          {body}
        </p>
      )}
    </div>
  );
}
