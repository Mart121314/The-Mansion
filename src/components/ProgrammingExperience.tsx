import Image from "next/image";
import { github, programming } from "@/data/portfolio";
import GitHubIcon from "./icons/GitHubIcon";

function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

export default function ProgrammingExperience() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <p className="text-[11px] tracking-[0.15em] text-neutral-400">
        {programming.eyebrow.toUpperCase()}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-light">
        {programming.heading}
      </h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600">
        {programming.paragraph}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {programming.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="mt-16 text-sm tracking-[0.15em] text-neutral-400">
        NETTSIDER
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
        {programming.websites.map((site) => (
          <a
            key={site.title}
            href={site.href}
            {...externalLinkProps(site.href)}
            className="group flex flex-col gap-4"
          >
            {site.image ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src={site.image}
                  alt={site.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover object-top transition-transform group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] w-full rounded-sm bg-accent transition-colors group-hover:bg-accent-soft" />
            )}
            <div>
              <p className="text-lg">{site.title}</p>
              <p className="mt-1 text-sm text-neutral-500">{site.description}</p>
            </div>
          </a>
        ))}
      </div>

      <h3 className="mt-16 text-sm tracking-[0.15em] text-neutral-400">
        SPILL
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
        {programming.games.map((game) => (
          <a
            key={game.title}
            href={game.href}
            {...externalLinkProps(game.href)}
            className="group flex flex-col gap-4"
          >
            {game.image ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] w-full rounded-sm bg-accent transition-colors group-hover:bg-accent-soft" />
            )}
            <div>
              <p className="text-lg">{game.title}</p>
              <p className="mt-1 text-sm text-neutral-500">{game.role}</p>
            </div>
          </a>
        ))}

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-4"
        >
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-sm border border-neutral-200 transition-colors group-hover:border-neutral-400">
            <GitHubIcon className="h-16 w-16 text-neutral-800" />
          </div>
          <div>
            <p className="text-lg">GitHub</p>
            <p className="mt-1 text-sm text-neutral-500">Se all kildekode</p>
          </div>
        </a>
      </div>
    </section>
  );
}
