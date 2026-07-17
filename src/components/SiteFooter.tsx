"use client";

import { useState } from "react";
import { contact, profile, socials } from "@/data/portfolio";

export default function SiteFooter() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — nothing to fall back to gracefully here.
    }
  }

  return (
    <footer id="contact" className="border-t border-neutral-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-10">
        <p className="text-[11px] tracking-[0.15em] text-neutral-400">
          {copied ? "E-POST KOPIERT" : "LA OSS JOBBE SAMMEN"}
        </p>

        <h2 className="max-w-xl font-serif text-2xl sm:text-3xl">
          {contact.heading}
        </h2>
        <p className="text-sm text-neutral-600">{contact.subtext}</p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-2 inline-flex items-center rounded-full bg-neutral-900 px-8 py-3 text-sm text-white transition-colors hover:bg-neutral-700"
        >
          {contact.cta}
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          aria-label="Kopier e-postadresse"
          className="mt-6 max-w-full cursor-pointer text-sm break-words text-neutral-500 transition-colors hover:text-neutral-900"
        >
          {contact.email}
        </button>

        <div className="mt-4 flex gap-6 text-sm text-neutral-500">
          {socials
            .filter((social) => social.label !== "LinkedIn")
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-neutral-900"
              >
                {social.label}
              </a>
            ))}
        </div>

        <p className="mt-10 text-xs text-neutral-400">
          © {new Date().getFullYear()} {profile.name}. Alle rettigheter forbeholdt.
        </p>
      </div>
    </footer>
  );
}
