import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import TimelineStep from "./TimelineStep";

const STEPS = [
  {
    number: "01",
    title: (
      <>
        Create a{" "}
        <span className="serif-accent" style={{ color: "#A78BFA" }}>Circle.</span>
      </>
    ),
    body: "An organizer deploys a smart contract defining contribution amount, frequency, number of members, and payout order. The rules are immutable and enforced by code — no WhatsApp needed.",
    detail: "Organizer sets rules on-chain",
    color: "#8B5CF6",
  },
  {
    number: "02",
    title: (
      <>
        Join{" "}
        <span className="serif-accent" style={{ color: "#06B6D4" }}>Privately.</span>
      </>
    ),
    body: "Each member joins by submitting a Merkle tree commitment — a cryptographic promise that proves membership without revealing identity. Nobody knows who else is in the circle.",
    detail: "Merkle tree commitment — nobody knows who's who",
    color: "#06B6D4",
  },
  {
    number: "03",
    title: (
      <>
        Contribute{" "}
        <span className="serif-accent" style={{ color: "#F59E0B" }}>Anonymously.</span>
      </>
    ),
    body: "When contribution time comes, each member generates a ZK proof that they are a valid member, have the right amount, and have not contributed in this round yet. No address exposed.",
    detail: "ZK proof: member + right amount + not paid twice",
    color: "#F59E0B",
  },
  {
    number: "04",
    title: (
      <>
        Receive{" "}
        <span className="serif-accent" style={{ color: "#4ADE80" }}>Payout.</span>
      </>
    ),
    body: "The designated recipient for each round proves their Merkle position to claim the full pooled amount. The smart contract releases funds instantly. No organizer approval required.",
    detail: "Prove Merkle position, claim full pool",
    color: "#4ADE80",
  },
  {
    number: "05",
    title: (
      <>
        Default Protocol — only the defaulter is{" "}
        <span className="serif-accent" style={{ color: "#EF4444" }}>revealed.</span>
      </>
    ),
    body: "If a contribution is missed, the smart contract triggers conditional deanonymization. Only the defaulter's identity is revealed — honest members stay fully anonymous. The group is protected.",
    detail: "Conditional deanonymization — only defaulter revealed",
    color: "#EF4444",
  },
  {
    number: "06",
    title: (
      <>
        Build{" "}
        <span className="serif-accent" style={{ color: "#A78BFA" }}>Reputation.</span>
      </>
    ),
    body: "Every completed round is recorded as a private credential. After the circle closes, you can generate a ZK proof of participation — proving consistent saving without revealing amounts or co-members.",
    detail: "ZK proof: I completed 10/10 rounds",
    color: "#A78BFA",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06070B 0%, #080A10 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Left: sticky header */}
          <div className="mb-16 lg:mb-0">
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  label="The Solution"
                  align="left"
                  title={
                    <>
                      The world&apos;s first{" "}
                      <span className="gradient-text">ZK-ROSCA.</span>
                    </>
                  }
                  body="Six steps. Every contribution anonymous. Every payout enforced by code. Every completed circle builds credit — privately."
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
