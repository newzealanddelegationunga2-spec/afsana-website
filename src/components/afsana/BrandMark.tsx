export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/afsana-logo.png"
      alt="Afsana"
      className={`h-25 w-auto ${className}`}
    />
  );
}