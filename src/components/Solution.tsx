import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

/* ── Individual module mockups ─────────────────────────────────────────── */

function SendMockup() {
  return (
    <div className="phone-frame w-full max-w-[220px] h-[320px] mx-auto p-4">
      <div className="pt-6">
        <p className="text-xs mb-1" style={{ color: "#6B7280", fontFamily: "'JetBrains Mono', monospace" }}>SEND</p>
        <p className="font-bold text-sm mb-4" style={{ color: "#E8E9F0" }}>Private Transfer</p>
        <div className="dash-row mb-2">
          <span className="text-xs" style={{ color: "#9CA3AF" }}>To</span>
          <span className="text-xs font-semibold" style={{ color: "#E8E9F0" }}>Family — Mumbai 🇮🇳</span>
        </div>
        <div className="dash-row mb-2">
          <span className="text-xs" style={{ color: "#9CA3AF" }}>Amount</span>
          <span className="text-xs font-mono font-bold" style={{ color: "#E8E9F0" }}>••• USDC</span>
        </div>
        <div className="dash-row mb-4">
          <span className="text-xs" style={{ color: "#9CA3AF" }}>Fee</span>
          <span className="text-xs font-semibold" style={{ color: "#4ADE80" }}>~0.1%</span>
        </div>
        <div className="flex gap-2">
          <div className="shield-badge">SHIELDED</div>
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded" style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ADE80", fontSize: "0.6rem", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>
            COMPLIANT ✓
          </div>
        </div>
        <div className="mt-4 rounded-lg py-2.5 text-center text-xs font-semibold" style={{ background: "#8B5CF6", color: "white" }}>
          Send Privately →
        </div>
      </div>
    </div>
  );
}

function PayMockup() {
  return (
    <div
      className="w-full max-w-[280px] rounded-xl border p-4 mx-auto"
      style={{ background: "#0D0E16", borderColor: "rgba(6,182,212,0.2)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold" style={{ color: "#06B6D4", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>ZK PAYROLL · Q1 2026</p>
        <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(74,222,128,0.12)", color: "#4ADE80" }}>Live</span>
      </div>
      {[
        { name: "Alex M.", role: "Engineer", pending: false },
        { name: "Priya K.", role: "Designer", pending: false },
        { name: "Jordan R.", role: "Ops", pending: true },
      ].map((emp) => (
        <div key={emp.name} className="flex items-center justify-between py-2.5 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(6,182,212,0.15)", color: "#06B6D4" }}>
              {emp.name[0]}
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "#E8E9F0", fontSize: "0.68rem" }}>{emp.name}</p>
              <p style={{ color: "#4B5563", fontSize: "0.6rem" }}>{emp.role}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs font-bold" style={{ color: "#9CA3AF", fontSize: "0.68rem" }}>•••• USDC</p>
            <span style={{ fontSize: "0.6rem", color: emp.pending ? "#F59E0B" : "#4ADE80" }}>{emp.pending ? "⏳" : "✓"}</span>
          </div>
        </div>
      ))}
      <div className="mt-3 rounded-lg py-2 text-center text-xs font-semibold" style={{ background: "rgba(6,182,212,0.12)", color: "#06B6D4", border: "1px solid rgba(6,182,212,0.2)" }}>
        Run Payroll ↗ · Aggregate only on-chain
      </div>
    </div>
  );
}

function SaveMockup() {
  const members = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div
      className="w-full max-w-[280px] rounded-xl border p-4 mx-auto"
      style={{ background: "#0D0E16", borderColor: "rgba(245,158,11,0.2)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-xs font-semibold" style={{ color: "#F59E0B", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>ZK CIRCLE</p>
          <p className="font-bold text-sm" style={{ color: "#E8E9F0" }}>DeFi Friends · Round 4/10</p>
        </div>
        <div className="text-right">
          <p className="text-xs" style={{ color: "#6B7280" }}>Pool</p>
          <p className="font-mono font-bold text-sm" style={{ color: "#F59E0B" }}>•••• USDC</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {members.map((m) => (
          <div
            key={m}
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: m < 4 ? "rgba(74,222,128,0.15)" : m === 4 ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${m < 4 ? "rgba(74,222,128,0.3)" : m === 4 ? "rgba(245,158,11,0.4)" : "rgba(255,255,255,0.08)"}`,
              color: m < 4 ? "#4ADE80" : m === 4 ? "#F59E0B" : "#4B5563",
            }}
          >
            {m < 4 ? "✓" : m === 4 ? "→" : "?"}
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden mb-2" style={{ height: "8px", background: "rgba(255,255,255,0.06)" }}>
        <div className="h-full rounded-lg" style={{ width: "40%", background: "linear-gradient(90deg, #F59E0B, #EF4444)" }} />
      </div>
      <p className="text-xs" style={{ color: "#6B7280" }}>
        10 anonymous members · ZK-ROSCA
        <span className="ml-2 font-mono font-bold" style={{ color: "#F59E0B" }}>First ever</span>
      </p>
    </div>
  );
}

function ProveMockup() {
  return (
    <div
      className="w-full max-w-[220px] rounded-xl border p-5 mx-auto text-center"
      style={{ background: "#0D0E16", borderColor: "rgba(139,92,246,0.2)" }}
    >
      <p className="text-xs mb-3" style={{ color: "#6B7280", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>ZK CREDIT SCORE</p>
      <div className="relative mx-auto mb-3" style={{ width: "100px", height: "56px" }}>
        <svg viewBox="0 0 100 56" fill="none" className="w-full">
          <path d="M10 50 A40 40 0 0 1 90 50" stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinecap="round" />
          <path d="M10 50 A40 40 0 0 1 78 20" stroke="url(#sg)" strokeWidth="8" strokeLinecap="round" />
          <defs>
            <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <p className="font-bold text-sm" style={{ color: "#E8E9F0" }}>Excellent</p>
        </div>
      </div>
      <div className="shield-badge mx-auto mb-3" style={{ display: "inline-flex" }}>Verified by ZK Proof</div>
      <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
        Score proven without revealing transaction history, income, or wallet address.
      </p>
    </div>
  );
}

function GovMockup() {
  return (
    <div
      className="w-full max-w-[280px] rounded-xl border p-4 mx-auto"
      style={{ background: "#0D0E16", borderColor: "rgba(6,182,212,0.2)" }}
    >
      <p className="text-xs font-semibold mb-3" style={{ color: "#06B6D4", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>TREASURY APPROVAL</p>
      <div className="dash-row mb-2">
        <span className="text-xs" style={{ color: "#9CA3AF" }}>Transaction</span>
        <span className="text-xs font-mono font-semibold" style={{ color: "#E8E9F0" }}>••••• USDC</span>
      </div>
      <div className="dash-row mb-3">
        <span className="text-xs" style={{ color: "#9CA3AF" }}>Threshold</span>
        <span className="text-xs font-semibold" style={{ color: "#E8E9F0" }}>3 of 5</span>
      </div>
      <p className="text-xs mb-2" style={{ color: "#6B7280" }}>Signers</p>
      <div className="flex flex-col gap-1.5 mb-3">
        {[
          { label: "Signer #1", approved: true },
          { label: "Signer #2", approved: true },
          { label: "Signer #3", approved: true },
          { label: "Signer #4", approved: false },
          { label: "Signer #5", approved: false },
        ].map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }} />
              <span className="text-xs" style={{ color: "#6B7280" }}>{s.label}</span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: "rgba(139,92,246,0.12)", color: "#A78BFA", fontSize: "0.55rem" }}>MASKED</span>
            </div>
            <span style={{ color: s.approved ? "#4ADE80" : "#374151", fontSize: "0.8rem" }}>
              {s.approved ? "✓" : "○"}
            </span>
          </div>
        ))}
      </div>
      <div className="rounded-lg py-2 text-center text-xs font-semibold" style={{ background: "rgba(74,222,128,0.12)", color: "#4ADE80", border: "1px solid rgba(74,222,128,0.2)" }}>
        3 of 5 approved · ZK Quorum Proof ✓
      </div>
    </div>
  );
}

function KoshCard() {
  return (
    <div className="relative mx-auto" style={{ width: "320px", height: "200px" }}>
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(6,182,212,0.4))",
          filter: "blur(25px)",
          transform: "scale(1.1) translateY(8px)",
        }}
      />
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          width: "320px",
          height: "200px",
          transform: "perspective(800px) rotateX(6deg) rotateY(-8deg)",
          background: "linear-gradient(135deg, #1a0a3e 0%, #0c1a2e 50%, #0a2040 100%)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Left gradient border instead of top strip */}
        <div
          className="absolute top-0 left-0 bottom-0 holo-gradient"
          style={{ width: "4px", opacity: 0.9 }}
        />
        <div
          className="absolute left-6 top-10 rounded"
          style={{
            width: "36px", height: "28px",
            background: "linear-gradient(135deg, #F59E0B, #D97706)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <div className="absolute inset-1 rounded-sm border opacity-40" style={{ borderColor: "#92400E" }} />
        </div>
        <div className="absolute right-6 top-5">
          <div className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em" }}>
            KOSH
          </div>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
            animation: "holoShine 5s ease infinite",
          }}
        />
        <div
          className="absolute bottom-12 left-6 font-mono text-sm tracking-widest"
          style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.2em" }}
        >
          •••• •••• •••• 4729
        </div>
        <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end">
          <div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.55rem", letterSpacing: "0.1em", fontFamily: "'JetBrains Mono', monospace" }}>CARDHOLDER</p>
            <p className="font-semibold text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>SHIELDED ••••</p>
          </div>
          <div className="text-right">
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.55rem", letterSpacing: "0.1em", fontFamily: "'JetBrains Mono', monospace" }}>EXPIRES</p>
            <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>03/29</p>
          </div>
        </div>
        <div className="absolute right-6 bottom-5">
          <div className="flex">
            <div className="w-7 h-7 rounded-full" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }} />
            <div className="w-7 h-7 rounded-full -ml-3" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

const IDENTITY_SPOKES = [
  { label: "Send", color: "#8B5CF6", angle: -90 },
  { label: "Pay", color: "#06B6D4", angle: -30 },
  { label: "Save", color: "#F59E0B", angle: 30 },
  { label: "Prove", color: "#4ADE80", angle: 90 },
  { label: "Govern", color: "#06B6D4", angle: 150 },
  { label: "Spend", color: "#A78BFA", angle: -150 },
].map((m) => ({
  ...m,
  x: 110 + 75 * Math.sin((m.angle * Math.PI) / 180),
  y: 110 - 75 * Math.cos((m.angle * Math.PI) / 180),
}));

function IdentityMockup() {
  return (
    <div className="relative mx-auto" style={{ width: "220px", height: "220px" }}>
      <svg viewBox="0 0 220 220" className="w-full h-full">
        {IDENTITY_SPOKES.map((m) => {
          const { x, y } = m;
          return (
            <g key={m.label}>
              <line x1="110" y1="110" x2={x} y2={y} stroke={m.color} strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3,3" />
              <circle cx={x} cy={y} r="20" fill={`${m.color}18`} stroke={m.color} strokeWidth="1" strokeOpacity="0.5" />
              <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle" fill={m.color} fontSize="8" fontWeight="700" fontFamily="JetBrains Mono, monospace">
                {m.label}
              </text>
            </g>
          );
        })}
        <circle cx="110" cy="110" r="28" fill="rgba(139,92,246,0.15)" stroke="url(#idg)" strokeWidth="2" />
        <defs>
          <linearGradient id="idg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <text x="110" y="107" textAnchor="middle" fill="#E8E9F0" fontSize="7" fontWeight="700" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
          ZK
        </text>
        <text x="110" y="117" textAnchor="middle" fill="#9CA3AF" fontSize="6" fontFamily="JetBrains Mono, monospace">
          IDENTITY
        </text>
      </svg>
    </div>
  );
}

/* ── Module label component ─────────────────────────────────────────────── */

function ModuleLabel({ number, name, color }: { number: string; name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="terminal-label" style={{ opacity: 0.5 }}>{number} — {name}</span>
    </div>
  );
}

/* ── Section component ───────────────────────────────────────────────────── */

export default function Solution() {
  return (
    <section id="features" className="py-24 overflow-hidden" style={{ background: "#06070B" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeader
            label="The Solution"
            title={
              <>
                All your finance. One place.{" "}
                <span className="gradient-text">Zero exposure.</span>
              </>
            }
            body="Seven modules, one ZK identity, every chain. Verify once. Send, earn, save, prove, spend, and govern — without scattering your data across the internet."
          />
        </ScrollReveal>

        <div className="mt-16 flex flex-col gap-20">

          {/* 01 — Send: violet left-border accent */}
          <ScrollReveal>
            <div
              className="module-card rounded-2xl border-y border-r overflow-hidden"
              style={{ borderColor: "rgba(255,255,255,0.07)", borderLeft: "3px solid #8B5CF6", background: "#0E0D17" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-12">
                <div>
                  <ModuleLabel number="01" name="Send" color="#8B5CF6" />
                  <h3
                    className="mb-4 font-display font-bold"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.025em", color: "#E8E9F0" }}
                  >
                    Send money home. Keep everything else{" "}
                    <span className="serif-accent" style={{ color: "#A78BFA" }}>private.</span>
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#9CA3AF" }}>
                    Shielded stablecoin transfers where amounts and identities are hidden. Compliance proofs satisfy regulators without exposing personal data. Pay 0.1% — not 6.5%.
                  </p>
                </div>
                <div className="flex items-center justify-center min-h-[220px]">
                  <SendMockup />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 02 — Pay: card-free, text floats on section bg */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1 py-4">
              <div>
                <ModuleLabel number="02" name="Pay" color="#06B6D4" />
                <h3
                  className="mb-4 font-display font-bold"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.025em", color: "#E8E9F0" }}
                >
                  Pay your team. Nobody sees what anyone{" "}
                  <span className="serif-accent" style={{ color: "#06B6D4" }}>earns.</span>
                </h3>
                <p className="leading-relaxed" style={{ color: "#9CA3AF" }}>
                  Batch payroll in shielded stablecoins. The chain sees aggregate totals. Individual salaries stay private. No Etherscan archaeology. No comp drama.
                </p>
              </div>
              <div
                className="flex items-center justify-center min-h-[220px] rounded-2xl p-6"
                style={{ background: "rgba(6,182,212,0.04)", border: "1px solid rgba(6,182,212,0.12)" }}
              >
                <PayMockup />
              </div>
            </div>
          </ScrollReveal>

          {/* 03 — Save: amber left-border */}
          <ScrollReveal>
            <div
              className="module-card rounded-2xl border-y border-r overflow-hidden"
              style={{ borderColor: "rgba(255,255,255,0.07)", borderLeft: "3px solid #F59E0B", background: "#0E0D10" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-12">
                <div>
                  <ModuleLabel number="03" name="Save" color="#F59E0B" />
                  <h3
                    className="mb-4 font-display font-bold"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.025em", color: "#E8E9F0" }}
                  >
                    The world&apos;s first{" "}
                    <span className="serif-accent" style={{ color: "#F59E0B" }}>ZK-ROSCA.</span>{" "}
                    Savings circles, on-chain.
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#9CA3AF" }}>
                    Join community savings circles with anonymous contributions. Bid-based payouts. Defaulters identified without compromising honest members. Chit funds. Tandas. Stokvels. On-chain. Private.
                  </p>
                </div>
                <div className="flex items-center justify-center min-h-[220px]">
                  <SaveMockup />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 04 — Prove: narrow text, more mockup space */}
          <ScrollReveal>
            <div
              className="module-card rounded-2xl border"
              style={{ background: "#0D0E16", borderColor: "rgba(139,92,246,0.15)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center p-8 lg:p-12 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div>
                  <ModuleLabel number="04" name="Prove" color="#A78BFA" />
                  <h3
                    className="mb-4 font-display font-bold"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.025em", color: "#E8E9F0" }}
                  >
                    Build credit from your financial life. Prove it without{" "}
                    <span className="serif-accent" style={{ color: "#A78BFA" }}>showing it.</span>
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#9CA3AF" }}>
                    Every remittance, payroll receipt, and circle completion builds a private credit score. Prove &ldquo;my score is above 700&rdquo; to a lender — without revealing your history, income, or wallet address.
                  </p>
                </div>
                <div className="flex items-center justify-center min-h-[260px]">
                  <ProveMockup />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 05 — Govern: card-free like Pay, grid texture in mockup */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-4">
              <div>
                <ModuleLabel number="05" name="Govern" color="#06B6D4" />
                <h3
                  className="mb-4 font-display font-bold"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.025em", color: "#E8E9F0" }}
                >
                  Your treasury. Hidden signers.{" "}
                  <span className="serif-accent" style={{ color: "#06B6D4" }}>ZK quorum proofs.</span>
                </h3>
                <p className="leading-relaxed" style={{ color: "#9CA3AF" }}>
                  Multi-sig treasury where signers stay anonymous. ZK proofs verify that enough authorized people approved — without revealing who. Gnosis Safe, but private.
                </p>
              </div>
              <div
                className="grid-texture flex items-center justify-center min-h-[220px] rounded-2xl p-6"
                style={{ background: "rgba(6,182,212,0.03)", border: "1px solid rgba(6,182,212,0.1)" }}
              >
                <GovMockup />
              </div>
            </div>
          </ScrollReveal>

          {/* 06 — Kosh Card: full-width, left gradient border */}
          <ScrollReveal>
            <div
              className="module-card rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0D0A20 0%, #0A1525 50%, #080E1A 100%)",
                borderLeft: "4px solid",
                borderLeftColor: "transparent",
                borderTop: "1px solid rgba(139,92,246,0.2)",
                borderRight: "1px solid rgba(139,92,246,0.2)",
                borderBottom: "1px solid rgba(139,92,246,0.2)",
                backgroundImage: "linear-gradient(135deg, #0D0A20 0%, #0A1525 50%, #080E1A 100%)",
                // gradient left border via box-shadow workaround
                boxShadow: "inset 4px 0 0 0 #8B5CF6",
              }}
            >
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <ModuleLabel number="06" name="Spend" color="#8B5CF6" />
                    <h3
                      className="mb-4 font-display font-bold"
                      style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.025em", color: "#E8E9F0" }}
                    >
                      Spend your crypto.{" "}
                      <span className="serif-accent gradient-text">Anywhere.</span>{" "}
                      Privately.
                    </h3>
                    <p className="mb-6 leading-relaxed" style={{ color: "#9CA3AF" }}>
                      A virtual (and physical) card that lets you spend from your shielded Kosh balance at any Visa/Mastercard merchant. Your on-chain history stays private. Fiat at the point of sale. No off-ramp required.
                    </p>
                    {/* Mono tag list instead of pills */}
                    <p
                      className="text-xs font-mono"
                      style={{ color: "#6B7280", letterSpacing: "0.05em" }}
                    >
                      Virtual Card · Physical Card · Visa/Mastercard · Shielded Balance · Privacy-First
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-6">
                    <KoshCard />
                    <div
                      className="rounded-xl border p-4 w-full max-w-[280px]"
                      style={{ background: "rgba(13,14,22,0.8)", borderColor: "rgba(255,255,255,0.07)" }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>Kosh Card</p>
                        <div className="shield-badge">Balance: Shielded</div>
                      </div>
                      {[
                        { merchant: "Zara", cat: "Shopping" },
                        { merchant: "Bolt Food", cat: "Delivery" },
                        { merchant: "Shell", cat: "Fuel" },
                      ].map((tx) => (
                        <div key={tx.merchant} className="flex items-center justify-between py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ background: "rgba(139,92,246,0.12)" }}>
                              {tx.merchant[0]}
                            </div>
                            <div>
                              <p className="text-xs font-semibold" style={{ color: "#E8E9F0", fontSize: "0.68rem" }}>{tx.merchant}</p>
                              <p style={{ color: "#4B5563", fontSize: "0.6rem" }}>{tx.cat}</p>
                            </div>
                          </div>
                          <span className="font-mono text-xs" style={{ color: "#6B7280", fontSize: "0.68rem" }}>••••</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 07 — Identity: ghost number bleeding behind */}
          <ScrollReveal>
            <div
              className="module-card rounded-2xl border relative overflow-hidden"
              style={{ background: "#0D0E16", borderColor: "rgba(139,92,246,0.15)" }}
            >
              {/* Ghost "07" */}
              <div
                className="num-giant absolute -right-8 -bottom-8 select-none pointer-events-none"
                aria-hidden
                style={{ color: "transparent", WebkitTextStroke: "1px rgba(139,92,246,0.06)", zIndex: 0 }}
              >
                07
              </div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-12 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1">
                <div>
                  <ModuleLabel number="07" name="Identity" color="#8B5CF6" />
                  <h3
                    className="mb-4 font-display font-bold"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.025em", color: "#E8E9F0" }}
                  >
                    <span className="serif-accent" style={{ color: "#A78BFA" }}>Verify once.</span>{" "}
                    Use everywhere.
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#9CA3AF" }}>
                    One KYC verification creates a ZK identity leaf in a Merkle tree. Only the root hash goes on-chain. That one credential unlocks every module — including the Kosh Card. No more re-uploading your passport.
                  </p>
                </div>
                <div className="flex items-center justify-center min-h-[220px]">
                  <IdentityMockup />
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
