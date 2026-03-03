"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import EmailCapture from "./EmailCapture";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Chains", href: "#chains" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(6,7,11,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Logo variant="full" size={30} />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "#9CA3AF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8E9F0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => setShowEmailModal(true)}
              className="btn-glow rounded-lg px-4 py-2 text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#9CA3AF" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t px-6 py-4"
            style={{
              background: "rgba(6,7,11,0.95)",
              borderColor: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium"
                  style={{ color: "#9CA3AF" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <EmailCapture buttonText="Get Early Access" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Email modal for desktop CTA */}
      {showEmailModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ background: "rgba(6,7,11,0.85)", backdropFilter: "blur(12px)" }}
          onClick={(e) => e.target === e.currentTarget && setShowEmailModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border p-8"
            style={{ background: "#0D0E16", borderColor: "rgba(139,92,246,0.3)" }}
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setShowEmailModal(false)}
              style={{ color: "#6B7280" }}
            >
              ✕
            </button>
            <h3 className="mb-2 text-xl font-bold" style={{ color: "#E8E9F0" }}>
              Join the waitlist
            </h3>
            <p className="mb-6 text-sm" style={{ color: "#9CA3AF" }}>
              Be first in line for unified private finance. Launching on Midnight mainnet — March 2026.
            </p>
            <EmailCapture size="large" />
          </div>
        </div>
      )}
    </>
  );
}
