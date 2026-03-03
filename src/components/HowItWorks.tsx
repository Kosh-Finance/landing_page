import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Verify once",
    body: "Complete KYC with a partner provider. Your credentials become a leaf in a Merkle tree. Only the root hash goes on-chain. Your passport stays yours.",
    detail: "Zero-knowledge credential generation",
    color: "#8B5CF6",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#8B5CF6" strokeWidth="1.5" fill="rgba(139,92,246,0.1)" />
        <path d="M9 12l2 2 4-4" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Use any module",
    body: "Send money, get paid, join circles, spend with your Kosh Card, manage treasury. One identity unlocks everything. Each action is private by default.",
    detail: "Unified ZK identity layer",
    color: "#06B6D4",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" stroke="#06B6D4" strokeWidth="1.5" fill="rgba(6,182,212,0.1)" />
        <rect x="14" y="3" width="7" height="7" rx="2" stroke="#06B6D4" strokeWidth="1.5" fill="rgba(6,182,212,0.1)" />
        <rect x="3" y="14" width="7" height="7" rx="2" stroke="#06B6D4" strokeWidth="1.5" fill="rgba(6,182,212,0.1)" />
        <rect x="14" y="14" width="7" height="7" rx="2" stroke="#06B6D4" strokeWidth="1.5" fill="rgba(6,182,212,0.1)" />
        <path d="M7 10v4M17 10v4M10 7h4M10 17h4" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build reputation",
    body: "Every action feeds your ZK Credit Score. Remittances, payroll, savings circle completions — all build credit privately. Prove creditworthiness without revealing history. Portable across the Midnight ecosystem.",
    detail: "Private on-chain credit history",
    color: "#F59E0B",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" stroke="#F59E0B" strokeWidth="1.5" fill="rgba(245,158,11,0.1)" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06070B 0%, #080A10 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="section-label mb-4">How it Works</div>
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
            Three steps.{" "}
            <span className="gradient-text">One identity. Everything private.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="mb-16 max-w-xl text-lg" style={{ color: "#9CA3AF" }}>
            Getting started with Kosh is as simple as existing financial rails — with none of the privacy trade-offs.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="relative rounded-2xl border p-8"
                style={{
                  background: "#0D0E16",
                  borderColor: "rgba(255,255,255,0.07)",
                  borderTopColor: step.color + "40",
                  borderTopWidth: "2px",
                }}
              >
                {/* Step number */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="font-mono text-4xl font-black"
                    style={{ color: `${step.color}18`, letterSpacing: "-0.04em" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="mb-3 font-display font-bold text-xl"
                  style={{ color: "#E8E9F0", letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="mb-5 leading-relaxed text-sm" style={{ color: "#9CA3AF" }}>
                  {step.body}
                </p>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-mono font-semibold"
                  style={{
                    background: `${step.color}12`,
                    color: step.color,
                    border: `1px solid ${step.color}25`,
                    letterSpacing: "0.05em",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                  {step.detail}
                </div>

                {/* Connecting arrow for desktop */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute -right-5 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center"
                    style={{ zIndex: 10 }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "#06070B", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="#4B5563" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Flow diagram caption */}
        <ScrollReveal delay={1}>
          <div className="mt-12 flex items-center justify-center gap-3">
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: step.color }}
                  />
                  <span className="text-xs font-mono" style={{ color: "#4B5563" }}>{step.number}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="w-16 h-px"
                    style={{ background: `linear-gradient(90deg, ${STEPS[i].color}, ${STEPS[i + 1].color})` }}
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
