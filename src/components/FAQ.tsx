"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const FAQS = [
  {
    q: "What is Kosh?",
    a: "Kosh is a unified finance platform that brings remittances, payroll, savings circles, credit scoring, and treasury management into one app. Instead of using 6 different tools that each demand your identity and expose your data, Kosh lets you verify once and do everything from one place — with zero-knowledge privacy protecting every transaction.",
  },
  {
    q: "What problem does Kosh solve?",
    a: "Crypto finance is fragmented. You use Wise to send money, a separate tool for payroll, WhatsApp for savings circles, nothing for credit scoring, and Gnosis Safe for treasury. Each app requires separate KYC, exposes different data publicly, and none of them share identity or reputation. Kosh eliminates this fragmentation tax by unifying everything under one ZK identity.",
  },
  {
    q: "What is a ZK-ROSCA?",
    a: "A ROSCA (Rotating Savings and Credit Association) is a savings circle where a group of people contribute monthly and each member takes turns receiving the pool. Billions of people use them worldwide — they're called chit funds in India, stokvels in South Africa, tandas in Latin America. Kosh's ZK-ROSCA is the world's first privacy-preserving on-chain savings circle: contributions are anonymous, payouts are fair, and defaulters can be identified without compromising honest members. Every completed circle builds your ZK Credit Score.",
  },
  {
    q: "Which chains does Kosh support?",
    a: "Kosh is built natively on Midnight Network, which provides zero-knowledge privacy at the protocol level. Through LayerZero integration, Kosh connects to 50+ blockchains including Ethereum, Solana, Arbitrum, Base, Polygon, Avalanche, and more. Cardano serves as the settlement layer. You can send from any supported chain and receive on any other — privately.",
  },
  {
    q: "What is the ZK Credit Score?",
    a: "Every financial action on Kosh — sending remittances, receiving payroll, completing savings circles — feeds a private credit score computed entirely in zero-knowledge. You can prove 'my score is above 700' to a lending protocol without revealing the actual number, your income, or your transaction history. It's the first credit scoring system where informal financial activity builds formal credit.",
  },
  {
    q: "What is the Kosh Card?",
    a: "The Kosh Card is a virtual (and eventually physical) spending card that lets you use your crypto balance — stablecoins, savings circle payouts, payroll earnings — at any merchant that accepts Visa or Mastercard. Your shielded balance converts to fiat at the point of sale. Unlike existing crypto cards that require you to off-ramp through an exchange and link your entire wallet history, the Kosh Card draws from your private balance on Midnight. The merchant gets paid in fiat, you spend in crypto, and your on-chain financial activity stays private.",
  },
  {
    q: "Is Kosh live?",
    a: "Kosh is currently in development, building on Midnight's testnet ahead of their mainnet launch in late March 2026. We're accepting early access signups. Join the waitlist to be first in line.",
  },
  {
    q: "Who is behind Kosh?",
    a: "Kosh is built by XXIX Labs, a blockchain development studio with prior grants from the Web3 Foundation (Polkadot Fast Grants), hackathon wins at UN COP'24 and Solana SuperteamDE, and validated traction from community finance protocols serving 50+ beta users with 94% retention and zero defaults.",
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
            body="The ones we actually get — not the ones that make us look good."
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
