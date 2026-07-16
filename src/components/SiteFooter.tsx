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
        <button
          type="button"
          onClick={handleCopyEmail}
          aria-label="Kopier e-postadresse"
          className="max-w-full cursor-pointer font-serif text-xl leading-snug break-words transition-colors hover:text-neutral-600 sm:text-3xl md:text-4xl"
        >
          {contact.email}
        </button>

        <div className="mt-6 flex gap-6 text-sm text-neutral-500">
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
