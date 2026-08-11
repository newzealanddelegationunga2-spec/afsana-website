
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
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Cyan glow */}
        <div
          className="absolute -left-32 -top-20 h-[360px] w-[360px] rounded-full opacity-60 blur-3xl sm:-left-24 sm:h-[460px] sm:w-[460px] md:-left-16 md:-top-24 md:h-[520px] md:w-[520px]"
          style={{
            transform: `translate3d(0, ${y * 0.15}px, 0)`,
            background:
              "radial-gradient(closest-side, rgba(31,168,224,.55), transparent 70%)",
          }}
        />

        {/* Lime glow */}
        <div
          className="absolute -right-40 top-[38%] h-[380px] w-[380px] rounded-full opacity-50 blur-3xl sm:-right-32 sm:h-[460px] sm:w-[460px] md:-right-24 md:top-1/3 md:h-[560px] md:w-[560px]"
          style={{
            transform: `translate3d(0, ${y * -0.12}px, 0)`,
            background:
              "radial-gradient(closest-side, rgba(152,210,74,.5), transparent 70%)",
          }}
        />

        {/* Royal glow */}
        <div
          className="absolute -bottom-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-40 blur-3xl sm:h-[360px] sm:w-[360px] md:bottom-0 md:left-1/3 md:h-[420px] md:w-[420px] md:translate-x-0"
          style={{
            transform: `translate3d(${window.innerWidth < 768 ? "-50%" : "0"}, ${y * 0.08}px, 0)`,
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

          {/* Curtain waves */}
          <path
            d="M0,720 C240,640 480,820 720,720 C960,620 1200,800 1440,700 L1440,900 L0,900 Z"
            fill="url(#g1)"
            style={{
              transform: `translateY(${y * 0.05}px)`,
            }}
          />

          {/* Paint stroke */}
          <path
            d="M120,300 C300,180 520,420 760,300 C960,200 1180,420 1360,320"
            fill="none"
            stroke="url(#g2)"
            strokeWidth="0"
            strokeLinecap="round"
          />
        </svg>

        {/* =====================================================
            DECORATIVE STARS

            Mobile:
            - Fewer stars
            - Kept toward the edges
            - Smaller sizes
            - Never placed over the main text

            Tablet/Desktop:
            - More stars
            - Larger composition
            ===================================================== */}

        {/* Top-left star */}
        <span
          className="
            anim-float absolute
            left-[7%] top-[16%]
            h-3 w-3
            sm:left-[8%] sm:top-[18%] sm:h-3.5 sm:w-3.5
            md:left-[10%] md:top-[22%] md:h-4 md:w-4
          "
          style={{
            background: "var(--lime)",
            clipPath:
              "polygon(50% 0%,61% 35%,100% 50%,61% 65%,50% 100%,39% 65%,0 50%,39% 35%)",
          }}
        />

        {/* Top-right star */}
        <span
          className="
            anim-drift absolute
            right-[7%] top-[14%]
            h-3 w-3
            sm:right-[10%] sm:top-[20%] sm:h-4 sm:w-4
            md:right-[18%] md:top-[30%] md:h-5 md:w-5
          "
          style={{
            background: "var(--cyan-brand)",
            clipPath:
              "polygon(50% 0%,61% 35%,100% 50%,61% 65%,50% 100%,39% 65%,0 50%,39% 35%)",
          }}
        />

        {/* Middle-left star — hidden on very small screens */}
        <span
          className="
            anim-float absolute hidden
            left-[24%] top-[48%]
            sm:block sm:left-[16%] sm:top-[52%] sm:h-3 sm:w-3
            md:left-[40%] md:top-[22%] md:h-4 md:w-4
          "
          style={{
            background: "var(--lime)",
            clipPath:
              "polygon(50% 0%,61% 35%,100% 50%,61% 65%,50% 100%,39% 65%,0 50%,39% 35%)",
          }}
        />

        {/* Middle-right star */}
        <span
          className="
            anim-drift absolute
            right-[18%] top-[48%]
            h-3 w-3
            sm:right-[24%] sm:top-[44%] sm:h-4 sm:w-4
            md:right-[40%] md:top-[22%] md:h-5 md:w-5
          "
          style={{
            background: "var(--cyan-brand)",
            clipPath:
              "polygon(50% 0%,61% 35%,100% 50%,61% 65%,50% 100%,39% 65%,0 50%,39% 35%)",
          }}
        />

        {/* Bottom-right star */}
        <span
          className="
            anim-float absolute
            right-[8%] bottom-[22%]
            h-3 w-3
            sm:right-[12%] sm:bottom-[26%] sm:h-3.5 sm:w-3.5
            md:right-[12%] md:bottom-[32%] md:h-3.5 md:w-3.5
          "
          style={{
            background: "var(--royal)",
            clipPath:
              "polygon(50% 0%,61% 35%,100% 50%,61% 65%,50% 100%,39% 65%,0 50%,39% 35%)",
          }}
        />

        {/* Bottom-middle star — hidden on mobile */}
        <span
          className="
            anim-float absolute hidden
            md:block md:right-[28%] md:bottom-[46%] md:h-3.5 md:w-3.5
          "
          style={{
            background: "var(--royal)",
            clipPath:
              "polygon(50% 0%,61% 35%,100% 50%,61% 65%,50% 100%,39% 65%,0 50%,39% 35%)",
          }}
        />
      </div>

      {/* Main hero content */}
      <div className="container-x relative z-10 pt-32 pb-24 sm:pt-36 md:pt-32">
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
              src="/afsana-banner.png"
              alt="Afsana"
              className="h-auto w-full max-w-[1000px]"
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
            Three days. Five artistic worlds. Hundreds of student voices from
            schools across the country — coming together to turn stories into
            stage, sound, movement, colour and language.
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
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
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

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--royal)]/70">
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em]">
          <span>Scroll</span>
          <MoveDown className="anim-float" size={16} />
        </div>
      </div>
    </section>
  );
}

