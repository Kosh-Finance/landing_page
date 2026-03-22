"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MidnightLogo from "./MidnightLogo";

const reasons = [
  {
    n: "I",
    title: "Privacy is the default, not an add-on",
    body: "Every other blockchain makes privacy optional and expensive. Midnight flips this: privacy is the base layer. ZK-ROSCAs require invisible contributions by design — Midnight is the only chain where that's possible without heroic engineering.",
    tag: "Architecture",
  },
  {
    n: "II",
    title: "Compact ZK circuits, not hacked workarounds",
    body: "Midnight's Compact language is purpose-built for ZK circuit development. Writing ZK proofs for ROSCA contribution verification on any other chain would take years. On Midnight, it's the intended use case.",
    tag: "Developer Experience",
  },
  {
    n: "III",
    title: "Compliance without surveillance",
    body: "Midnight's dual-state model separates public commitment data from private transaction data. This means regulators can verify aggregate compliance without accessing individual user data — a critical property for global ROSCA rollout.",
    tag: "Regulatory",
  },
];

const ease: [number, number, number, number] = [0.19, 1, 0.22, 1];

function ReasonRow({ r, index }: { r: typeof reasons[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className="glass-card"
      style={{
        padding: "2.5rem",
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        gap: "2rem",
        alignItems: "flex-start",
        borderRadius: 0,
      }}
    >
      {/* Roman numeral */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "1.5rem",
          fontWeight: 400,
          color: "var(--color-border-hi)",
          paddingTop: "2px",
        }}
      >
        {r.n}
      </div>

      {/* Content */}
      <div>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            letterSpacing: "-0.015em",
            marginBottom: "0.875rem",
          }}
        >
          {r.title}
        </h3>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-muted)", maxWidth: "600px" }}>
          {r.body}
        </p>
      </div>

      {/* Tag */}
      <div
        className="label-mono"
        style={{
          whiteSpace: "nowrap",
          padding: "0.375rem 0.75rem",
          border: "1px solid var(--color-border)",
          borderRadius: "2px",
          fontSize: "0.6rem",
        }}
      >
        {r.tag}
      </div>
    </motion.div>
  );
}

export default function WhyMidnight() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="why-midnight" style={{ padding: "8rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div className="section-wrap">
        <div ref={headRef} style={{ marginBottom: "5rem" }}>
          <motion.p
            className="label-mono"
            style={{ marginBottom: "1rem" }}
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            &gt; Chain Selection
          </motion.p>
          <motion.h2
            className="display-lg"
            style={{ maxWidth: "560px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            Why only Midnight can do this
          </motion.h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--color-border)", borderRadius: "4px", overflow: "hidden" }}>
          {reasons.map((r, i) => (
            <ReasonRow key={r.n} r={r} index={i} />
          ))}
        </div>

        {/* Midnight badge */}
        <motion.div
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            padding: "1.25rem 1.75rem",
            border: "1px solid var(--color-border-hi)",
            borderRadius: "4px",
            background: "rgba(255,255,255,0.02)",
            width: "fit-content",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease }}
        >
          <MidnightLogo wordmark size={22} color="var(--color-silver)" />
          <div style={{ width: "1px", height: "32px", background: "var(--color-border)" }} />
          <div className="label-mono">Launching with Midnight mainnet · 2026</div>
        </motion.div>
      </div>
    </section>
  );
}
