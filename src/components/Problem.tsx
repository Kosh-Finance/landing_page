"use client";

import ScrollReveal from "./ScrollReveal";

const PROBLEMS = [
  {
    num: "01",
    headline: "No enforcement.",
    body: "ROSCAs run on social trust. When someone defaults, the organizer chases them over WhatsApp. There is no enforcement mechanism. The group absorbs the loss.",
    visual: (
      <div
        className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
        style={{
          background: "rgba(239,68,68,0.1)",
          border: "1px solid rgba(239,68,68,0.3)",
        }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: "#EF4444" }} />
        <span className="font-mono text-sm font-bold" style={{ color: "#EF4444" }}>
          Default rates: 15–30%
        </span>
      </div>
    ),
  },
  {
    num: "02",
    headline: "No privacy on-chain.",
    body: "Put a savings circle on Ethereum and every transaction is public. Every member's address. Every contribution amount. Every payout recipient. Anyone can see who's in your circle.",
    visual: (
      <div
        className="mt-4 rounded-lg border p-3 font-mono text-xs"
        style={{ background: "rgba(239,68,68,0.04)", borderColor: "rgba(239,68,68,0.2)" }}
      >
        {[
          { addr: "0x3a9f…c1e2", amount: "250 USDC", label: "EXPOSED" },
          { addr: "0x7b2d…a08f", amount: "250 USDC", label: "EXPOSED" },
          { addr: "0xf1c3…9d44", amount: "250 USDC", label: "EXPOSED" },
        ].map((row) => (
          <div key={row.addr} className="flex items-center justify-between py-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ color: "#6B7280" }}>{row.addr}</span>
            <span style={{ color: "#9CA3AF" }}>{row.amount}</span>
            <span
              className="rounded px-1.5 py-0.5 text-xs font-bold"
              style={{ background: "rgba(239,68,68,0.15)", color: "#EF4444" }}
            >
              {row.label}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "03",
    headline: "No credit built.",
    body: "You can save faithfully for 10 years through chit funds and tandas. Not one bank or protocol will recognise it. The world's largest informal savings system builds zero formal credit history.",
    visual: (
      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-sm"
              style={{ background: "rgba(74,222,128,0.3)", border: "1px solid rgba(74,222,128,0.3)" }}
            />
          ))}
        </div>
        <span className="font-mono text-xs" style={{ color: "#6B7280" }}>10 years saving</span>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
          <path d="M2 6h16M12 2l6 4-6 4" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="font-mono text-xs font-bold rounded px-2 py-0.5"
          style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)" }}
        >
          0 credit score
        </span>
      </div>
    ),
  },
];

export default function Problem() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080910 0%, #06070B 100%)" }}
    >
      {/* Ghost number */}
      <div
        className="num-giant absolute right-0 top-0 select-none pointer-events-none leading-none"
        aria-hidden
        style={{
          color: "transparent",
          WebkitTextStroke: "1px rgba(239,68,68,0.05)",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          zIndex: 0,
          lineHeight: 0.9,
        }}
      >
        3
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:gap-20">

          {/* Left: sticky intro */}
          <div className="lg:sticky lg:top-32 lg:self-start mb-16 lg:mb-0">
            <ScrollReveal>
              <div className="section-label mb-6">The Problem</div>
              <h2
                className="mb-4 font-display font-bold"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  color: "#E8E9F0",
                }}
              >
                Trust. Transparency.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #EF4444, #F97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <span className="serif-accent">Credit.</span>
                </span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>
                Three problems that keep 500 million savers stuck.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: problem blocks */}
          <div className="flex flex-col gap-10">
            {PROBLEMS.map((p, i) => (
              <ScrollReveal key={p.num} delay={(i % 3) + 1}>
                <div
                  className="rounded-2xl border p-6"
                  style={{ background: "#0D0E16", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-mono text-xs font-bold flex-shrink-0 mt-1"
                      style={{ color: "#EF4444", opacity: 0.7 }}
                    >
                      {p.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="mb-2 font-display font-bold"
                        style={{
                          fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                          letterSpacing: "-0.02em",
                          color: "#E8E9F0",
                        }}
                      >
                        {p.headline}
                      </h3>
                      <p className="leading-relaxed text-sm" style={{ color: "#9CA3AF" }}>
                        {p.body}
                      </p>
                      {p.visual}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Full-bleed serif quote */}
        <ScrollReveal delay={2} className="mt-24">
          <div
            className="relative rounded-2xl border px-8 py-10 text-center overflow-hidden"
            style={{ background: "rgba(139,92,246,0.04)", borderColor: "rgba(139,92,246,0.15)" }}
          >
            <div
              className="absolute -top-6 left-8 font-serif leading-none select-none pointer-events-none"
              style={{ fontSize: "8rem", color: "rgba(139,92,246,0.08)", fontFamily: "'Instrument Serif', serif", lineHeight: 1 }}
              aria-hidden
            >
              &ldquo;
            </div>
            <p
              className="relative z-10 font-display font-semibold"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.35rem)",
                lineHeight: 1.6,
                color: "#C4C4CC",
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              What if contributions were anonymous, payouts enforced by code, and every completed circle built credit —{" "}
              <span className="serif-accent" style={{ color: "#A78BFA" }}>privately?</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
