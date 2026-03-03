"use client";

import EmailCapture from "./EmailCapture";
import ScrollReveal from "./ScrollReveal";

function PhoneMockup() {
  return (
    <div className="phone-frame w-[260px] h-[520px] mx-auto" style={{ transform: "perspective(1000px) rotateY(-8deg) rotateX(4deg)" }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-8 pb-2" style={{ color: "#6B7280", fontSize: "0.65rem" }}>
        <span className="font-mono">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="flex gap-0.5">
            {[1,2,3].map(i => <div key={i} className="w-1 rounded-sm" style={{ height: `${i*3+3}px`, background: "#4ADE80" }} />)}
          </div>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 7 C3 4 5 3 7 3 C9 3 11 4 13 7" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>

      {/* App header */}
      <div className="px-5 pt-2 pb-4">
        <p className="text-xs mb-1" style={{ color: "#6B7280", fontFamily: "'JetBrains Mono', monospace" }}>kosh.finance</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs" style={{ color: "#9CA3AF" }}>Total Balance</p>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold" style={{ color: "#E8E9F0" }}>••••••</span>
              <div className="shield-badge">ZK</div>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="6" r="3" stroke="#8B5CF6" strokeWidth="1.2" />
              <path d="M2 14 C2 11 4.686 9 8 9 C11.314 9 14 11 14 14" stroke="#8B5CF6" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="px-5 py-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: "↗", label: "Send", color: "#8B5CF6" },
            { icon: "💳", label: "Pay", color: "#06B6D4" },
            { icon: "🔒", label: "Save", color: "#F59E0B" },
            { icon: "⬇", label: "Spend", color: "#4ADE80" },
          ].map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-1">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm"
                style={{ background: `${a.color}18`, border: `1px solid ${a.color}30` }}
              >
                <span style={{ fontSize: "1rem" }}>{a.icon}</span>
              </div>
              <span className="text-xs" style={{ color: "#6B7280" }}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 my-2" style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />

      {/* Recent activity */}
      <div className="px-5">
        <p className="text-xs mb-3 font-semibold" style={{ color: "#9CA3AF", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>RECENT</p>
        <div className="flex flex-col gap-2.5">
          {[
            { label: "Family — Mumbai", sub: "Remittance · Private", amount: "••••", color: "#8B5CF6", badge: "SENT" },
            { label: "Payroll Q1 2026", sub: "ZK Payroll · 3 recipients", amount: "••••", color: "#06B6D4", badge: "PAID" },
            { label: "Circle — DeFi Squad", sub: "Round 4 of 10 · Saved", amount: "••••", color: "#F59E0B", badge: "SAVED" },
          ].map((tx) => (
            <div key={tx.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${tx.color}20`, border: `1px solid ${tx.color}25` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: tx.color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#E8E9F0", fontSize: "0.68rem" }}>{tx.label}</p>
                  <p style={{ color: "#6B7280", fontSize: "0.6rem" }}>{tx.sub}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono font-semibold" style={{ color: "#E8E9F0", fontSize: "0.68rem" }}>{tx.amount}</p>
                <span
                  className="font-mono"
                  style={{ color: tx.color, fontSize: "0.55rem", letterSpacing: "0.06em", fontWeight: 700 }}
                >
                  {tx.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom tab bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-around py-3 px-4"
        style={{ background: "rgba(13,14,22,0.9)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {["Home", "Send", "Card", "Profile"].map((tab, i) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div
              className="w-5 h-5 rounded flex items-center justify-center"
              style={{ background: i === 0 ? "rgba(139,92,246,0.2)" : "transparent" }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i === 0 ? "#8B5CF6" : "#374151" }}
              />
            </div>
            <span style={{ fontSize: "0.55rem", color: i === 0 ? "#8B5CF6" : "#4B5563" }}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20"
      style={{ background: "linear-gradient(180deg, #06070B 0%, #080910 100%)" }}
    >
      {/* Aurora background */}
      <div
        className="aurora-blob"
        style={{
          width: "600px", height: "600px",
          top: "-100px", right: "-150px",
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: "500px", height: "500px",
          bottom: "-80px", left: "-100px",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          animationDelay: "-7s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <ScrollReveal>
              <div className="section-label mb-6">Built on Midnight Network</div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h1
                className="mb-6 font-display"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#E8E9F0",
                }}
              >
                Your crypto finances are scattered across{" "}
                <span className="gradient-text">10 apps.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p
                className="mb-4 text-lg leading-relaxed"
                style={{ color: "#9CA3AF", maxWidth: "540px" }}
              >
                Your identity is copied 10 times. Your salary is on Etherscan. Your savings circles run on WhatsApp. And none of it builds credit.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div
                className="mb-8 rounded-xl border-l-2 pl-4 py-3"
                style={{ borderColor: "#8B5CF6", background: "rgba(139,92,246,0.06)" }}
              >
                <p className="font-semibold text-lg" style={{ color: "#E8E9F0" }}>
                  Kosh puts it all in one place.{" "}
                  <span className="gradient-text">Private by default. Compliant by design.</span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="mb-8 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                Remittances. Payroll. Savings circles. Credit scoring. Spending card. Treasury.{" "}
                <span style={{ color: "#9CA3AF" }}>One app. One identity. Zero exposure.</span>{" "}
                Powered by Midnight&apos;s zero-knowledge proofs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="mb-6 max-w-sm">
                <EmailCapture size="large" placeholder="Enter your email" buttonText="Get Early Access →" />
              </div>
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: "#6B7280" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
              >
                See how it works
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2L7 12M3 8L7 12L11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Phone mockup */}
          <ScrollReveal delay={2} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.2)",
                }}
              />
              <PhoneMockup />

              {/* Floating stat badges */}
              <div
                className="absolute -left-14 top-20 rounded-xl border px-4 py-3 hidden lg:block"
                style={{ background: "rgba(13,14,22,0.9)", borderColor: "rgba(139,92,246,0.25)", backdropFilter: "blur(12px)" }}
              >
                <p className="text-xs" style={{ color: "#6B7280" }}>ZK Identity</p>
                <p className="font-bold text-sm" style={{ color: "#E8E9F0" }}>Verified once ✓</p>
              </div>

              <div
                className="absolute -right-10 bottom-28 rounded-xl border px-4 py-3 hidden lg:block"
                style={{ background: "rgba(13,14,22,0.9)", borderColor: "rgba(6,182,212,0.25)", backdropFilter: "blur(12px)" }}
              >
                <p className="text-xs" style={{ color: "#6B7280" }}>Last transfer</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#4ADE80" }} />
                  <p className="font-bold text-sm" style={{ color: "#E8E9F0" }}>Private ·  Instant</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M5 11l5 5 5-5" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
