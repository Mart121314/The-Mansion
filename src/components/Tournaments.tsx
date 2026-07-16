import { tournaments } from "@/data/portfolio";
import Reveal from "./Reveal";
import YouTubeIcon from "./icons/YouTubeIcon";

export default function Tournaments() {
  return (
    <section id="tournaments" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <p className="text-[11px] tracking-[0.15em] text-neutral-400">
        {tournaments.eyebrow.toUpperCase()}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-light">{tournaments.heading}</h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600">
        {tournaments.paragraph}
      </p>

      <p className="mt-6 text-[11px] tracking-[0.15em] text-neutral-400">
        RELEVANS FOR ARBEIDSLIVET
      </p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-600">
        {tournaments.relevance}
      </p>

      <h3 className="mt-12 font-serif text-2xl font-light">
        {tournaments.captaincy.heading}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
        {tournaments.captaincy.paragraph}
      </p>
      <p className="mt-4 text-[11px] tracking-[0.15em] text-neutral-400">
        RELEVANS FOR ARBEIDSLIVET
      </p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-600">
        {tournaments.captaincy.relevance}
      </p>

      <h3 className="mt-16 text-sm tracking-[0.15em] text-neutral-400">
        TURNERINGER DELTATT I
      </h3>
      <ul className="mt-6 flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
        {tournaments.history.map((entry, index) => (
          <Reveal key={entry.name} delay={Math.min(index, 6) * 40}>
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 py-5 transition-colors hover:bg-accent-soft sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <div>
                <p className="text-base transition-colors group-hover:text-neutral-600">
                  {entry.name}
                </p>
                <p className="text-sm text-neutral-500">Spilte for {entry.team}</p>
              </div>
              <p className="text-sm whitespace-nowrap text-neutral-500">
                {entry.placement}
              </p>
            </a>
          </Reveal>
        ))}
      </ul>

      <h3 className="mt-16 text-sm tracking-[0.15em] text-neutral-400">
        HØYDEPUNKTER
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {tournaments.videos.map((video, index) => (
          <Reveal key={video.href} delay={Math.min(index, 6) * 60}>
            <a
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-sm border border-neutral-200 px-6 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-neutral-700">
                  <YouTubeIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.15em] text-neutral-400">
                    YOUTUBE
                  </p>
                  <p className="text-base">{video.name}</p>
                </div>
              </div>
              <p className="text-sm whitespace-nowrap text-neutral-500">
                {video.stat}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
