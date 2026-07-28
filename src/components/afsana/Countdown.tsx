import { useEffect, useState } from "react";

// Placeholder festival date - late in this academic year
const TARGET = new Date("2026-08-20T09:00:00+05:30").getTime();

function diff() {
  const now = Date.now();
  const d = Math.max(0, TARGET - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);

  const items: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6">
      {items.map(([label, v]) => (
        <div
          key={label}
          className="card-soft group relative overflow-hidden px-3 py-6 text-center md:px-6 md:py-8"
        >
          <div
            className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: "radial-gradient(closest-side, rgba(31,168,224,.15), transparent)" }}
          />
          <div className="font-display text-4xl font-semibold text-[var(--royal)] tabular-nums md:text-6xl">
            {String(v).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--mute)] md:text-xs">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
