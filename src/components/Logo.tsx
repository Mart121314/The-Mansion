export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center gap-4 ${className}`}>
      <svg viewBox="0 0 80 80" className="h-20 w-20 sm:h-24 sm:w-24" aria-hidden="true">
        <g className="fill-neutral-300">
          <rect x="26" y="0" width="4" height="8" rx="1" />
          <rect x="50" y="0" width="4" height="8" rx="1" />
          <rect x="26" y="72" width="4" height="8" rx="1" />
          <rect x="50" y="72" width="4" height="8" rx="1" />
          <rect x="0" y="26" width="8" height="4" rx="1" />
          <rect x="0" y="50" width="8" height="4" rx="1" />
          <rect x="72" y="26" width="8" height="4" rx="1" />
          <rect x="72" y="50" width="8" height="4" rx="1" />
        </g>

        <rect
          x="8"
          y="8"
          width="64"
          height="64"
          rx="18"
          className="fill-accent-soft stroke-accent"
          strokeWidth="2"
        />

        <g className="fill-accent">
          <rect x="24" y="24" width="8" height="32" rx="2" />
          <rect x="24" y="24" width="24" height="8" rx="2" />
          <rect x="24" y="36" width="18" height="8" rx="2" />
          <rect x="24" y="48" width="24" height="8" rx="2" />
        </g>
      </svg>

      <span className="flex flex-col items-center gap-1">
        <span className="font-serif text-3xl tracking-wide sm:text-4xl">Eikefet</span>
        <span className="text-xs font-medium tracking-[0.25em] text-accent sm:text-sm">
          IT-UTVIKLING
        </span>
      </span>
    </span>
  );
}
