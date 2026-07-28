export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-[var(--royal)]">
        <span className="absolute inset-1 rounded-lg bg-[var(--cyan-brand)] opacity-70" />
        <span className="absolute h-2 w-2 rounded-full bg-[var(--lime)]" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-[var(--royal)]">
        Afsana
      </span>
    </span>
  );
}
