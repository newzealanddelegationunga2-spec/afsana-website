import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Afsana" },
      { name: "description", content: "A visual journey through past editions of Afsana — performances, workshops and behind-the-scenes moments." },
      { property: "og:title", content: "Afsana Gallery" },
      { property: "og:description", content: "Photographs from previous editions of Afsana." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

// Placeholder tiles rendered with gradients (no external images).
type Tile = { id: number; ratio: string; hue: string; caption: string };
const tiles: Tile[] = Array.from({ length: 18 }).map((_, i) => {
  const ratios = ["aspect-[4/5]", "aspect-[3/4]", "aspect-square", "aspect-[4/3]", "aspect-[3/2]"];
  const hues = [
    "linear-gradient(135deg, #0E2B6F, #1FA8E0)",
    "linear-gradient(160deg, #1FA8E0, #98D24A)",
    "linear-gradient(135deg, #98D24A, #0E2B6F)",
    "linear-gradient(200deg, #0E2B6F, #98D24A)",
    "linear-gradient(120deg, #1FA8E0, #0E2B6F)",
  ];
  const captions = [
    "Opening Ensemble", "Battle of the Bands", "Slam Poetry Finals",
    "Live Painting", "Contemporary Choreo", "Debate Semis",
    "Classical Solo", "Installation Build", "Workshop — Voice",
    "Amphitheatre Night", "Courtyard Set", "Awards Evening",
    "Behind the Scenes", "Design Studio", "Green Room",
    "Flagship Performance", "Closing Song", "Festival Crew",
  ];
  return {
    id: i,
    ratio: ratios[i % ratios.length],
    hue: hues[i % hues.length],
    caption: captions[i],
  };
});

const featured = tiles.slice(0, 5);

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setSlide((s) => (s + 1) % featured.length), 4500);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    if (active === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % tiles.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? a : (a - 1 + tiles.length) % tiles.length));
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [active]);

  return (
    <div className="pt-24">
      <Section
        eyebrow="Gallery"
        title={<>A festival, <span className="brand-gradient-text">in pictures.</span></>}
        intro="A visual journey through past editions of Afsana. Click any image to open the lightbox."
      />

      <div className="container-x pb-16">
        {/* Featured carousel */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {featured.map((t) => (
                <div key={t.id} className="relative aspect-[16/8] w-full shrink-0" style={{ background: t.hue }}>
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="text-xs uppercase tracking-[0.25em] text-white/70">Featured</div>
                    <div className="mt-1 font-display text-3xl md:text-5xl">{t.caption}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 right-6 flex gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all ${slide === i ? "w-8 bg-white" : "w-2 bg-white/50"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-x pb-32">
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 [column-fill:_balance]">
          {tiles.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`mb-4 block w-full overflow-hidden rounded-2xl ${t.ratio} group relative`}
              style={{ background: t.hue }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 translate-y-2 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {t.caption}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X />
          </button>
          <button
            className="absolute left-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? a : (a - 1 + tiles.length) % tiles.length)); }}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? a : (a + 1) % tiles.length)); }}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
          <div
            className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-3xl"
            style={{ background: tiles[active].hue }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-xs uppercase tracking-[0.25em] text-white/70">Afsana</div>
              <div className="mt-1 font-display text-3xl">{tiles[active].caption}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
