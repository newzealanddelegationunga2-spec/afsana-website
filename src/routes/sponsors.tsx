import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { sponsorTiers } from "../components/afsana/data";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors & Partners — Afsana" },
      { name: "description", content: "The organisations that make Afsana possible — presenting partners, category partners and community supporters." },
      { property: "og:title", content: "Afsana Sponsors & Partners" },
      { property: "og:description", content: "Presenting, category and community partners of Afsana." },
    ],
    links: [{ rel: "canonical", href: "/sponsors" }],
  }),
  component: Sponsors,
});

function Sponsors() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Sponsors & Partners"
        title={<>The ones who make it <span className="brand-gradient-text">possible.</span></>}
        intro="From lights and sound to workshops and hospitality — Afsana is built with our partners."
      />
      <div className="container-x pb-16">
        <div className="space-y-14">
          {sponsorTiers.map((t) => (
            <Reveal key={t.tier}>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-3xl text-[var(--royal)]">{t.tier}</h3>
                  <span className="text-sm uppercase tracking-[0.2em] text-[var(--mute)]">{t.note}</span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {t.items.map((n) => (
                    <div
                      key={n}
                      className="group card-soft flex aspect-[3/2] items-center justify-center p-6 text-center hover:card-soft-hover"
                    >
                      <div className="font-display text-xl text-[var(--royal)] transition-colors group-hover:text-[var(--cyan-brand)]">
                        {n}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Marquee wall */}
      <section className="section-y bg-[var(--muted)]">
        <div className="container-x">
          <Reveal><span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />Community</span></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">
              With gratitude to <span className="brand-gradient-text">everyone</span> who backs student art.
            </h2>
          </Reveal>
          <div className="mt-10 overflow-hidden">
            <div className="anim-marquee flex gap-16 whitespace-nowrap">
              {[...sponsorTiers.flatMap(t => t.items), ...sponsorTiers.flatMap(t => t.items)].map((n, i) => (
                <span key={i} className="font-display text-2xl text-[var(--royal)]/60">
                  {n} <span className="mx-4 text-[var(--cyan-brand)]">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
