"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const STATS = [
  {
    number: "$500B+",
    label: "Annual ROSCA volume worldwide",
    sub: "Chit funds, tandas, stokvels",
    color: "#8B5CF6",
    span: "col-span-2 md:col-span-1",
  },
  {
    number: "$360B",
    label: "India's informal chit fund market",
    sub: "100× the registered sector",
    color: "#F59E0B",
    span: "col-span-2 md:col-span-1",
  },
  {
    number: "500M+",
    label: "People using savings circles globally",
    sub: "Mostly informal, trust-based",
    color: "#06B6D4",
    span: "col-span-2",
  },
  {
    number: "0",
    label: "Privacy-preserving ROSCAs that exist",
    sub: "We're building the first one",
    color: "#4ADE80",
    span: "col-span-2",
  },
];

function parseNumber(raw: string): { prefix: string; suffix: string; value: number } {
  const match = raw.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
  if (!match) return { prefix: "", suffix: "", value: 0 };
  return {
    prefix: match[1],
    value: parseFloat(match[2]),
    suffix: match[3],
  };
}

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCurrent(eased * target);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return current;
}

function StatCell({ stat }: { stat: typeof STATS[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { prefix, value, suffix } = parseNumber(stat.number);
  const count = useCountUp(value, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayValue = value === 0
    ? "0"
    : value % 1 === 0
    ? Math.round(count).toLocaleString()
    : count.toFixed(1);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden p-8 ${stat.span}`}
      style={{
        borderLeft: `2px solid ${stat.color}`,
        borderTop: "1px solid rgba(255,255,255,0.04)",
        background: "#06070B",
      }}
    >
      {/* Ghost number */}
      <div
        className="num-giant absolute -right-4 -bottom-4 select-none pointer-events-none leading-none"
        aria-hidden
        style={{
          color: "transparent",
          WebkitTextStroke: `1px ${stat.color}08`,
          fontSize: "clamp(4rem, 8vw, 7rem)",
          zIndex: 0,
        }}
      >
        {stat.number.replace(/[^0-9]/g, "").slice(0, 4)}
      </div>

      <div className="relative z-10">
        <div
          className="font-display font-black mb-2"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: stat.color,
          }}
        >
          {prefix}{displayValue}{suffix}
        </div>
        <p className="font-semibold mb-1 text-sm" style={{ color: "#E8E9F0" }}>
          {stat.label}
        </p>
        <p className="text-xs" style={{ color: "#4B5563", fontFamily: "'JetBrains Mono', monospace" }}>
          {stat.sub}
        </p>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="py-20"
      style={{ background: "#06070B", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeader
            label="The Scale"
            title={
              <>
                The market is{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <span className="serif-accent">already there.</span>
                </span>
                {" "}The privacy isn&apos;t.
              </>
            }
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 border-l-0 border-t border-r border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
          {STATS.map((stat) => (
            <StatCell key={stat.number} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
