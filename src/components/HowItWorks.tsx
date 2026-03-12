import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import TimelineStep from "./TimelineStep";

const STEPS = [
  {
    number: "01",
    title: (
      <>
        <span className="serif-accent" style={{ color: "#A78BFA" }}>Verify</span>{" "}once. Everywhere.
      </>
    ),
    body: "Complete KYC with a partner provider. Your credentials become a leaf in a Merkle tree. Only the root hash goes on-chain. Your passport stays yours.",
    detail: "Zero-knowledge credential generation",
    color: "#8B5CF6",
  },
  {
    number: "02",
    title: (
      <>
        <span className="serif-accent" style={{ color: "#06B6D4" }}>Use</span>{" "}any module.
      </>
    ),
    body: "Send money, get paid, join circles, spend with your Kosh Card, manage treasury. One identity unlocks everything. Each action is private by default.",
    detail: "Unified ZK identity layer",
    color: "#06B6D4",
  },
  {
    number: "03",
    title: (
      <>
        <span className="serif-accent" style={{ color: "#F59E0B" }}>Build</span>{" "}reputation silently.
      </>
    ),
    body: "Every action feeds your ZK Credit Score. Remittances, payroll, savings circle completions — all build credit privately. Prove creditworthiness without revealing history. Portable across the Midnight ecosystem.",
    detail: "Private on-chain credit history",
    color: "#F59E0B",
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
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Left: header — stays sticky on desktop */}
          <div className="mb-16 lg:mb-0">
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  label="How it Works"
                  align="left"
                  title={
                    <>
                      Three steps.{" "}
                      <span className="gradient-text">One identity.</span>
                    </>
                  }
                  body="Getting started with Kosh is as simple as existing financial rails — with none of the privacy trade-offs."
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: vertical timeline */}
          <div className="relative">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i + 1}>
                <TimelineStep
                  number={step.number}
                  title={step.title}
                  body={step.body}
                  detail={step.detail}
                  color={step.color}
                  isLast={i === STEPS.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
