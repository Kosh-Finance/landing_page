"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface TimelineStepProps {
  number: string;
  title: ReactNode;
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
  const lineRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const wrap = wrapRef.current;
    if (!line || !wrap || isLast) return;

    // Start collapsed
    line.style.transform = "scaleY(0)";
    line.style.transformOrigin = "top";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s";
          line.style.transform = "scaleY(1)";
          observer.unobserve(wrap);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(wrap);
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
          <span className="font-mono text-xs font-bold" style={{ color }}>
            {number}
          </span>
        </div>

        {/* Connector line — CSS scaleY animation, no SVG coordinate issues */}
        {!isLast && (
          <div className="flex-1 relative mt-1 w-px" style={{ minHeight: "80px" }}>
            <div
              ref={lineRef}
              className="absolute inset-0"
              style={{ background: `linear-gradient(180deg, ${color}40, ${color}08)` }}
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
