import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, MoveDown } from "lucide-react";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Parallax abstract shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-16 h-[520px] w-[520px] rounded-full opacity-70 blur-3xl"
          style={{
            transform: `translate3d(0, ${y * 0.15}px, 0)`,
            background:
              "radial-gradient(closest-side, rgba(31,168,224,.55), transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-24 h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
          style={{
            transform: `translate3d(0, ${y * -0.12}px, 0)`,
            background:
              "radial-gradient(closest-side, rgba(152,210,74,.5), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
          style={{
            transform: `translate3d(0, ${y * 0.08}px, 0)`,
            background:
              "radial-gradient(closest-side, rgba(14,43,111,.35), transparent 70%)",
          }}
        />

        {/* SVG art strokes */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0E2B6F" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1FA8E0" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#98D24A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1FA8E0" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* curtain waves */}
          <path
            d="M0,720 C240,640 480,820 720,720 C960,620 1200,800 1440,700 L1440,900 L0,900 Z"
            fill="url(#g1)"
            style={{ transform: `translateY(${y * 0.05}px)` }}
          />
          {/* paint stroke */}
          <path
            d="M120,300 C300,180 520,420 760,300 C960,200 1180,420 1360,320"
            fill="none"
            stroke="url(#g2)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* sound wave */}
          <g stroke="#0E2B6F" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round">
            {Array.from({ length: 34 }).map((_, i) => {
              const x = 60 + i * 10;
              const h = 20 + Math.abs(Math.sin(i * 0.6)) * 60;
              return <line key={i} x1={x} y1={520 - h} x2={x} y2={520 + h} />;
            })}
          </g>
        </svg>

        {/* floating dots */}
        <span className="anim-float absolute left-[10%] top-[22%] h-3 w-3 rounded-full bg-[var(--lime)]" />
        <span className="anim-drift absolute right-[18%] top-[30%] h-4 w-4 rounded-full bg-[var(--cyan-brand)]" />
        <span className="anim-float absolute right-[28%] bottom-[22%] h-2.5 w-2.5 rounded-full bg-[var(--royal)]" />
      </div>

      <div className="container-x pt-32 pb-24">
        <div className="max-w-4xl">
          <span className="eyebrow anim-reveal">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />
            Shiv Nadar School, Gurgaon · Presents
          </span>
          <div
            className="anim-reveal mt-6"
            style={{ animationDelay: "80ms" }}
          >
            <img 
              src="/afsana-logo.png" 
              alt="Afsana" 
              className="h-auto w-full max-w-[760px]"
            />
          </div>
          <p
            className="anim-reveal mt-6 max-w-2xl font-display text-2xl italic text-[var(--ink)] md:text-3xl"
            style={{ animationDelay: "180ms" }}
          >
            Where Stories Become Art.
          </p>
          <p
            className="anim-reveal mt-4 max-w-2xl text-base text-[var(--mute)] md:text-lg"
            style={{ animationDelay: "260ms" }}
          >
            Three days. Five artistic worlds. Hundreds of student voices from schools across
            the country — coming together to turn stories into stage, sound, movement,
            colour and language.
          </p>

          <div
            className="anim-reveal mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "340ms" }}
          >
            <Link
              to="/explore"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-6 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
            >
              Explore Festival
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--royal)]/20 bg-white/70 px-6 py-3.5 text-sm font-medium text-[var(--royal)] backdrop-blur transition-colors hover:bg-white"
            >
              View Timeline
            </Link>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--royal)]/70">
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em]">
          <span>Scroll</span>
          <MoveDown className="anim-float" size={16} />
        </div>
      </div>
    </section>
  );
}
