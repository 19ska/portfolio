import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CursorTrail } from "@/components/cursor-trail";
import { ScrollProgress } from "@/components/fx/scroll-progress";
import { Starfield } from "@/components/fx/starfield";
import { identity } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://skandagn.dev";
const description =
  "Skanda Gonur Nagaraj — Software Engineer & AI/ML Engineer in San Jose. Building production AI systems from model to infrastructure: RAG, NLP, and backend platforms at scale.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${identity.name} — ${identity.role}`,
    template: `%s — ${identity.name}`,
  },
  description,
  keywords: [
    "Skanda Gonur Nagaraj",
    "Software Engineer",
    "AI/ML Engineer",
    "Machine Learning",
    "NLP",
    "RAG",
    "LLM infrastructure",
    "San Jose",
  ],
  authors: [{ name: identity.name, url: identity.github }],
  creator: identity.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: identity.name,
    title: `${identity.name} — ${identity.role}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.name} — ${identity.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#060a14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">
        <Starfield />
        <ScrollProgress />
        {children}
        <CursorTrail />
      </body>
    </html>
  );
}
