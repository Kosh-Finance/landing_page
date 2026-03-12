import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

interface Chain {
  name: string;
  symbol: string;
  color: string;
  bg: string;
}

const CHAINS: Chain[] = [
  { name: "Midnight", symbol: "MN", color: "#8B5CF6", bg: "rgba(139,92,246,0.15)" },
  { name: "Cardano", symbol: "ADA", color: "#0033AD", bg: "rgba(0,51,173,0.15)" },
  { name: "Ethereum", symbol: "ETH", color: "#627EEA", bg: "rgba(98,126,234,0.15)" },
  { name: "Arbitrum", symbol: "ARB", color: "#12AAFF", bg: "rgba(18,170,255,0.15)" },
  { name: "Polygon", symbol: "POL", color: "#8247E5", bg: "rgba(130,71,229,0.15)" },
  { name: "Solana", symbol: "SOL", color: "#9945FF", bg: "rgba(153,69,255,0.15)" },
  { name: "Base", symbol: "BASE", color: "#0052FF", bg: "rgba(0,82,255,0.15)" },
  { name: "Avalanche", symbol: "AVAX", color: "#E84142", bg: "rgba(232,65,66,0.15)" },
  { name: "BNB Chain", symbol: "BNB", color: "#F3BA2F", bg: "rgba(243,186,47,0.15)" },
  { name: "Optimism", symbol: "OP", color: "#FF0420", bg: "rgba(255,4,32,0.15)" },
  { name: "LayerZero", symbol: "ZRO", color: "#6B7280", bg: "rgba(107,114,128,0.15)" },
  { name: "Midnight", symbol: "MN", color: "#8B5CF6", bg: "rgba(139,92,246,0.15)" },
  { name: "Ethereum", symbol: "ETH", color: "#627EEA", bg: "rgba(98,126,234,0.15)" },
  { name: "Solana", symbol: "SOL", color: "#9945FF", bg: "rgba(153,69,255,0.15)" },
];

const ALL_CHAINS = [...CHAINS, ...CHAINS];

function ChainBadge({ chain }: { chain: Chain }) {
  return (
    <div
      className="chain-badge flex-shrink-0"
      style={{ color: chain.color }}
      aria-label={chain.name}
    >
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-black flex-shrink-0"
        style={{ background: chain.bg, border: `1px solid ${chain.color}30`, fontSize: "0.55rem" }}
      >
        {chain.symbol[0]}
      </div>
      <span className="font-semibold text-sm" style={{ color: "#E8E9F0" }}>{chain.name}</span>
    </div>
  );
}

function MidnightLogo() {
  return (
    <div className="flex items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 56 56" fill="none" aria-hidden>
        <defs>
          <linearGradient id="mlg2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path d="M28 4 L50 16 L50 40 L28 52 L6 40 L6 16 Z" fill="rgba(139,92,246,0.12)" stroke="url(#mlg2)" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="10" fill="rgba(139,92,246,0.2)" stroke="url(#mlg2)" strokeWidth="1" />
        <path d="M22 28 L26 24 L30 28 L26 32 Z" fill="url(#mlg2)" opacity="0.8" />
        <path d="M28 22 L32 26 L28 30 L24 26 Z" fill="url(#mlg2)" opacity="0.5" />
      </svg>
    </div>
  );
}

/* Hub-and-spoke architecture diagram */
function HubSpoke() {
  const spokes = [
    { label: "Cardano", sub: "Settlement · L1", color: "#4B7EFF", symbol: "₳", angle: -140 },
    { label: "50+ Chains", sub: "ETH · SOL · ARB…", color: "#06B6D4", symbol: "∞", angle: -40 },
    { label: "ZK Proof Layer", sub: "Privacy at source", color: "#8B5CF6", symbol: "ZK", angle: 90 },
  ];

  return (
    <div className="relative mx-auto flex items-center justify-center" style={{ width: "360px", height: "280px" }}>
      {/* SVG connectors */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }} aria-hidden>
        <defs>
          <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Left spoke */}
        <line x1="180" y1="140" x2="55" y2="65" stroke="url(#connGrad)" strokeWidth="1" strokeDasharray="4,4" style={{ animation: "driftRight 3s ease-in-out infinite" }} />
        {/* Right spoke */}
        <line x1="180" y1="140" x2="305" y2="65" stroke="url(#connGrad)" strokeWidth="1" strokeDasharray="4,4" style={{ animation: "driftRight 3s ease-in-out infinite", animationDelay: "0.5s" }} />
        {/* Bottom spoke */}
        <line x1="180" y1="140" x2="180" y2="235" stroke="url(#connGrad)" strokeWidth="1" strokeDasharray="4,4" style={{ animation: "driftRight 3s ease-in-out infinite", animationDelay: "1s" }} />
      </svg>

      {/* Center hub — Midnight */}
      <div
        className="absolute rounded-2xl border p-4 text-center z-10"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.1) 100%)",
          borderColor: "rgba(139,92,246,0.35)",
          minWidth: "120px",
          boxShadow: "0 0 40px rgba(139,92,246,0.15)",
        }}
      >
        <MidnightLogo />
        <p className="mt-2 font-bold text-xs" style={{ color: "#E8E9F0" }}>Midnight Network</p>
        <p className="text-xs mt-0.5" style={{ color: "#8B5CF6" }}>ZK Layer · Native</p>
      </div>

      {/* Cardano — top left */}
      <div
        className="absolute rounded-xl border p-3 text-center"
        style={{
          top: "8%", left: "2%",
          background: "rgba(0,51,173,0.08)",
          borderColor: "rgba(0,51,173,0.3)",
          minWidth: "96px",
        }}
      >
        <div className="w-8 h-8 rounded-full mx-auto mb-1.5 flex items-center justify-center" style={{ background: "rgba(0,51,173,0.15)" }}>
          <span className="font-black text-base" style={{ color: "#4B7EFF" }}>₳</span>
        </div>
        <p className="font-bold text-xs" style={{ color: "#E8E9F0" }}>Cardano</p>
        <p className="text-xs mt-0.5" style={{ color: "#4B7EFF", fontSize: "0.6rem" }}>Settlement · L1</p>
      </div>

      {/* 50+ Chains — top right */}
      <div
        className="absolute rounded-xl border p-3 text-center"
        style={{
          top: "8%", right: "2%",
          background: "rgba(6,182,212,0.06)",
          borderColor: "rgba(6,182,212,0.2)",
          minWidth: "96px",
        }}
      >
        <div className="w-8 h-8 rounded-full mx-auto mb-1.5 flex items-center justify-center" style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" }}>
          <span className="font-black text-sm" style={{ color: "#06B6D4" }}>50+</span>
        </div>
        <p className="font-bold text-xs" style={{ color: "#E8E9F0" }}>Connected</p>
        <p className="text-xs mt-0.5" style={{ color: "#06B6D4", fontSize: "0.6rem" }}>ETH · SOL · ARB…</p>
      </div>

      {/* LayerZero — bottom center */}
      <div
        className="absolute rounded-xl border px-4 py-2 text-center"
        style={{
          bottom: "2%", left: "50%", transform: "translateX(-50%)",
          background: "rgba(107,114,128,0.08)",
          borderColor: "rgba(107,114,128,0.2)",
        }}
      >
        <p className="font-mono text-xs font-semibold" style={{ color: "#6B7280" }}>via LayerZero bridges</p>
      </div>
    </div>
  );
}

export default function ChainSupport() {
  return (
    <section
      id="chains"
      className="py-24 overflow-hidden"
      style={{ background: "var(--color-surface, #09080F)" }}
    >
      {/* Deep violet glow */}
      <div
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          height: "300px",
          background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Left-aligned header */}
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-center mb-16">
          <div>
            <ScrollReveal>
              <SectionHeader
                label="Multi-Chain"
                align="left"
                title={
                  <>
                    Built on Midnight.{" "}
                    <span className="gradient-text">Connected to{" "}
                      <span className="serif-accent">everything.</span>
                    </span>
                  </>
                }
                body="Kosh is built natively on Midnight Network for zero-knowledge privacy at the protocol level. Through LayerZero, it connects to 50+ blockchains. Cardano anchors every proof to one of the most decentralized L1s in crypto."
              />
            </ScrollReveal>
          </div>

          {/* Hub-and-spoke architecture diagram */}
          <ScrollReveal delay={2}>
            <HubSpoke />
          </ScrollReveal>
        </div>

        {/* Chain marquee */}
        <ScrollReveal>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, var(--color-surface, #09080F), transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(-90deg, var(--color-surface, #09080F), transparent)" }} />

            <div className="flex animate-marquee gap-4 w-max">
              {ALL_CHAINS.map((chain, i) => (
                <ChainBadge key={`${chain.name}-${i}`} chain={chain} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
