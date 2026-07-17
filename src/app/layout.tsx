import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { contact, github, linkedin, profile } from "@/data/portfolio";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = "https://martineikefet.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Portefølje`,
  description: "Portefølje for frontend-utvikling og konkurranse-e-sport",
  keywords: [
    "Martin Strand Eikefet",
    "Frontend-utvikler",
    "Portefølje",
    "E-sport",
    "World of Warcraft",
    "Web utvikling",
    "Spillutvikling",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${profile.name} — Portefølje`,
    description: "Portefølje for frontend-utvikling og konkurranse-e-sport",
    url: siteUrl,
    siteName: `${profile.name} — Portefølje`,
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Portefølje`,
    description: "Portefølje for frontend-utvikling og konkurranse-e-sport",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  email: `mailto:${contact.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kristiansand",
    addressCountry: "NO",
  },
  sameAs: [
    github,
    linkedin,
    "https://www.youtube.com/@VengefulGamingHD",
    "https://www.twitch.tv/martinirltv",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
