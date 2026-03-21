import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const REASONS = [
  {
    num: "01",
    headline: (
      <>
        Privacy is the{" "}
        <span className="serif-accent" style={{ color: "#A78BFA" }}>default.</span>
      </>
    ),
    body: "On Midnight, every variable in a smart contract is private unless you explicitly choose to publish it. Other chains bolt privacy on after the fact — Midnight builds it into the language itself. A savings circle on Midnight is private at the protocol level, not through an opt-in workaround.",
  },
  {
    num: "02",
    headline: (
      <>
        Compact compiles to{" "}
        <span className="serif-accent" style={{ color: "#06B6D4" }}>ZK circuits.</span>
      </>
    ),
    body: "Midnight's smart contract language, Compact, compiles directly to zero-knowledge circuits. Writing a ZK-ROSCA in Compact is like writing any other contract — no cryptography PhD required. The ZK proofs for membership, contribution, and conditional deanonymization are a natural consequence of the language, not a heroic engineering feat.",
  },
  {
    num: "03",
    headline: (
      <>
        Compliance without{" "}
        <span className="serif-accent" style={{ color: "#4ADE80" }}>surveillance.</span>
      </>
    ),
    body: "Regulators want to know that savings circles aren't money laundering. Midnight lets us prove that without exposing members. We can produce ZK proofs that the circle meets AML requirements — without revealing who the members are, how much they've saved, or when they received payouts.",
  },
];

function MidnightBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
      style={{
        background: "rgba(139,92,246,0.1)",
        border: "1px solid rgba(139,92,246,0.25)",
        color: "#A78BFA",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M6 1L10 3.5v5L6 11 2 8.5v-5Z" stroke="#8B5CF6" strokeWidth="1" fill="rgba(139,92,246,0.2)" />
      </svg>
      Built on Midnight Network
    </div>
  );
}

export default function WhyMidnight() {
  return (
    <section
      id="why-midnight"
      className="py-24 overflow-hidden"
      style={{ background: "var(--color-surface, #09080F)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          height: "300px",
          background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Left: sticky header */}
          <div className="mb-16 lg:mb-0">
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  label="Why Midnight"
                  align="left"
                  title="Why this can only be built on Midnight."
                  body="Other blockchains make privacy an afterthought. On Midnight, it's the foundation."
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: editorial blocks */}
          <div className="flex flex-col gap-12">
            {REASONS.map((r, i) => (
              <ScrollReveal key={r.num} delay={i + 1}>
                <div className="flex items-start gap-6">
                  <span
                    className="font-mono text-xs font-bold flex-shrink-0 mt-1"
                    style={{ color: "#8B5CF6", opacity: 0.5 }}
                  >
                    {r.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="mb-3 font-display font-bold"
                      style={{
                        fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                        color: "#E8E9F0",
                      }}
                    >
                      {r.headline}
                    </h3>
                    <p className="leading-relaxed text-sm" style={{ color: "#9CA3AF", maxWidth: "560px" }}>
                      {r.body}
                    </p>
                  </div>
                </div>
                {i < REASONS.length - 1 && (
                  <div className="mt-12 ml-10" style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
                )}
              </ScrollReveal>
            ))}

            {/* Bottom: Midnight badge + Cardano note */}
            <ScrollReveal delay={4}>
              <div className="ml-10 flex items-center gap-4 pt-4">
                <MidnightBadge />
                <p className="text-xs font-mono" style={{ color: "#4B5563" }}>
                  Settlement anchored to Cardano L1
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
