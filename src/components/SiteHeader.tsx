"use client";

import { useState } from "react";
import { nav, profile, socials } from "@/data/portfolio";
import GitHubIcon from "./icons/GitHubIcon";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-10">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          aria-expanded={open}
          className="flex h-6 w-6 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-5 bg-neutral-700 transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-neutral-700 transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>

        <nav className="hidden gap-8 text-sm tracking-wide text-neutral-600 sm:flex">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-neutral-900">
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <a href="#top" className="flex flex-col items-center gap-1">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 font-serif text-xs">
            {profile.initials}
          </span>
          <span className="text-[10px] tracking-[0.2em] text-neutral-500">
            {profile.name.toUpperCase()}
          </span>
        </a>

        <div className="flex gap-5 text-neutral-500">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="transition-colors hover:text-neutral-900"
            >
              <SocialIcon label={social.label} />
            </a>
          ))}
        </div>
      </div>

      <nav
        className={`grid text-center text-sm tracking-wide text-neutral-600 transition-all duration-300 ease-out sm:hidden ${
          open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 overflow-hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-1 hover:text-neutral-900"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function SocialIcon({ label }: { label: string }) {
  const common = "h-4 w-4";
  switch (label) {
    case "Twitter":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
        </svg>
      );
    case "GitHub":
      return <GitHubIcon className={common} />;
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5H16.5V4.2C16.2 4.1 15.2 4 14 4c-2.4 0-4 1.5-4 4.1V10.5H7.5v3H10V21h3.5Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
