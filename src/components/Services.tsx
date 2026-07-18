"use client";

import { track } from "@vercel/analytics";
import { contact, myServices } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <a
          href={contact.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("Kontakt meg klikket", { source: "Mine tjenester" })}
          className="inline-block font-serif text-3xl transition-colors hover:text-neutral-600"
        >
          {myServices.heading}
        </a>
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
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 transition-colors hover:border-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
