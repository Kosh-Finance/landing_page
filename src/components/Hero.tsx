"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

const ease: [number, number, number, number] = [0.19, 1, 0.22, 1];

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  };
}

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#080B0F",
      }}
    >
      {/* Atmospheric side halos — matches the reference */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Left halo */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-10%",
            transform: "translateY(-50%)",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(140,160,220,0.12) 0%, rgba(100,120,200,0.06) 35%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        {/* Right halo */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-10%",
            transform: "translateY(-50%)",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(140,160,220,0.10) 0%, rgba(100,120,200,0.05) 35%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* 3D Canvas — centered behind content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <HeroCanvas />
      </div>

      {/* Left-side text vignette — keep text readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background: `
            linear-gradient(90deg, #080B0F 0%, #080B0F 28%, rgba(8,11,15,0.7) 45%, transparent 65%),
            linear-gradient(0deg, #080B0F 0%, transparent 25%)
          `,
        }}
      />

      {/* Content */}
      <div
        className="section-wrap"
        style={{ position: "relative", zIndex: 3, paddingTop: "7rem", paddingBottom: "6rem" }}
      >
        <div style={{ maxWidth: "580px" }}>
          <motion.p
            className="label-mono"
            style={{ marginBottom: "1.5rem" }}
            {...fadeIn(0)}
          >
            &gt; ZK-ROSCA · Midnight Network · Est. 2026
          </motion.p>

          <motion.h1
            className="display-xl"
            style={{ marginBottom: "1.5rem" }}
            {...fadeIn(0.14)}
          >
            Save Together.<br />
            Stay Private.
          </motion.h1>

          <motion.p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "var(--color-silver)",
              maxWidth: "460px",
              marginBottom: "2.5rem",
            }}
            {...fadeIn(0.26)}
          >
            The world&apos;s first ZK-ROSCA — a privacy-preserving savings circle where
            contributions are anonymous, payouts enforced by code, and credit built on-chain.
          </motion.p>

          <motion.div
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
            {...fadeIn(0.38)}
          >
            <a href="#waitlist" className="btn-lunar">
              Join the Waitlist
            </a>
            <a href="#how-it-works" className="btn-outline">
              How It Works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 7h12M8 3l4 4-4 4" />
              </svg>
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "3rem", flexWrap: "wrap" }}
            {...fadeIn(0.5)}
          >
            {[
              { label: "ZK Proofs", sub: "Zero knowledge" },
              { label: "Smart Contracts", sub: "Code-enforced" },
              { label: "Midnight Network", sub: "Privacy L1" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "1px", height: "28px", background: "var(--color-border-hi)" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-ink)" }}>
                    {item.label}
                  </div>
                  <div className="label-mono" style={{ fontSize: "0.6rem", marginTop: "2px" }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "140px",
          zIndex: 3,
          pointerEvents: "none",
          background: "linear-gradient(transparent, #080B0F)",
        }}
      />
    </section>
  );
}
