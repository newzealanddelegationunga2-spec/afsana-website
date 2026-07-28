import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1600) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { ref, n };
}

function Stat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { ref, n } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl text-[var(--royal)] tabular-nums md:text-7xl">
        {n}
        <span className="text-[var(--cyan-brand)]">{suffix}</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--mute)]">{label}</div>
    </div>
  );
}

export function Counters() {
  return (
    <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
      <Stat value={1200} label="Participants" suffix="+" />
      <Stat value={45} label="Partner Schools" />
      <Stat value={60} label="Performances" />
      <Stat value={3} label="Days of Art" />
    </div>
  );
}
