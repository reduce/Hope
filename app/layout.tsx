import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hope AI — Good news, found and shared",
  description: "An AI agent that scans X for genuine good news — breakthroughs, wins, progress — and shares it so you don't have to dig. Anti-doomscroll, powered by AI.",
  openGraph: {
    title: "Hope AI — Good news, found and shared",
    description: "An AI agent that scans X for genuine good news and shares it with you. Follow Hope and feel a little better.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hope AI — Good news, found and shared",
    description: "An AI agent that scans X for genuine good news and shares it with you.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
