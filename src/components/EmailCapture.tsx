"use client";

import { useState } from "react";

interface EmailCaptureProps {
  size?: "default" | "large";
  placeholder?: string;
  buttonText?: string;
}

export default function EmailCapture({
  size = "default",
  placeholder = "your@email.com",
  buttonText = "Get Early Access",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-3 rounded-xl border border-violet/30 bg-violet-dim px-5 ${
          size === "large" ? "py-4 text-base" : "py-3 text-sm"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="#8B5CF6" strokeWidth="1.5" />
          <path d="M6 10l3 3 5-5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#A78BFA", fontWeight: 600 }}>
          You&apos;re on the list. We&apos;ll be in touch soon.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex gap-3 ${size === "large" ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className={`flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-text placeholder-muted backdrop-blur-sm outline-none transition-all focus:border-violet/50 focus:bg-white/8 focus:ring-2 focus:ring-violet/20 ${
          size === "large" ? "py-4 text-base" : "py-3 text-sm"
        }`}
        style={{ color: "#E8E9F0" }}
      />
      <button
        type="submit"
        disabled={loading}
        className={`btn-primary whitespace-nowrap disabled:opacity-70 ${
          size === "large" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"
        }`}
      >
        {loading ? (
          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        ) : null}
        {loading ? "Joining..." : buttonText}
      </button>
    </form>
  );
}
