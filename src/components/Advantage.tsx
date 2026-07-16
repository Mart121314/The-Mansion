import { advantages } from "@/data/portfolio";

export default function Advantage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <h2 className="font-serif text-3xl font-light">Mine Ferdigheter</h2>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((skill) => (
          <div
            key={skill.label}
            className="flex flex-col gap-3 rounded-sm border border-neutral-200 p-6"
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
          </div>
        ))}
      </div>
    </section>
  );
}
