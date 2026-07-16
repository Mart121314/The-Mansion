import { gaming } from "@/data/portfolio";
import Reveal from "./Reveal";
import TwitchIcon from "./icons/TwitchIcon";
import YouTubeIcon from "./icons/YouTubeIcon";

export default function GamingExperience() {
  return (
    <section id="gaming" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <p className="text-[11px] tracking-[0.15em] text-neutral-400">
        {gaming.eyebrow.toUpperCase()}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-light">{gaming.heading}</h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600">
        {gaming.paragraph}
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {gaming.channels.map((channel, index) => (
          <Reveal key={channel.platform} delay={index * 100}>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-sm border border-neutral-200 px-6 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-neutral-700">
                  <PlatformIcon platform={channel.platform} />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.15em] text-neutral-400">
                    {channel.platform.toUpperCase()}
                  </p>
                  <p className="text-base">{channel.name}</p>
                </div>
              </div>
              <p className="text-sm whitespace-nowrap text-neutral-500">
                {channel.stat}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PlatformIcon({ platform }: { platform: string }) {
  const common = "h-5 w-5";
  return platform === "YouTube" ? (
    <YouTubeIcon className={common} />
  ) : (
    <TwitchIcon className={common} />
  );
}
