import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { identity } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

// Deployed origin — must match the live Vercel domain exactly. metadataBase
// resolves every relative URL in `metadata` (canonical, openGraph.images,
// the opengraph-image route, etc.) against this; pointing it at a domain
// that isn't actually serving the site is what breaks social-link previews
// (LinkedIn/Twitter fetch an og:image URL that resolves to nothing).
const SITE_URL = "https://skandagn.vercel.app";
const CANONICAL_URL = `${SITE_URL}/`;

const title = "Skanda Gonur Nagaraj | Software Engineer";
const description = "Software Engineer | AI/ML | Agentic AI | LLMs | RAG | Distributed Systems";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${identity.name}`,
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
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: identity.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
