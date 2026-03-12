import ScrollReveal from "./ScrollReveal";
import GeoIcon from "./GeoIcon";
import SectionHeader from "./SectionHeader";

const PAIN_POINTS = [
  {
    task: "Send money home",
    tool: "Wise, Western Union",
    cost: "6.5% fees, full identity exposed",
  },
  {
    task: "Get paid in crypto",
    tool: "Utopia Labs, Coinshift",
    cost: "Your salary is public on-chain",
  },
  {
    task: "Save with community",
    tool: "WhatsApp groups, cash envelopes",
    cost: "No enforcement, no credit history built",
  },
  {
    task: "Prove creditworthiness",
    tool: "Nothing exists",
    cost: "Your entire wallet history or nothing",
  },
  {
    task: "Manage DAO treasury",
    tool: "Gnosis Safe, Squads",
    cost: "Signers doxxed, balances public",
  },
  {
    task: "Spend crypto at a store",
    tool: "Gnosis Pay, Holyheld, CEX cards",
    cost: "Full wallet history linked to card",
  },
  {
    task: "Verify your identity",
    tool: "Re-KYC on every single app",
    cost: "Your data copied 10 times, breach risk 10x",
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
        <div className="lg:grid lg:grid-cols-[40%_60%] lg:gap-16 lg:items-start">
          {/* Left column — editorial intro */}
          <div className="mb-12 lg:mb-0 lg:sticky lg:top-32">
            {/* Ghost number */}
            <div
              className="num-giant select-none pointer-events-none mb-2 leading-none"
              aria-hidden
              style={{ color: "transparent", WebkitTextStroke: "1px rgba(239,68,68,0.06)" }}
            >
              7
            </div>

            <ScrollReveal>
              <SectionHeader
                label="The Problem"
                align="left"
                useTerminalLabel
                title={
                  <>
                    The{" "}
                    <span
                      style={{
                        background: "linear-gradient(135deg, #EF4444, #F97316)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      <span className="serif-accent">fragmentation</span>
                    </span>{" "}
                    tax you pay every day
                  </>
                }
              />
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mt-6 text-base leading-relaxed" style={{ color: "#6B7280", maxWidth: "340px" }}>
                Seven financial tasks. Seven apps. Seven KYCs. Seven vectors for data leakage. Every day this costs you money, time, and privacy.
              </p>
            </ScrollReveal>
          </div>

          {/* Right column — document rows */}
          <ScrollReveal delay={1}>
            <div>
              {/* Column headers */}
              <div
                className="hidden md:grid grid-cols-[1fr_auto] items-center pb-3 mb-1"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#4B5563", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  What you do today
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#4B5563", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  What it costs
                </div>
              </div>

              {PAIN_POINTS.map((row, i) => (
                <div
                  key={row.task}
                  className="pain-row flex items-start gap-4 py-5 cursor-default"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span
                    className="terminal-label flex-shrink-0 pt-0.5 w-8"
                    style={{ opacity: 0.4 }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm mb-0.5" style={{ color: "#E8E9F0" }}>{row.task}</p>
                    <p className="text-xs" style={{ color: "#4B5563" }}>{row.tool}</p>
                  </div>
                  <div
                    className="cost-pill flex items-center gap-1.5 flex-shrink-0 px-2.5 py-1.5 rounded text-xs font-mono"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.12)",
                      color: "#FCA5A5",
                      maxWidth: "220px",
                      textAlign: "right",
                    }}
                  >
                    <GeoIcon name="x" size={10} color="#FCA5A5" strokeWidth={2} />
                    <span className="leading-snug">{row.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Full-bleed quote block */}
        <ScrollReveal delay={1}>
          <div className="mt-20 relative">
            <div
              className="serif-accent absolute -top-8 -left-4 select-none pointer-events-none leading-none"
              aria-hidden
              style={{
                fontSize: "clamp(5rem, 10vw, 8rem)",
                color: "#8B5CF6",
                opacity: 0.25,
                lineHeight: 1,
              }}
            >
              &ldquo;
            </div>
            <div className="pl-8 lg:pl-16 max-w-3xl">
              <p
                className="serif-accent text-xl lg:text-2xl leading-relaxed"
                style={{ color: "#C4B5FD", fontStyle: "italic" }}
              >
                What if it was one app? What if you verified once and it worked everywhere? What if privacy wasn&apos;t a feature — it was the architecture?
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
