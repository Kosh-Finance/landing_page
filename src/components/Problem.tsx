import ScrollReveal from "./ScrollReveal";

const PAIN_POINTS = [
  {
    task: "Send money home",
    tool: "Wise, Western Union",
    cost: "6.5% fees, full identity exposed",
    icon: "↗",
  },
  {
    task: "Get paid in crypto",
    tool: "Utopia Labs, Coinshift",
    cost: "Your salary is public on-chain",
    icon: "💰",
  },
  {
    task: "Save with community",
    tool: "WhatsApp groups, cash envelopes",
    cost: "No enforcement, no credit history built",
    icon: "🤝",
  },
  {
    task: "Prove creditworthiness",
    tool: "Nothing exists",
    cost: "Your entire wallet history or nothing",
    icon: "📊",
  },
  {
    task: "Manage DAO treasury",
    tool: "Gnosis Safe, Squads",
    cost: "Signers doxxed, balances public",
    icon: "🏛",
  },
  {
    task: "Spend crypto at a store",
    tool: "Gnosis Pay, Holyheld, CEX cards",
    cost: "Full wallet history linked to card",
    icon: "💳",
  },
  {
    task: "Verify your identity",
    tool: "Re-KYC on every single app",
    cost: "Your data copied 10 times, breach risk 10x",
    icon: "🪪",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080910 0%, #0A0B12 100%)" }}
    >
      {/* Subtle red glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "800px", height: "400px",
          background: "radial-gradient(ellipse, rgba(239,68,68,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="section-label mb-4">The Problem</div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2
            className="mb-4 font-display"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#E8E9F0",
            }}
          >
            The fragmentation tax you pay{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #EF4444, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              every day
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="mb-12 max-w-2xl text-lg" style={{ color: "#9CA3AF" }}>
            Seven financial tasks. Seven separate apps. Seven sets of KYC. Seven ways your data leaks.
            Every day, this costs you money, time, and privacy.
          </p>
        </ScrollReveal>

        {/* Desktop table */}
        <ScrollReveal delay={2} className="hidden md:block">
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: "rgba(255,255,255,0.07)", background: "#0D0E16" }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-3 px-6 py-3 text-xs font-semibold uppercase tracking-widest border-b"
              style={{
                color: "#4B5563",
                borderColor: "rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span>What you do</span>
              <span>What you use today</span>
              <span>What it costs you</span>
            </div>

            {PAIN_POINTS.map((row, i) => (
              <div
                key={row.task}
                className="pain-row grid grid-cols-3 items-center px-6 py-4 border-b"
                style={{
                  borderColor: "rgba(255,255,255,0.04)",
                  borderLeft: "2px solid transparent",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{row.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "#E8E9F0" }}>
                    {row.task}
                  </span>
                </div>
                <div className="text-sm" style={{ color: "#6B7280" }}>
                  {row.tool}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#FCA5A5" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                    <circle cx="6" cy="6" r="5" stroke="rgba(239,68,68,0.5)" strokeWidth="1" />
                    <path d="M6 3v4M6 8.5v.5" stroke="#EF4444" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {row.cost}
                </div>
              </div>
            ))}

            {/* Last row has no border */}
            <div className="h-0 border-0" />
          </div>
        </ScrollReveal>

        {/* Mobile cards */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {PAIN_POINTS.map((row, i) => (
            <ScrollReveal key={row.task} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div
                className="rounded-xl border p-4"
                style={{ background: "#0D0E16", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{row.icon}</span>
                  <span className="font-semibold" style={{ color: "#E8E9F0" }}>{row.task}</span>
                </div>
                <p className="text-xs mb-2" style={{ color: "#6B7280" }}>
                  Currently: <span style={{ color: "#9CA3AF" }}>{row.tool}</span>
                </p>
                <div
                  className="flex items-start gap-2 text-xs rounded-lg p-2.5"
                  style={{ background: "rgba(239,68,68,0.08)", color: "#FCA5A5" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="6" cy="6" r="5" stroke="rgba(239,68,68,0.5)" strokeWidth="1" />
                    <path d="M6 3v4M6 8.5v.5" stroke="#EF4444" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {row.cost}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transition bridge */}
        <ScrollReveal delay={1}>
          <div className="mt-16 text-center">
            <div
              className="inline-block rounded-2xl border px-8 py-6 max-w-2xl"
              style={{ background: "rgba(139,92,246,0.06)", borderColor: "rgba(139,92,246,0.2)" }}
            >
              <p
                className="text-lg font-semibold leading-relaxed italic"
                style={{ color: "#C4B5FD" }}
              >
                &ldquo;What if it was one app? What if you verified once and it worked everywhere?
                What if privacy wasn&apos;t a feature — it was the architecture?&rdquo;
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
