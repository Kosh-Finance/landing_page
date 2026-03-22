import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosh Finance — The World's First ZK-ROSCA",
  description:
    "Privacy-preserving savings circles built on Midnight Network. Contributions are anonymous. Payouts enforced by smart contracts. Credit built privately.",
  keywords: [
    "Kosh", "kosh.finance", "ZK-ROSCA", "savings circle", "chit fund", "tanda", "stokvel",
    "zero knowledge", "Midnight Network", "private savings", "ZK credit", "on-chain ROSCA",
    "privacy fintech", "DeFi"
  ],
  openGraph: {
    title: "Kosh Finance — The World's First ZK-ROSCA",
    description:
      "500 million people save together in savings circles. None of them have privacy. Kosh changes that.",
    type: "website",
    url: "https://kosh.finance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosh Finance — ZK-ROSCA",
    description:
      "Contributions anonymous. Payouts enforced by code. Credit built privately.",
  },
};

export const viewport: Viewport = {
  themeColor: "#080B0F",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
