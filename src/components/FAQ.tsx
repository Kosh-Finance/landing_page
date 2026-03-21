"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const FAQS = [
  {
    q: "What is Kosh?",
    a: "Kosh is the world's first privacy-preserving savings circle — a ZK-ROSCA built on Midnight Network. It takes the savings circle model used by 500 million people worldwide and makes it anonymous, enforceable, and credit-building. Contributions are anonymous. Payouts are enforced by smart contracts. Every completed circle builds a private credit score you can prove without revealing.",
  },
  {
    q: "What is a ROSCA?",
    a: "A ROSCA (Rotating Savings and Credit Association) is a savings circle where a group of people contribute money regularly and each member takes turns receiving the full pool. They're called chit funds in India, stokvels in South Africa, tandas in Latin America, hui in East Asia. They're the largest informal savings system in the world — $500B+ annually — built entirely on social trust.",
  },
  {
    q: "Why does a savings circle need privacy?",
    a: "Traditional ROSCAs fail because of default risk — when someone knows who's in the circle, they can exploit that information. On-chain, it's worse: Ethereum exposes every address, every amount, every payout. Members face social pressure, targeted fraud, and reputational risk. Privacy isn't optional — it's what makes the system function honestly.",
  },
  {
    q: "How does Kosh handle defaults without exposing members?",
    a: "Kosh uses conditional deanonymization — a ZK mechanism where a member's identity is cryptographically locked and can only be revealed if they miss a contribution. Honest members stay fully anonymous throughout the entire circle. Only a proven defaulter's identity is disclosed, and only to the circle members, not to the public chain.",
  },
  {
    q: "What is a participation proof?",
    a: "When you complete a savings circle, Kosh generates a zero-knowledge proof that you participated faithfully — contributed every round, never defaulted — without revealing who you are, how much you saved, or who else was in the circle. This proof is portable: you can present it to lending protocols, employers, or financial institutions to demonstrate creditworthiness.",
  },
  {
    q: "Why Midnight and not another blockchain?",
    a: "Midnight is the only smart contract platform where privacy is built into the language itself. Midnight's Compact language compiles directly to ZK circuits — every variable in a contract is private by default unless explicitly published. Building a ZK-ROSCA on Ethereum requires heroic cryptographic engineering. On Midnight, it's a natural consequence of the platform.",
  },
  {
    q: "Is Kosh live?",
    a: "Kosh is currently in development on Midnight's testnet. Midnight mainnet is targeting launch in 2026. We're accepting waitlist signups now — join to be first in line when we open access.",
  },
];

function FAQItem({ item, index }: { item: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span
            className="font-mono text-xs font-bold flex-shrink-0"
            style={{ color: open ? "#8B5CF6" : "#374151" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-semibold text-base" style={{ color: open ? "#E8E9F0" : "#C4C4CC" }}>
            {item.q}
          </span>
        </div>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: open ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.05)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1))",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M6 2v8M2 6h8" stroke={open ? "#8B5CF6" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      {/* grid-template-rows accordion */}
      <div className={`faq-body${open ? " open" : ""}`}>
        <div className="faq-body-inner">
          <p className="pb-5 pl-10 leading-relaxed text-sm" style={{ color: "#9CA3AF" }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #06070B 0%, #080910 100%)" }}
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeader
            label="FAQ"
            align="left"
            title={
              <>
                Questions{" "}
                <span className="serif-accent" style={{ color: "#A78BFA" }}>worth asking.</span>
              </>
            }
            body="Everything you need to know about ZK-ROSCAs and why they matter."
          />
        </ScrollReveal>

        <div className="mt-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {FAQS.map((item, i) => (
            <ScrollReveal key={item.q} delay={(i % 3) + 1}>
              <FAQItem item={item} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
