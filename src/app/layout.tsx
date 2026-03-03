import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosh — Unified Private Finance. One App. Zero Exposure.",
  description:
    "Remittances, payroll, savings circles, credit scoring, treasury management, and a spending card — unified under one zero-knowledge identity. Built on Midnight Network.",
  keywords: [
    "Kosh", "kosh.finance", "private finance", "zero knowledge", "ZK remittances",
    "ZK payroll", "ZK-ROSCA", "savings circles", "Midnight Network", "Web3 finance",
    "cross-chain", "privacy fintech", "ZK credit score"
  ],
  openGraph: {
    title: "Kosh — All your finance. One place. Zero exposure.",
    description:
      "Seven finance modules, one ZK identity, every chain. Send, earn, save, prove, spend, and govern — privately.",
    type: "website",
    url: "https://kosh.finance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosh — Unified Private Finance",
    description:
      "The world's first ZK-ROSCA. Private remittances. ZK payroll. Credit from your financial life — without revealing it.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
