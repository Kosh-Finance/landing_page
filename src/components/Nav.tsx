"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Midnight", href: "#why-midnight" },
  { label: "FAQ", href: "#faq" },
];

const ease: [number, number, number, number] = [0.19, 1, 0.22, 1];

function KoshMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#F0F4FF" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" fill="#F0F4FF" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#F0F4FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerBg = scrolled || mobileOpen
    ? "rgba(8,11,15,0.95)"
    : "transparent";
  const headerBorder = scrolled || mobileOpen
    ? "1px solid rgba(255,255,255,0.07)"
    : "1px solid transparent";

  return (
    <>
      <motion.header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: headerBg,
          borderBottom: headerBorder,
          backdropFilter: scrolled || mobileOpen ? "blur(20px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled || mobileOpen ? "blur(20px)" : "blur(0px)",
          transition: "background 0.3s, border-color 0.3s",
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.25rem",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <KoshMark />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.9375rem",
                color: "var(--color-ink)",
                letterSpacing: "-0.01em",
              }}
            >
              Kosh Finance
            </span>
          </a>

          {/* Desktop nav links — hidden on mobile */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-silver)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-silver)")}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          )}

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            {/* CTA — desktop only */}
            {!isMobile && (
              <a
                href="#waitlist"
                className="btn-lunar"
                style={{ padding: "0.5rem 1.25rem", fontSize: "0.8125rem" }}
              >
                Join Waitlist
              </a>
            )}

            {/* Hamburger — mobile only */}
            {isMobile && (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                style={{
                  background: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  cursor: "pointer",
                  padding: "6px 8px",
                  color: "var(--color-ink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                }}
              >
                <motion.div
                  animate={mobileOpen ? "open" : "closed"}
                  style={{ width: 18, height: 14, position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 },
                    }}
                    transition={{ duration: 0.25, ease }}
                    style={{ display: "block", height: "1.5px", background: "currentColor", borderRadius: "2px", transformOrigin: "center" }}
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1, scaleX: 1 },
                      open: { opacity: 0, scaleX: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "block", height: "1.5px", background: "currentColor", borderRadius: "2px" }}
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 },
                    }}
                    transition={{ duration: 0.25, ease }}
                    style={{ display: "block", height: "1.5px", background: "currentColor", borderRadius: "2px", transformOrigin: "center" }}
                  />
                </motion.div>
              </button>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease }}
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99,
              background: "rgba(8,11,15,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              padding: "2rem 1.25rem",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Nav links */}
            <nav style={{ display: "flex", flexDirection: "column", gap: "0", flex: 1 }}>
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06, ease }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    textDecoration: "none",
                    letterSpacing: "-0.02em",
                    padding: "1rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "block",
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2, ease }}
              style={{ paddingTop: "2rem" }}
            >
              <a
                href="#waitlist"
                className="btn-lunar"
                onClick={() => setMobileOpen(false)}
                style={{ width: "100%", fontSize: "1rem", padding: "1rem" }}
              >
                Join the Waitlist
              </a>
              <p className="label-mono" style={{ textAlign: "center", marginTop: "1rem" }}>
                ZK-ROSCA · Midnight Network · 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
