"use client";

import EmailCapture from "./EmailCapture";
import ScrollReveal from "./ScrollReveal";
import GeoIcon from "./GeoIcon";

const MEMBERS = [
  { id: "01", state: "done" },
  { id: "02", state: "done" },
  { id: "03", state: "done" },
  { id: "04", state: "active" },
  { id: "05", state: "pending" },
  { id: "06", state: "pending" },
  { id: "07", state: "pending" },
  { id: "08", state: "pending" },
  { id: "09", state: "pending" },
  { id: "10", state: "pending" },
];

const STATE_COLOR: Record<string, string> = {
  done: "#4ADE80",
  active: "#F59E0B",
  pending: "#374151",
};

function PhoneMockup() {
  return (
    <div className="phone-frame w-[260px] h-[520px] mx-auto" style={{ transform: "perspective(1000px) rotateY(-8deg) rotateX(4deg)" }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-8 pb-2" style={{ color: "#6B7280", fontSize: "0.65rem" }}>
        <span className="font-mono">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="flex gap-0.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1 rounded-sm" style={{ height: `${i * 3 + 3}px`, background: "#4ADE80" }} />
            ))}
          </div>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 7 C3 4 5 3 7 3 C9 3 11 4 13 7" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>

      {/* App header */}
      <div className="px-5 pt-1 pb-3">
        <p className="text-xs mb-2" style={{ color: "#6B7280", fontFamily: "'JetBrains Mono', monospace" }}>kosh.finance</p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-sm" style={{ color: "#E8E9F0" }}>DeFi Friends Circle</p>
          <span
            className="font-mono text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            Round 4/10
          </span>
        </div>
      </div>

      {/* Pool balance */}
      <div
        className="mx-5 mb-3 rounded-xl p-3"
        style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}
      >
        <p className="text-xs mb-1" style={{ color: "#9CA3AF" }}>Circle Pool</p>
        <div className="flex items-center gap-2">
          <span className="font-mono text-lg font-bold" style={{ color: "#E8E9F0" }}>•••• USDC</span>
          <div className="shield-badge">ZK SHIELDED</div>
        </div>
      </div>

      {/* Member grid */}
      <div className="px-5 mb-3">
        <p className="text-xs mb-2 font-semibold" style={{ color: "#9CA3AF", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>MEMBERS</p>
        <div className="grid grid-cols-5 gap-1.5">
          {MEMBERS.map((m) => (
            <div
              key={m.id}
              className="flex flex-col items-center gap-0.5"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: `${STATE_COLOR[m.state]}18`,
                  border: `1px solid ${STATE_COLOR[m.state]}40`,
                }}
              >
                {m.state === "done" && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                    <path d="M2 5l2 2 4-4" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {m.state === "active" && (
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#F59E0B" }} />
                )}
                {m.state === "pending" && (
                  <span style={{ color: "#374151", fontSize: "0.5rem", fontFamily: "monospace" }}>?</span>
                )}
              </div>
              <span style={{ color: STATE_COLOR[m.state], fontSize: "0.5rem", fontFamily: "monospace" }}>{m.id}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 my-2" style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />

      {/* Recent activity */}
      <div className="px-5">
        <p className="text-xs mb-2 font-semibold" style={{ color: "#9CA3AF", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>RECENT</p>
        <div className="flex flex-col gap-2">
          {[
            { label: "Round 4 contribution", sub: "Anonymous · 3h ago", color: "#8B5CF6", badge: "✓" },
            { label: "Round 3 payout", sub: "Shielded · 2w ago", color: "#4ADE80", badge: "✓" },
          ].map((tx) => (
            <div key={tx.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${tx.color}18`, border: `1px solid ${tx.color}25` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: tx.color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#E8E9F0", fontSize: "0.65rem" }}>{tx.label}</p>
                  <p style={{ color: "#6B7280", fontSize: "0.58rem" }}>{tx.sub}</p>
                </div>
              </div>
              <span style={{ color: tx.color, fontSize: "0.6rem", fontFamily: "monospace", fontWeight: 700 }}>{tx.badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom tab bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-around py-3 px-2"
        style={{ background: "rgba(13,14,22,0.9)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {[
          { label: "Home", active: false },
          { label: "Circles", active: true },
          { label: "Contribute", active: false },
          { label: "Profile", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <div
              className="w-5 h-5 rounded flex items-center justify-center"
              style={{ background: tab.active ? "rgba(139,92,246,0.2)" : "transparent" }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: tab.active ? "#8B5CF6" : "#374151" }}
              />
            </div>
            <span style={{ fontSize: "0.5rem", color: tab.active ? "#8B5CF6" : "#4B5563" }}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="grid-texture relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20"
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
              <div className="terminal-label mb-6" style={{ opacity: 0.7 }}>Built on Midnight Network · Launching 2026</div>
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
                500 million people save together.{" "}
                <span className="serif-accent gradient-text">None of them have privacy.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p
                className="mb-8 text-lg leading-relaxed"
                style={{ color: "#9CA3AF", maxWidth: "540px" }}
              >
                Chit funds. Tandas. Stokvels. The world&apos;s oldest savings system — now with zero-knowledge privacy on Midnight.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div
                className="mb-8 rounded-xl border-l-2 pl-4 py-3"
                style={{ borderColor: "#8B5CF6", background: "rgba(139,92,246,0.06)" }}
              >
                <p className="font-semibold text-base leading-snug" style={{ color: "#E8E9F0" }}>
                  <span className="serif-accent" style={{ fontStyle: "italic" }}>
                    Kosh is the first privacy-preserving savings circle on any blockchain.
                  </span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="mb-6 max-w-sm">
                <EmailCapture size="large" placeholder="Enter your email" buttonText="Join Waitlist →" />
              </div>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "#6B7280" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
              >
                See how it works
                <GeoIcon name="arrow-right" size={14} />
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

              {/* Floating badges */}
              <div
                className="absolute -left-14 top-20 rounded-xl border px-4 py-3 hidden lg:block"
                style={{ background: "rgba(13,14,22,0.9)", borderColor: "rgba(139,92,246,0.25)", backdropFilter: "blur(12px)" }}
              >
                <p className="text-xs" style={{ color: "#6B7280" }}>Contributions</p>
                <div className="flex items-center gap-1.5">
                  <GeoIcon name="shield" size={14} color="#8B5CF6" />
                  <p className="font-bold text-sm" style={{ color: "#E8E9F0" }}>Anonymous</p>
                </div>
              </div>

              <div
                className="absolute -right-10 bottom-28 rounded-xl border px-4 py-3 hidden lg:block"
                style={{ background: "rgba(13,14,22,0.9)", borderColor: "rgba(74,222,128,0.25)", backdropFilter: "blur(12px)" }}
              >
                <p className="text-xs" style={{ color: "#6B7280" }}>Payouts</p>
                <div className="flex items-center gap-1.5">
                  <div className="live-dot" />
                  <p className="font-bold text-sm" style={{ color: "#E8E9F0" }}>Enforced on-chain</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M10 4v12M5 11l5 5 5-5" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
