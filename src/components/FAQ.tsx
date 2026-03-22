"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is a ROSCA?",
    a: "A ROSCA (Rotating Savings and Credit Association) is a group savings mechanism where members contribute a fixed amount each period, and one member receives the entire pool — rotating until everyone has received once. Also known as chit funds (India), tandas (Latin America), and stokvels (Southern Africa).",
  },
  {
    q: "What makes Kosh's ROSCA 'ZK'?",
    a: "ZK proofs let participants prove they've contributed the correct amount without revealing the actual amount or their identity. This means the ROSCA can be enforced by code without anyone being able to track individual contribution amounts or link contributions to real-world identities.",
  },
  {
    q: "Who controls the funds?",
    a: "No one. Funds are locked in a smart contract on Midnight Network. The contract enforces the rules you set when creating the circle — no admin, no override, no custodian.",
  },
  {
    q: "What happens if someone doesn't pay?",
    a: "Default conditions are set when the circle is created. The contract enforces them automatically — this could be forfeiture of future payouts, loss of ZK credit score, or exclusion from future circles. The specific rule is chosen by the circle creator.",
  },
  {
    q: "How is payout order decided?",
    a: "The circle creator chooses at setup: fixed order (pre-agreed rotation), or a verifiably random on-chain lottery. Both are transparent and tamper-proof.",
  },
  {
    q: "When will Kosh launch?",
    a: "Kosh is targeting launch alongside Midnight Network mainnet in 2026. Join the waitlist to be notified and get early access.",
  },
  {
    q: "What currencies are supported?",
    a: "Kosh will initially support Midnight's native token and stablecoins available on the Midnight Network. Additional assets will be added as the ecosystem matures.",
  },
  {
    q: "Is Kosh open source?",
    a: "The Kosh protocol and Compact ZK circuits will be publicly auditable. The core contracts are designed to be composable — any developer can build ROSCA mechanics on top.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.19, 1, 0.22, 1] }}
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            fontWeight: 500,
            color: open ? "var(--color-ink)" : "var(--color-text)",
            transition: "color 0.2s",
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
          style={{ flexShrink: 0, color: "var(--color-muted)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M8 3v10M3 8h10" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--color-muted)",
                paddingBottom: "1.5rem",
                maxWidth: "680px",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" style={{ padding: "8rem 0" }}>
      <div className="section-wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "6rem",
            alignItems: "flex-start",
          }}
          className="faq-grid"
        >
          {/* Left: sticky header */}
          <div ref={ref} style={{ position: "sticky", top: "7rem" }}>
            <motion.p
              className="label-mono"
              style={{ marginBottom: "1rem" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              &gt; FAQ
            </motion.p>
            <motion.h2
              className="display-md"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            >
              Common questions
            </motion.h2>
            <motion.p
              style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--color-muted)", marginTop: "1rem" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              More questions? Email{" "}
              <a
                href="mailto:kd@kosh.finance"
                style={{ color: "var(--color-silver)", textDecoration: "none", borderBottom: "1px solid var(--color-border-hi)" }}
              >
                kd@kosh.finance
              </a>
            </motion.p>
          </div>

          {/* Right: accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} item={faq} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .faq-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
