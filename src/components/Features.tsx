"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    id: "privacy",
    size: "large",
    label: "Zero Knowledge",
    title: "Your contributions are invisible",
    body: "ZK proofs on Midnight Network ensure no one — not other members, not validators, not even Kosh — can see how much you contribute. Only the proof of compliance is public.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4L4 8v8c0 5 4.5 9 10 10 5.5-1 10-5 10-10V8L14 4z" />
        <path d="M10 14l3 3 5-5" />
      </svg>
    ),
  },
  {
    id: "enforcement",
    size: "small",
    label: "Smart Contracts",
    title: "Code enforces the rules",
    body: "No informal trust. Smart contracts manage every contribution cycle, payout rotation, and default condition.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 17.5l2.5 2.5M14 17.5h7" />
      </svg>
    ),
  },
  {
    id: "credit",
    size: "small",
    label: "ZK Credit",
    title: "Build reputation without exposure",
    body: "Every completed circle generates a ZK credit proof. Prove your reliability to future circles — without revealing your history.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M16 3l1.5 1.5L21 1" />
      </svg>
    ),
  },
  {
    id: "global",
    size: "large",
    label: "Global Access",
    title: "ROSCAs are everywhere. Now they're on-chain.",
    body: "500M+ people participate in savings circles globally — chit funds, tandas, stokvels. Kosh is the first protocol to bring this $500B+ informal market on-chain with cryptographic guarantees.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 4C14 4 10 9 10 14s4 10 4 10M14 4c0 0 4 5 4 10s-4 10-4 10" />
        <path d="M4 14h20" />
        <path d="M5 9h18M5 19h18" />
      </svg>
    ),
  },
  {
    id: "midnight",
    size: "small",
    label: "Midnight Network",
    title: "Privacy-first blockchain",
    body: "Built exclusively on Midnight — the only L1 designed for private smart contracts by default.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
  },
  {
    id: "open",
    size: "small",
    label: "Open Protocol",
    title: "Composable & auditable",
    body: "Kosh is a protocol, not a product. Any app can build ROSCA mechanics on top. Compact ZK circuits are publicly auditable.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLarge = feature.size === "large";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
      className="glass-card"
      style={{
        borderRadius: "4px",
        padding: isLarge ? "2.5rem" : "1.75rem",
        gridColumn: isLarge ? "span 2" : "span 1",
        display: "flex",
        flexDirection: isLarge ? "row" : "column",
        gap: isLarge ? "2.5rem" : "1.25rem",
        alignItems: isLarge ? "flex-start" : "flex-start",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: isLarge ? "56px" : "48px",
          height: isLarge ? "56px" : "48px",
          borderRadius: "4px",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-accent)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        {feature.icon}
      </div>
      <div>
        <p className="label-mono" style={{ marginBottom: "0.5rem" }}>{feature.label}</p>
        <h3 style={{
          fontFamily: "var(--font-sans)",
          fontSize: isLarge ? "1.375rem" : "1rem",
          fontWeight: 600,
          color: "var(--color-ink)",
          lineHeight: 1.25,
          letterSpacing: "-0.015em",
          marginBottom: "0.75rem",
        }}>
          {feature.title}
        </h3>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          lineHeight: 1.65,
          color: "var(--color-muted)",
          maxWidth: "460px",
        }}>
          {feature.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section style={{ padding: "8rem 0", position: "relative" }}>
      {/* Subtle grid texture */}
      <div
        className="grid-bg"
        style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }}
      />

      <div className="section-wrap" style={{ position: "relative" }}>
        {/* Header */}
        <div ref={headRef} style={{ marginBottom: "4rem", maxWidth: "560px" }}>
          <motion.p
            className="label-mono"
            style={{ marginBottom: "1rem" }}
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            &gt; Protocol Architecture
          </motion.p>
          <motion.h2
            className="display-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          >
            Built for privacy.<br />Designed for scale.
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--color-border)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
