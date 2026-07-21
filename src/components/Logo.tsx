export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center gap-3 ${className}`}>
      <span className="font-serif text-4xl leading-none sm:text-6xl">Eikefet</span>
      <span className="flex items-center gap-3 font-mono text-xs tracking-[0.35em] text-accent sm:text-sm">
        <span aria-hidden="true">&lt;/&gt;</span>
        <span>IT-UTVIKLING</span>
        <span aria-hidden="true">&lt;/&gt;</span>
      </span>
    </span>
  );
}
