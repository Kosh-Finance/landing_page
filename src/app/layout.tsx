import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosh — The World's First Privacy-Preserving Savings Circle",
  description:
    "Kosh is the first ZK-ROSCA: a privacy-preserving savings circle built on Midnight Network. Contributions are anonymous. Payouts are enforced by smart contracts. Every completed circle builds credit — privately.",
  keywords: [
    "Kosh", "kosh.finance", "ZK-ROSCA", "savings circle", "chit fund", "tanda", "stokvel",
    "zero knowledge", "Midnight Network", "private savings", "ZK credit", "on-chain ROSCA",
    "privacy fintech", "Cardano", "ZK proofs"
  ],
  openGraph: {
    title: "Kosh — The World's First Privacy-Preserving Savings Circle",
    description:
      "500 million people save together in savings circles. None of them have privacy. Kosh changes that — the first ZK-ROSCA on any blockchain.",
    type: "website",
    url: "https://kosh.finance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosh — The World's First ZK-ROSCA",
    description:
      "Contributions anonymous. Payouts enforced by code. Credit built privately. The world's first privacy-preserving savings circle — on Midnight Network.",
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
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
