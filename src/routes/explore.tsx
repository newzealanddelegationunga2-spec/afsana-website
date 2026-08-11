import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { worlds } from "../components/afsana/data";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Afsana — Five Artistic Worlds" },
      { name: "description", content: "The Stage, The Rhythm, The Movement, The Canvas and The Words — the five artistic worlds of Afsana." },
      { property: "og:title", content: "Explore Afsana — Five Artistic Worlds" },
      { property: "og:description", content: "Theatre, Music, Dance, Fine Arts and Literary Arts — reimagined as immersive worlds." },
    ],
    links: [{ rel: "canonical", href: "/explore" }],
  }),
  component: Explore,
});

function Explore() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Explore Afsana"
        title={<>Five artistic <span className="brand-gradient-text">worlds.</span></>}
        intro="Each world has its own vocabulary, its own venues and its own way of turning a story into art. Walk through them."
      />

      <div className="container-x pb-32">
        <div className="space-y-24 md:space-y-32">
          {worlds.map((w, idx) => {
            const flipped = idx % 2 === 1;
            return (
              <Reveal key={w.slug}>
                <div
                  className={`grid gap-10 md:grid-cols-2 md:items-center ${flipped ? "md:[direction:rtl]" : ""}`}
                >
                  <div className="md:[direction:ltr]">
                    <div
                      className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]"
                      style={{ background: `linear-gradient(135deg, ${w.hue}, #fff)` }}
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-70"
                        style={{ background: `radial-gradient(closest-side, ${w.tint}, transparent 70%)` }}
                      />
                      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden>
                        {idx === 0 && (
                          <>
                            <path d="M0,60 L400,60 L400,80 C200,120 200,120 0,80 Z" fill="#fff" opacity=".25" />
                            <path d="M0,60 L60,500 L340,500 L400,60 Z" fill="#fff" opacity=".08" />
                            <circle cx="200" cy="260" r="60" fill="#fff" opacity=".25" />
                          </>
                        )}
                        {idx === 1 && (
                          <g stroke="#fff" strokeWidth="4" fill="none" opacity=".7">
                            {Array.from({ length: 22 }).map((_, i) => {
                              const x = 20 + i * 18;
                              const h = 40 + Math.abs(Math.sin(i)) * 120;
                              return <line key={i} x1={x} y1={250 - h} x2={x} y2={250 + h} />;
                            })}
                          </g>
                        )}
                        {idx === 2 && (
                          <>
                            <path d="M50,400 C150,200 250,500 350,300" fill="none" stroke="#fff" strokeWidth="6" opacity=".7" />
                            <circle cx="120" cy="180" r="30" fill="#fff" opacity=".4" />
                            <circle cx="280" cy="360" r="24" fill="#fff" opacity=".5" />
                          </>
                        )}
                        {idx === 3 && (
                          <>
                            <rect x="60" y="80" width="120" height="160" rx="20" fill="#fff" opacity=".25" />
                            <circle cx="280" cy="180" r="70" fill="#fff" opacity=".25" />
                            <path d="M60,340 C160,300 240,420 360,340" stroke="#fff" strokeWidth="6" fill="none" opacity=".6" />
                          </>
                        )}
                        {idx === 4 && (
                          <>
                            <path d="M60,100 L340,100 M60,140 L300,140 M60,180 L340,180 M60,220 L280,220 M60,260 L340,260 M60,300 L260,300" stroke="#fff" strokeWidth="6" opacity=".5" strokeLinecap="round" />
                            <circle cx="330" cy="380" r="46" fill="#fff" opacity=".35" />
                          </>
                        )}
                      </svg>
                      <div className="absolute bottom-6 left-6 text-6xl">{w.emoji}</div>
                    </div>
                  </div>
                  <div className="md:[direction:ltr]">
                    <div className="text-xs uppercase tracking-[0.25em]" style={{ color: w.hue }}>
                      {String(idx + 1).padStart(2, "0")} · {w.label}
                    </div>
                    <h3 className="mt-3 font-display text-5xl leading-[1.02] text-[var(--royal)] md:text-6xl">
                      {w.name}
                    </h3>
                    <p className="mt-6 max-w-lg text-lg text-[var(--mute)]">{w.blurb}</p>
                    <ul className="mt-8 space-y-3 text-[var(--ink)]">
                      {(idx === 0 ? ["Swaranjali", "Battle Of The Bands", "Blue Notes Jazz"]
                        : idx === 1 ? ["Dance Championship", "Dance Workshop", "Hip Hop Dance Battle", "Traditional Dance Speaker"]
                        : idx === 2 ? ["Voices From The Past", "Sillhouette Workshop", "The Fourth Wall Competition"]
                        : idx === 3 ? ["Art Therapy Workshop", "Art Heist Competition", "Clay Modelling Workshop", "Immersive Art Galli"]
                        : ["Art Therapy Workshop", "Art Heist Competition", "Clay Modelling Workshop", "Immersive Art Galli"]).map((n) => (
                        <li key={n} className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: w.hue }} />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
