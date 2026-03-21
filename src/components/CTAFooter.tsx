"use client";

import ScrollReveal from "./ScrollReveal";
import EmailCapture from "./EmailCapture";
import Logo from "./Logo";
import GeoIcon from "./GeoIcon";

function MidnightBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
      style={{
        background: "rgba(139,92,246,0.1)",
        border: "1px solid rgba(139,92,246,0.25)",
        color: "#A78BFA",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M6 1L10 3.5v5L6 11 2 8.5v-5Z" stroke="#8B5CF6" strokeWidth="1" fill="rgba(139,92,246,0.2)" />
      </svg>
      Built on Midnight Network
    </div>
  );
}

const TRUST_BADGES = [
  { icon: "shield" as const, text: "Private by default" },
  { icon: "lock" as const, text: "Smart contract enforced" },
  { icon: "star" as const, text: "Built on Midnight" },
];

const FOOTER_LINKS = {
  Product: ["How it Works", "FAQ", "Docs"],
};

const COMMUNITY_LINKS = [
  { label: "Twitter / X", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Discord", href: "#" },
];

export default function CTAFooter() {
  return (
    <>
      {/* CTA Section */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #080910 0%, #06070B 100%)" }}
      >
        {/* Aurora — bumped violet opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(139,92,246,0.18) 0%, rgba(6,182,212,0.05) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "200px", background: "linear-gradient(0deg, #06070B, transparent)" }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <ScrollReveal>
            <div className="section-label mb-6 justify-center">Early Access</div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h2
              className="mb-4 font-display"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: "#E8E9F0",
                lineHeight: 1.1,
              }}
            >
              Ready to save{" "}
              <span className="serif-accent gradient-text">privately?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="mb-10 text-xl leading-relaxed" style={{ color: "#9CA3AF" }}>
              Join the waitlist for the world&apos;s first ZK-ROSCA. Built on Midnight.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="max-w-lg mx-auto mb-8">
              <EmailCapture
                size="large"
                placeholder="your@email.com"
                buttonText="Join Waitlist →"
              />
            </div>
            <p className="text-xs" style={{ color: "#4B5563", fontFamily: "'JetBrains Mono', monospace" }}>
              No spam. No token sales. Just the product.
            </p>
          </ScrollReveal>

          {/* Trust row — GeoIcon replaces emoji */}
          <ScrollReveal delay={4}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {TRUST_BADGES.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm" style={{ color: "#6B7280" }}>
                  <GeoIcon name={item.icon} size={14} color="#6B7280" strokeWidth={1.5} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{ background: "#06070B", borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            {/* Monochrome logo + tagline */}
            <div>
              <Logo variant="full" size={28} className="mb-3" monochrome />
              <p className="text-sm max-w-xs" style={{ color: "#4B5563" }}>
                The world&apos;s first ZK-ROSCA. Private savings, on-chain.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-8">
              {Object.entries(FOOTER_LINKS).map(([section, links]) => (
                <div key={section}>
                  <p className="text-xs font-semibold mb-3" style={{ color: "#374151", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>{section}</p>
                  <div className="flex flex-col gap-2">
                    {links.map((l) => (
                      <a
                        key={l}
                        href="#"
                        className="text-sm transition-colors duration-200"
                        style={{ color: "#6B7280" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
                      >
                        {l}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: "#374151", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Community</p>
                <div className="flex flex-col gap-2">
                  {COMMUNITY_LINKS.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#6B7280" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-xs" style={{ color: "#374151" }}>
                © 2026 Kosh Finance. All rights reserved.
              </p>
              <a
                href="mailto:kd@kosh.finance"
                className="text-xs transition-colors duration-200"
                style={{ color: "#4B5563" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6B7280")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
              >
                kd@kosh.finance
              </a>
            </div>
            <div className="flex items-center gap-4">
              {["Privacy Policy", "Terms"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-xs transition-colors duration-200"
                  style={{ color: "#374151" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#6B7280")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
                >
                  {l}
                </a>
              ))}
              <MidnightBadge />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
