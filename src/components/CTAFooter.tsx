"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import MidnightLogo from "./MidnightLogo";

export default function CTAFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  return (
    <section id="waitlist" style={{ padding: "8rem 0 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div className="section-wrap">
        {/* CTA */}
        <div
          ref={ref}
          style={{
            textAlign: "center",
            padding: "6rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,210,230,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <motion.p
            className="label-mono"
            style={{ marginBottom: "1.5rem" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            &gt; Early Access
          </motion.p>

          <motion.h2
            className="display-xl"
            style={{ marginBottom: "1.25rem" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          >
            Save privately.<br />
            Starting 2026.
          </motion.h2>

          <motion.p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "var(--color-muted)",
              maxWidth: "480px",
              margin: "0 auto 3rem",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            Join the waitlist. Get early access when Kosh launches on
            Midnight Network mainnet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  maxWidth: "440px",
                  margin: "0 auto",
                  flexDirection: "row",
                }}
                className="waitlist-form"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    flex: 1,
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--color-border-hi)",
                    borderRadius: "2px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "var(--color-ink)",
                    outline: "none",
                    transition: "border-color 0.2s",
                    width: "100%",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border-hi)")}
                />
                <button
                  type="submit"
                  className="btn-lunar"
                  style={{ whiteSpace: "nowrap", opacity: loading ? 0.6 : 1 }}
                  disabled={loading}
                >
                  {loading ? "..." : "Join Waitlist"}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.875rem 1.5rem",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "2px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "var(--color-ink)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 8l4 4 8-8" />
                </svg>
                You&apos;re on the list. We&apos;ll be in touch.
              </motion.div>
            )}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "3rem",
              flexWrap: "wrap",
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              "Zero-knowledge proofs",
              "No custodian",
              "Code-enforced rules",
            ].map((badge) => (
              <div
                key={badge}
                className="label-mono"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="var(--color-muted)" strokeWidth="1" />
                  <path d="M3 5l1.5 1.5L7 3.5" stroke="var(--color-muted)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="rule" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.75rem 0",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="var(--color-muted)" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" fill="var(--color-muted)" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="label-mono">© 2026 Kosh Finance</span>
          </div>

          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a href="mailto:kd@kosh.finance" className="label-mono" style={{ color: "var(--color-muted)", textDecoration: "none" }}>
              kd@kosh.finance
            </a>
            <MidnightLogo wordmark size={14} color="var(--color-muted)" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .waitlist-form {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
