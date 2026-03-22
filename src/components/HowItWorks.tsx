"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    n: "01",
    label: "Create",
    title: "Launch a circle",
    body: "Set the number of members, contribution amount, cycle length, and payout order. Deploy a smart contract with one click.",
    detail: "Your parameters are public. Your identity is optional.",
  },
  {
    n: "02",
    label: "Join",
    title: "Invite members",
    body: "Members join by submitting a ZK proof of identity — proving eligibility without revealing who they are.",
    detail: "No KYC database. No identity exposure.",
  },
  {
    n: "03",
    label: "Contribute",
    title: "Fund each cycle",
    body: "Every period, members contribute their share. ZK proofs verify payment without revealing the amount or the sender.",
    detail: "Contributions are cryptographically anonymous.",
  },
  {
    n: "04",
    label: "Receive",
    title: "Get the payout",
    body: "One member receives the full pool each cycle — chosen by the pre-agreed rotation or a fair on-chain lottery.",
    detail: "Payouts are automatic. No middleman. No delay.",
  },
  {
    n: "05",
    label: "Default",
    title: "Handle non-payment",
    body: "If a member misses a contribution, the smart contract enforces the pre-defined default rule automatically.",
    detail: "No social enforcement needed. Code handles it.",
  },
  {
    n: "06",
    label: "Prove",
    title: "Build your ZK credit",
    body: "Completing a full circle generates a ZK credit proof — a portable on-chain record of reliability.",
    detail: "Use it for future circles. Keep your history private.",
  },
];

const ease: [number, number, number, number] = [0.19, 1, 0.22, 1];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease }}
      className="glass-card"
      style={{ padding: "2rem", borderRadius: 0 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            fontWeight: 500,
            color: "var(--color-muted)",
            letterSpacing: "0.1em",
          }}
        >
          {step.n}
        </span>
        <span className="label-mono">{step.label}</span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1.0625rem",
          fontWeight: 600,
          color: "var(--color-ink)",
          marginBottom: "0.625rem",
          letterSpacing: "-0.01em",
        }}
      >
        {step.title}
      </h3>
      <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--color-muted)", marginBottom: "1rem" }}>
        {step.body}
      </p>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--color-silver)",
          opacity: 0.6,
          borderTop: "1px solid var(--color-border)",
          paddingTop: "0.75rem",
        }}
      >
        // {step.detail}
      </p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" style={{ padding: "8rem 0" }}>
      <div className="section-wrap">
        {/* Header */}
        <div
          ref={headRef}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "6rem", alignItems: "end" }}
          className="how-header"
        >
          <div>
            <motion.p
              className="label-mono"
              style={{ marginBottom: "1rem" }}
              initial={{ opacity: 0 }}
              animate={headInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              &gt; ROSCA Lifecycle
            </motion.p>
            <motion.h2
              className="display-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              How a ZK-ROSCA works
            </motion.h2>
          </div>
          <motion.p
            style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--color-muted)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            A ROSCA is a rotating savings and credit association — the oldest form of
            collective saving. Kosh adds ZK proofs, smart contract enforcement, and
            on-chain credit without removing any of the trust that makes it work.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--color-border)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <StepCard key={step.n} step={step} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .how-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
        @media (max-width: 600px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
