"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "B+", prefix: "$", label: "Global ROSCA market", sub: "Annual informal savings volume" },
  { value: 500, suffix: "M+", prefix: "", label: "People in savings circles", sub: "Across 100+ countries" },
  { value: 360, suffix: "B+", prefix: "$", label: "India chit fund market", sub: "Largest single ROSCA market" },
  { value: 0, suffix: "", prefix: "", label: "Private ROSCAs", sub: "Until Kosh — none existed on-chain" },
];

function useCountUp(end: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return count;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      style={{
        padding: "2.5rem",
        borderRight: index < stats.length - 1 ? "1px solid var(--color-border)" : "none",
        position: "relative",
      }}
    >
      {/* Ghost number behind */}
      <div
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "1rem",
          fontFamily: "var(--font-mono)",
          fontSize: "6rem",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          fontWeight: 700,
          color: "var(--color-ink)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "0.75rem",
        }}
      >
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "var(--color-text)",
          marginBottom: "0.375rem",
        }}
      >
        {stat.label}
      </div>
      <div className="label-mono" style={{ color: "var(--color-muted)" }}>
        {stat.sub}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section style={{ padding: "6rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
      <div className="section-wrap">
        <div ref={ref} style={{ marginBottom: "3rem" }}>
          <motion.p
            className="label-mono"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            &gt; Market Context
          </motion.p>
          <motion.h2
            className="display-md"
            style={{ marginTop: "0.75rem" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          >
            The market is enormous.<br />The problem is unsolved.
          </motion.h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--color-border)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--color-border);
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
