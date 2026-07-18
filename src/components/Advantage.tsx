"use client";

import { track } from "@vercel/analytics";
import { advantages } from "@/data/portfolio";
import Reveal from "./Reveal";

function goToTarget(id: string) {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Advantage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <h2 className="font-serif text-3xl">Mine Ferdigheter</h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((skill, index) => (
          <Reveal key={skill.label} delay={index * 80}>
            <button
              type="button"
              onClick={() => {
                track("Ferdighet klikket", { skill: skill.label });
                goToTarget(skill.target);
              }}
              className="flex w-full flex-col gap-3 rounded-sm border border-neutral-200 bg-accent-soft/60 p-6 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base font-medium">{skill.label}</p>
                <p className="text-xs whitespace-nowrap text-neutral-400">
                  {skill.year}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">
                {skill.description}
              </p>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
