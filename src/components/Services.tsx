"use client";

import { track } from "@vercel/analytics";
import { myServices } from "@/data/portfolio";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import Reveal from "./Reveal";

function goToContact(source: string) {
  track("Kontakt meg klikket", { source });
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <div className="flex flex-col items-start gap-3">
          <button
            type="button"
            onClick={() => goToContact("Mine tjenester")}
            className="font-serif text-3xl transition-colors hover:text-neutral-600"
          >
            {myServices.heading}
          </button>
          <a
            href={myServices.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("Bestill tjenester klikket")}
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Bestill mine tjenester her
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>

      <div className="mt-14 flex flex-col gap-10">
        {myServices.categories.map((category, index) => (
          <Reveal key={category.name} delay={index * 100}>
            <div>
              <h3 className="text-sm tracking-[0.15em] text-neutral-400">
                {category.name.toUpperCase()}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => goToContact(item)}
                    className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-900"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
