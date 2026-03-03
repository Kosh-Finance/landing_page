import ScrollReveal from "./ScrollReveal";

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

function ChainBadge({ chain }: { chain: Chain }) {
  return (
    <div
      className="chain-badge flex-shrink-0"
      style={{ color: chain.color }}
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

// Midnight SVG (simplified hexagonal logo)
function MidnightLogo() {
  return (
    <div className="flex items-center justify-center">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <defs>
          <linearGradient id="mlg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path d="M28 4 L50 16 L50 40 L28 52 L6 40 L6 16 Z" fill="rgba(139,92,246,0.12)" stroke="url(#mlg)" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="10" fill="rgba(139,92,246,0.2)" stroke="url(#mlg)" strokeWidth="1" />
        <path d="M22 28 L26 24 L30 28 L26 32 Z" fill="url(#mlg)" opacity="0.8" />
        <path d="M28 22 L32 26 L28 30 L24 26 Z" fill="url(#mlg)" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function ChainSupport() {
  // Duplicate for seamless marquee
  const allChains = [...CHAINS, ...CHAINS];

  return (
    <section
      id="chains"
      className="py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080A10 0%, #06070B 100%)" }}
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
        <div className="text-center mb-12">
          <ScrollReveal>
            <div className="section-label mb-4 justify-center">Multi-Chain</div>
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
              Built on Midnight.{" "}
              <span className="gradient-text">Connected to everything.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="mx-auto max-w-2xl text-lg" style={{ color: "#9CA3AF" }}>
              Kosh is built natively on Midnight Network for zero-knowledge privacy at the protocol level. Through LayerZero, it connects to 50+ blockchains. Cardano anchors every proof to one of the most decentralized L1s in crypto.
            </p>
          </ScrollReveal>
        </div>

        {/* Architecture diagram */}
        <ScrollReveal delay={1}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-16">
            {/* Midnight core */}
            <div
              className="rounded-2xl border p-6 text-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(6,182,212,0.08) 100%)",
                borderColor: "rgba(139,92,246,0.3)",
                minWidth: "180px",
              }}
            >
              <MidnightLogo />
              <p className="mt-3 font-bold text-sm" style={{ color: "#E8E9F0" }}>Midnight Network</p>
              <p className="text-xs mt-1" style={{ color: "#8B5CF6" }}>ZK Layer · Native</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-8 lg:w-16 lg:h-px" style={{ background: "linear-gradient(180deg, rgba(139,92,246,0.5), rgba(6,182,212,0.5))" }} />
              <span className="text-xs font-mono px-2" style={{ color: "#4B5563" }}>via LayerZero</span>
              <div className="w-px h-8 lg:w-16 lg:h-px" style={{ background: "linear-gradient(180deg, rgba(6,182,212,0.5), rgba(139,92,246,0.5))" }} />
            </div>

            {/* L1 settlement */}
            <div
              className="rounded-2xl border p-6 text-center flex-shrink-0"
              style={{
                background: "rgba(0,51,173,0.08)",
                borderColor: "rgba(0,51,173,0.3)",
                minWidth: "160px",
              }}
            >
              <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(0,51,173,0.15)", border: "1px solid rgba(0,51,173,0.3)" }}>
                <span className="font-black text-base" style={{ color: "#4B7EFF" }}>₳</span>
              </div>
              <p className="font-bold text-sm" style={{ color: "#E8E9F0" }}>Cardano</p>
              <p className="text-xs mt-1" style={{ color: "#4B7EFF" }}>Settlement · L1</p>
            </div>

            <div className="flex flex-col items-center gap-2 hidden lg:flex">
              <div className="w-16 h-px" style={{ background: "linear-gradient(90deg, rgba(6,182,212,0.5), rgba(139,92,246,0.3))" }} />
              <span className="text-xs font-mono px-2" style={{ color: "#4B5563" }}>bridges</span>
              <div className="w-16 h-px" style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.3), rgba(6,182,212,0.5))" }} />
            </div>

            {/* 50+ chains */}
            <div
              className="rounded-2xl border p-6 text-center flex-shrink-0"
              style={{
                background: "rgba(6,182,212,0.05)",
                borderColor: "rgba(6,182,212,0.2)",
                minWidth: "160px",
              }}
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" }}
              >
                <span className="font-black text-xl" style={{ color: "#06B6D4" }}>50+</span>
              </div>
              <p className="font-bold text-sm" style={{ color: "#E8E9F0" }}>Connected Chains</p>
              <p className="text-xs mt-1" style={{ color: "#06B6D4" }}>ETH · SOL · ARB · BASE…</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Chain marquee */}
        <ScrollReveal>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, #06070B, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(-90deg, #06070B, transparent)" }} />

            <div className="flex animate-marquee gap-4 w-max">
              {allChains.map((chain, i) => (
                <ChainBadge key={`${chain.name}-${i}`} chain={chain} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
