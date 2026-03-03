import ScrollReveal from "./ScrollReveal";

const STATS = [
  {
    number: "$905B",
    label: "Global remittance flows per year",
    sub: "And growing at 4% YoY",
    color: "#8B5CF6",
  },
  {
    number: "$500B+",
    label: "Annual ROSCA / savings circle volume",
    sub: "Chit funds, tandas, stokvels — worldwide",
    color: "#06B6D4",
  },
  {
    number: "1.3B",
    label: "Adults still unbanked globally",
    sub: "With smartphones but no formal credit",
    color: "#F59E0B",
  },
  {
    number: "$44.5B",
    label: "Extracted in remittance fees annually",
    sub: "UN target: 3%. Reality: 6.5%",
    color: "#EF4444",
  },
  {
    number: "6.5%",
    label: "Average remittance fee",
    sub: "Kosh: ~0.1%",
    color: "#F97316",
  },
  {
    number: "0",
    label: "Existing ZK-ROSCA implementations",
    sub: "We're building the first one",
    color: "#4ADE80",
  },
];

export default function Stats() {
  return (
    <section
      className="py-20"
      style={{ background: "#06070B", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="section-label mb-6 justify-center">The Scale</div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2
            className="mb-12 text-center font-display"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#9CA3AF",
            }}
          >
            The problem is{" "}
            <span className="gradient-text-warm">astronomically large.</span>
            {" "}The solution doesn&apos;t exist yet.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={stat.number}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="p-8"
            >
              <div
                className="font-display font-black mb-2"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}90)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <p className="font-semibold mb-1 text-sm" style={{ color: "#E8E9F0" }}>
                {stat.label}
              </p>
              <p className="text-xs" style={{ color: "#4B5563", fontFamily: "'JetBrains Mono', monospace" }}>
                {stat.sub}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
