import { advantages } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Advantage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <h2 className="font-serif text-3xl">Mine Ferdigheter</h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((skill, index) => (
          <Reveal key={skill.label} delay={index * 80}>
            <div className="flex flex-col gap-3 rounded-sm border border-neutral-200 p-6 transition-colors hover:border-neutral-400">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base font-medium">{skill.label}</p>
                <p className="text-xs whitespace-nowrap text-neutral-400">
                  {skill.year}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">
                {skill.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
