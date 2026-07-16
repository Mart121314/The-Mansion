import { education, experience } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="border-t border-neutral-100 bg-accent-soft">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
        <h2 className="font-serif text-3xl">Utdanning &amp; Erfaring</h2>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2">
          <Timeline items={education} />
          <Timeline items={experience} />
        </div>
      </div>
    </section>
  );
}

function Timeline({
  items,
}: {
  items: { year: string; title: string; place: string; note?: string }[];
}) {
  return (
    <ul className="flex flex-col gap-8">
      {items.map((item) => (
        <li key={item.title} className="flex flex-col gap-1">
          <span className="text-[11px] tracking-[0.15em] text-neutral-400">
            {item.year}
          </span>
          <span className="text-base">{item.title}</span>
          <span className="text-sm text-neutral-500">{item.place}</span>
          {item.note && (
            <span className="mt-1 text-sm text-neutral-500 italic">
              {item.note}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
