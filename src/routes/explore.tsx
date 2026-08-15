import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { worlds } from "../components/afsana/data";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Afsana — Four Artistic Worlds" },
      {
        name: "description",
        content:
          "The Stage, The Rhythm, The Movement, The Canvas and The Words — the five artistic worlds of Afsana.",
      },
      {
        property: "og:title",
        content: "Explore Afsana — Four Artistic Worlds",
      },
      {
        property: "og:description",
        content:
          "Theatre, Music, Dance, Fine Arts and Literary Arts — reimagined as immersive worlds.",
      },
    ],
    links: [{ rel: "canonical", href: "/explore" }],
  }),
  component: Explore,
});

/*
 * Images are loaded from Unsplash's source service.
 * The query determines the visual theme for each world.
 */
const worldImages: Record<string, string> = {
  rhapsody:
    "/DSC_5854.JPG",

  unbound:
    "https://images.unsplash.com/photo-1621976360623-004223992275?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  kalateet:
    "https://images.unsplash.com/photo-1576724196706-3f23f51ea351?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  art:
    "/truck.jpg",

  words:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
};

function Explore() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Explore Afsana"
        title={
          <>
            Four artistic{" "}
            <span className="brand-gradient-text">worlds.</span>
          </>
        }
        intro="Each world has its own vocabulary, its own venues and its own way of turning a story into art. Walk through them."
      />

      <div className="container-x pb-32">
        <div className="space-y-24 md:space-y-32">
          {worlds.map((w, idx) => {
            const flipped = idx % 2 === 1;
            const image = worldImages[w.slug];

            return (
              <Reveal key={w.slug}>
                <div
                  className={`grid gap-10 md:grid-cols-2 md:items-center ${
                    flipped ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div className="md:[direction:ltr]">
                    <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[var(--muted)] shadow-[var(--shadow-soft)]">
                      <img
                        src={image}
                        alt={`${w.name} — ${w.label}`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />

                      {/* Subtle cinematic overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

                      {/* World number */}
                      <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white backdrop-blur-md">
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      {/* Emoji */}
                      <div className="absolute bottom-6 left-6 text-5xl drop-shadow-lg md:text-6xl">
                        {w.emoji}
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="md:[direction:ltr]">
                    <div
                      className="text-xs uppercase tracking-[0.25em]"
                      style={{ color: w.hue }}
                    >
                      {String(idx + 1).padStart(2, "0")} · {w.label}
                    </div>

                    <h3 className="mt-3 font-display text-5xl leading-[1.02] text-[var(--royal)] md:text-6xl">
                      {w.name}
                    </h3>

                    <p className="mt-6 max-w-lg text-lg text-[var(--mute)]">
                      {w.blurb}
                    </p>

                    <ul className="mt-8 space-y-3 text-[var(--ink)]">
                      {(
                        idx === 0
                          ? [
                              "Swaranjali",
                              "Rhapsody",
                              "The Journey of Jazz in Delhi",
                            ]
                          : idx === 1
                            ? [
                                "Dance Championship",
                                "Hip Hop 101",
                                "Tradition in Motion",
                              ]
                            : idx === 2
                              ? [
                                  "Archives",
                                  "Silencio",
                                  "The Fourth Wall",
                                ]
                              : idx === 3
                                ? [
                                    "Negative Space",
                                    "Art Heist",
                                    "Mitti Studio",
                                    "Step Inside",
                                  ]
                                : [
                                    "Slam Poetry",
                                    "Take One",
                                    "Spark to Screen",
                                  ]
                      ).map((n) => (
                        <li
                          key={n}
                          className="flex items-center gap-3"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: w.hue }}
                          />
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