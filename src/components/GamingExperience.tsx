import { gaming } from "@/data/portfolio";

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
        {gaming.channels.map((channel) => (
          <a
            key={channel.platform}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-sm border border-neutral-200 px-6 py-6 transition-colors hover:border-neutral-400"
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
        ))}
      </div>
    </section>
  );
}

function PlatformIcon({ platform }: { platform: string }) {
  const common = "h-5 w-5";
  if (platform === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor">
        <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor">
      <path d="M4 3 3 6.5V18h4.5V21l3-3H14l5-5V3Zm14 9-3 3h-3l-2.5 2.5V15H6V5h12Z" />
      <path d="M15.5 8h1.7v4h-1.7Zm-4 0h1.7v4h-1.7Z" />
    </svg>
  );
}
