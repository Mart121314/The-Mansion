import Image from "next/image";
import { github, programming } from "@/data/portfolio";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import GitHubIcon from "./icons/GitHubIcon";
import PlayIcon from "./icons/PlayIcon";
import Reveal from "./Reveal";

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
      <h2 className="mt-2 font-serif text-3xl">
        {programming.heading}
      </h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600">
        {programming.paragraph}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {programming.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 transition-colors hover:border-neutral-400"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="mt-16 text-sm tracking-[0.15em] text-neutral-400">
        NETTSIDER
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
        {programming.websites.map((site, index) => (
          <Reveal key={site.title} delay={index * 80}>
            <a
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
                    className="object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <ExternalLinkIcon className="h-4 w-4 text-neutral-900" />
                  </span>
                </div>
              ) : (
                <div className="aspect-[4/3] w-full rounded-sm bg-accent transition-colors group-hover:bg-accent-soft" />
              )}
              <div>
                <p className="text-lg transition-colors group-hover:text-neutral-600">
                  {site.title}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{site.description}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-16 text-sm tracking-[0.15em] text-neutral-400">
        SPILL
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
        {programming.games.map((game, index) => (
          <Reveal key={game.title} delay={index * 80}>
            <a
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
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/20">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform duration-300 group-hover:scale-110">
                      <PlayIcon className="h-5 w-5 translate-x-0.5 text-neutral-900" />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/3] w-full rounded-sm bg-accent transition-colors group-hover:bg-accent-soft" />
              )}
              <div>
                <p className="text-lg transition-colors group-hover:text-neutral-600">
                  {game.title}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{game.role}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-16 text-sm tracking-[0.15em] text-neutral-400">
        KILDEKODE
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
        <Reveal>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4"
          >
            <div className="relative flex aspect-[4/3] w-full items-center justify-center rounded-sm border border-neutral-200 bg-accent-soft/60 transition-all duration-300 group-hover:border-neutral-400 group-hover:shadow-sm">
              <GitHubIcon className="h-16 w-16 text-neutral-800 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm transition-transform duration-300 group-hover:scale-110">
                <ExternalLinkIcon className="h-4 w-4 text-neutral-900" />
              </span>
            </div>
            <div>
              <p className="text-lg">GitHub</p>
              <p className="mt-1 text-sm text-neutral-500">Se all kildekode</p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
