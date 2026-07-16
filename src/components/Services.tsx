import { myServices } from "@/data/portfolio";

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <h2 className="font-serif text-3xl font-light">{myServices.heading}</h2>

      <div className="mt-14 flex flex-col gap-10">
        {myServices.categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm tracking-[0.15em] text-neutral-400">
              {category.name.toUpperCase()}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
