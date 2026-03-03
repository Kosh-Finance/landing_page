import ScrollReveal from "./ScrollReveal";

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
        <div className="mt-4 rounded-lg py-2.5 text-center text-xs font-semibold" style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)", color: "white" }}>
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
        { name: "Alex M.", role: "Engineer", status: "✓" },
        { name: "Priya K.", role: "Designer", status: "✓" },
        { name: "Jordan R.", role: "Ops", status: "⏳" },
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
            <span style={{ fontSize: "0.6rem", color: emp.status === "✓" ? "#4ADE80" : "#F59E0B" }}>{emp.status}</span>
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
      {/* Score gauge */}
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
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(6,182,212,0.4))",
          filter: "blur(25px)",
          transform: "scale(1.1) translateY(8px)",
        }}
      />
      {/* Card body */}
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
        {/* Holographic edge stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 holo-gradient"
          style={{ opacity: 0.9 }}
        />
        {/* Chip */}
        <div
          className="absolute left-6 top-10 rounded"
          style={{
            width: "36px",
            height: "28px",
            background: "linear-gradient(135deg, #F59E0B, #D97706)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <div className="absolute inset-1 rounded-sm border opacity-40" style={{ borderColor: "#92400E" }} />
        </div>
        {/* Logo */}
        <div className="absolute right-6 top-5">
          <div className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em" }}>
            KOSH
          </div>
        </div>
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
            animation: "holoShine 5s ease infinite",
          }}
        />
        {/* Card number */}
        <div
          className="absolute bottom-12 left-6 font-mono text-sm tracking-widest"
          style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.2em" }}
        >
          •••• •••• •••• 4729
        </div>
        {/* Cardholder + expiry */}
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
        {/* Network logo (Visa-style) */}
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

function IdentityMockup() {
  const modules = [
    { label: "Send", color: "#8B5CF6", angle: -90 },
    { label: "Pay", color: "#06B6D4", angle: -30 },
    { label: "Save", color: "#F59E0B", angle: 30 },
    { label: "Prove", color: "#4ADE80", angle: 90 },
    { label: "Govern", color: "#06B6D4", angle: 150 },
    { label: "Spend", color: "#A78BFA", angle: -150 },
  ];
  const r = 75;
  return (
    <div className="relative mx-auto" style={{ width: "220px", height: "220px" }}>
      <svg viewBox="0 0 220 220" className="w-full h-full">
        {modules.map((m) => {
          const x = 110 + r * Math.sin((m.angle * Math.PI) / 180);
          const y = 110 - r * Math.cos((m.angle * Math.PI) / 180);
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
        {/* Center node */}
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

/* ── Module definitions ─────────────────────────────────────────────────── */

const MODULES = [
  {
    id: "send",
    number: "01",
    label: "Send",
    tagline: "Send money home. Keep everything else private.",
    body: "Shielded stablecoin transfers where amounts and identities are hidden. Compliance proofs satisfy regulators without exposing personal data. Pay 0.1% — not 6.5%.",
    color: "#8B5CF6",
    mockup: <SendMockup />,
    reverse: false,
    fullWidth: false,
  },
  {
    id: "pay",
    number: "02",
    label: "Pay",
    tagline: "Pay your team. Nobody sees what anyone earns.",
    body: "Batch payroll in shielded stablecoins. The chain sees aggregate totals. Individual salaries stay private. No Etherscan archaeology. No comp drama.",
    color: "#06B6D4",
    mockup: <PayMockup />,
    reverse: true,
    fullWidth: false,
  },
  {
    id: "save",
    number: "03",
    label: "Save",
    tagline: "The world's first ZK-ROSCA. Savings circles, on-chain.",
    body: "Join community savings circles with anonymous contributions. Bid-based payouts. Defaulters identified without compromising honest members. Chit funds. Tandas. Stokvels. On-chain. Private.",
    color: "#F59E0B",
    mockup: <SaveMockup />,
    reverse: false,
    fullWidth: false,
  },
  {
    id: "prove",
    number: "04",
    label: "Prove",
    tagline: "Build credit from your financial life. Prove it without showing it.",
    body: "Every remittance, payroll receipt, and circle completion builds a private credit score. Prove 'my score is above 700' to a lender — without revealing your history, income, or wallet address.",
    color: "#A78BFA",
    mockup: <ProveMockup />,
    reverse: true,
    fullWidth: false,
  },
  {
    id: "govern",
    number: "05",
    label: "Govern",
    tagline: "Your treasury. Hidden signers. ZK quorum proofs.",
    body: "Multi-sig treasury where signers stay anonymous. ZK proofs verify that enough authorized people approved — without revealing who. Gnosis Safe, but private.",
    color: "#06B6D4",
    mockup: <GovMockup />,
    reverse: false,
    fullWidth: false,
  },
  {
    id: "spend",
    number: "06",
    label: "Spend",
    tagline: "Spend your crypto. Anywhere. Privately.",
    body: "A virtual (and physical) card that lets you spend from your shielded Kosh balance at any Visa/Mastercard merchant. Your on-chain history stays private. Fiat at the point of sale. No off-ramp required.",
    color: "#8B5CF6",
    mockup: null, // Handled specially as full-width
    reverse: false,
    fullWidth: true,
  },
  {
    id: "identity",
    number: "07",
    label: "Identity",
    tagline: "Verify once. Use everywhere.",
    body: "One KYC verification creates a ZK identity leaf in a Merkle tree. Only the root hash goes on-chain. That one credential unlocks every module — including the Kosh Card. No more re-uploading your passport.",
    color: "#8B5CF6",
    mockup: <IdentityMockup />,
    reverse: true,
    fullWidth: false,
  },
];

/* ── Section component ───────────────────────────────────────────────────── */

export default function Solution() {
  return (
    <section id="features" className="py-24 overflow-hidden" style={{ background: "#06070B" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="section-label mb-4">The Solution</div>
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
            All your finance. One place.{" "}
            <span className="gradient-text">Zero exposure.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="mb-16 max-w-2xl text-lg" style={{ color: "#9CA3AF" }}>
            Seven modules, one ZK identity, every chain. Verify once. Send, earn, save, prove, spend, and govern — without scattering your data across the internet.
          </p>
        </ScrollReveal>

        {/* Modules */}
        <div className="flex flex-col gap-20">
          {MODULES.map((mod) => {
            if (mod.fullWidth) {
              // Kosh Card — full-width hero treatment
              return (
                <ScrollReveal key={mod.id}>
                  <div
                    className="module-card rounded-2xl border overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #0D0A20 0%, #0A1525 50%, #080E1A 100%)",
                      borderColor: "rgba(139,92,246,0.2)",
                      padding: "0",
                    }}
                  >
                    {/* Top strip */}
                    <div className="holo-gradient" style={{ height: "3px" }} />
                    <div className="p-8 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className="font-mono text-xs font-bold"
                              style={{ color: "rgba(139,92,246,0.6)" }}
                            >
                              {mod.number}
                            </span>
                            <span
                              className="px-2.5 py-1 rounded-full text-xs font-semibold"
                              style={{
                                background: "rgba(139,92,246,0.15)",
                                color: "#A78BFA",
                                border: "1px solid rgba(139,92,246,0.3)",
                              }}
                            >
                              {mod.label}
                            </span>
                          </div>
                          <h3
                            className="mb-4 font-display font-bold"
                            style={{
                              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                              letterSpacing: "-0.025em",
                              color: "#E8E9F0",
                            }}
                          >
                            {mod.tagline}
                          </h3>
                          <p className="mb-6 leading-relaxed" style={{ color: "#9CA3AF" }}>
                            {mod.body}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {["Virtual Card", "Physical Card", "Visa/Mastercard", "Shielded Balance", "Privacy-First"].map((t) => (
                              <span
                                key={t}
                                className="rounded-full px-3 py-1 text-xs font-medium"
                                style={{
                                  background: "rgba(255,255,255,0.04)",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                  color: "#9CA3AF",
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                          <KoshCard />
                          {/* Companion phone screen */}
                          <div
                            className="rounded-xl border p-4 w-full max-w-[280px]"
                            style={{ background: "rgba(13,14,22,0.8)", borderColor: "rgba(255,255,255,0.07)" }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <p className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>Kosh Card</p>
                              <div className="shield-badge">Balance: Shielded</div>
                            </div>
                            {[
                              { merchant: "Zara", cat: "Shopping", amount: "Shielded" },
                              { merchant: "Bolt Food", cat: "Delivery", amount: "Shielded" },
                              { merchant: "Shell", cat: "Fuel", amount: "Shielded" },
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
              );
            }

            return (
              <ScrollReveal key={mod.id}>
                <div
                  className="module-card rounded-2xl border"
                  style={{
                    background: "#0D0E16",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-12 ${mod.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                    {/* Text */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold" style={{ color: `${mod.color}60` }}>
                          {mod.number}
                        </span>
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: `${mod.color}18`,
                            color: mod.color,
                            border: `1px solid ${mod.color}35`,
                          }}
                        >
                          {mod.label}
                        </span>
                      </div>
                      <h3
                        className="mb-4 font-display font-bold"
                        style={{
                          fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                          letterSpacing: "-0.025em",
                          color: "#E8E9F0",
                        }}
                      >
                        {mod.tagline}
                      </h3>
                      <p className="leading-relaxed" style={{ color: "#9CA3AF" }}>
                        {mod.body}
                      </p>
                    </div>
                    {/* Mockup */}
                    <div className="flex items-center justify-center min-h-[220px]">
                      {mod.mockup}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
