"use client";

import { useEffect, useRef } from "react";

interface TimelineStepProps {
  number: string;
  title: React.ReactNode;
  body: string;
  detail: string;
  color: string;
  isLast?: boolean;
}

export default function TimelineStep({
  number,
  title,
  body,
  detail,
  color,
  isLast = false,
}: TimelineStepProps) {
  const lineRef = useRef<SVGLineElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const wrap = wrapRef.current;
    if (!line || isLast) return;

    const len = line.getTotalLength?.() ?? 80;
    line.style.strokeDasharray = String(len);
    line.style.strokeDashoffset = String(len);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.style.transition = "stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s";
          line.style.strokeDashoffset = "0";
          observer.unobserve(wrap!);
        }
      },
      { threshold: 0.3 }
    );

    if (wrap) observer.observe(wrap);
    return () => observer.disconnect();
  }, [isLast]);

  return (
    <div ref={wrapRef} className="relative flex gap-6 lg:gap-10">
      {/* Left: timeline node + connector */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: "40px" }}>
        {/* Node */}
        <div
          className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: `${color}18`,
            border: `2px solid ${color}`,
            boxShadow: `0 0 16px ${color}30`,
          }}
        >
          <span
            className="font-mono text-xs font-bold"
            style={{ color }}
          >
            {number}
          </span>
        </div>

        {/* Connector line */}
        {!isLast && (
          <div className="flex-1 relative mt-1" style={{ minHeight: "80px", width: "2px" }}>
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              style={{ width: "2px" }}
            >
              <line
                ref={lineRef}
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke={color}
                strokeWidth="1.5"
                strokeOpacity="0.35"
                strokeLinecap="round"
              />
            </svg>
            {/* Static fallback line */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(180deg, ${color}25, ${color}08)` }}
            />
          </div>
        )}
      </div>

      {/* Right: content */}
      <div className="pb-12 flex-1 min-w-0">
        {/* Ghost number */}
        <div
          className="num-giant select-none pointer-events-none absolute right-0 top-0 leading-none"
          aria-hidden
          style={{
            color: "transparent",
            WebkitTextStroke: `1px ${color}08`,
            fontSize: "clamp(4rem, 10vw, 8rem)",
            zIndex: 0,
          }}
        >
          {number}
        </div>

        <div className="relative z-10">
          <div className="terminal-label mb-3" style={{ opacity: 0.5 }}>Step {number}</div>
          <h3
            className="mb-3 font-display font-bold"
            style={{
              fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
              letterSpacing: "-0.02em",
              color: "#E8E9F0",
              lineHeight: 1.25,
            }}
          >
            {title}
          </h3>
          <p className="mb-3 leading-relaxed" style={{ color: "#9CA3AF", maxWidth: "560px" }}>
            {body}
          </p>
          <div className="terminal-label" style={{ color }}>
            {detail}
          </div>
        </div>
      </div>
    </div>
  );
}
