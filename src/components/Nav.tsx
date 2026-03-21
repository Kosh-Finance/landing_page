"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import EmailCapture from "./EmailCapture";
import GeoIcon from "./GeoIcon";

const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Why Midnight", href: "#why-midnight" },
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
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Logo variant="full" size={30} />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
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
              className="btn-primary text-sm px-4 py-2"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu toggle — 44px touch target */}
          <button
            className="md:hidden p-2.5 rounded-lg"
            style={{ color: "#9CA3AF" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <GeoIcon name="x" size={20} />
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
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
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: "#9CA3AF" }}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E8E9F0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <EmailCapture buttonText="Join Waitlist" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Email modal for desktop CTA */}
      {showEmailModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ background: "rgba(6,7,11,0.85)", backdropFilter: "blur(12px)", animation: "dramaticReveal 0.3s var(--ease-out-expo) forwards" }}
          onClick={(e) => e.target === e.currentTarget && setShowEmailModal(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border p-8"
            style={{ background: "#0D0E16", borderColor: "rgba(139,92,246,0.3)" }}
          >
            <button
              className="absolute top-4 right-4 p-1.5 rounded-md transition-colors duration-200"
              onClick={() => setShowEmailModal(false)}
              style={{ color: "#6B7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E8E9F0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
              aria-label="Close modal"
            >
              <GeoIcon name="x" size={16} />
            </button>
            <h3 className="mb-2 text-xl font-bold" style={{ color: "#E8E9F0" }}>
              Join the waitlist
            </h3>
            <p className="mb-6 text-sm" style={{ color: "#9CA3AF" }}>
              Be first to use the world&apos;s first ZK-ROSCA. Launching on Midnight mainnet — 2026.
            </p>
            <EmailCapture size="large" />
          </div>
        </div>
      )}
    </>
  );
}
