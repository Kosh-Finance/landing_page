"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";
  const directionClass =
    direction === "left" ? "reveal-left"
    : direction === "right" ? "reveal-right"
    : direction === "fade" ? "reveal-fade"
    : "reveal";

  return (
    <div ref={ref} className={`${directionClass} ${delayClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
