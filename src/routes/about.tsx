import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Afsana" },
      { name: "description", content: "Afsana is Shiv Nadar School Gurgaon's Annual Inter-School Arts Festival — a student-led celebration of storytelling through theatre, music, dance, fine arts and literary arts." },
      { property: "og:title", content: "About Afsana" },
      { property: "og:description", content: "The story behind Shiv Nadar School Gurgaon's Annual Inter-School Arts Festival." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="About Afsana"
        title={<>A festival that treats every art form as <span className="brand-gradient-text">equal.</span></>}
        intro="Afsana began as a random thought and has grown into one of the country's most anticipated student-led arts festivals — a three-day gathering of theatre, music, dance, fine arts and literary arts, hosted by Shiv Nadar School, Gurgaon."
      >
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal>
            <div className="space-y-6 text-lg text-[var(--ink)] leading-relaxed">
              <p>
                <span className="font-display text-4xl text-[var(--royal)]">Afsana</span> — Urdu & Persian for
                <em> a story </em>— is our answer to a simple question: what happens when a school
                takes storytelling seriously, in every form it comes in?
              </p>
              <p className="text-[var(--mute)]">
                For three days, our campus transforms into a vibrant celebration of music,
                dance, theatre, film, and visual arts. Guiding this journey is a single star— our
                symbol. Just as no two stars shine alike, no two artists express themselves
                the same way. Together, these countless individual lights form a
                constellation: an artistic community bound by curiosity, collaboration, and
                shared purpose.
              </p>
              <p className="text-[var(--mute)]">
                What we care about most: that the theatre student and the debater and the painter
                and the classical vocalist all end the weekend in the same green room, arguing
                about the same show.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <img
                src="\afsana-logo.png"
                alt="Afsana Arts Festival"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="anim-float absolute -right-6 -top-6 h-24 w-24 rounded-3xl bg-[var(--lime)]" />
            <div className="anim-drift absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[var(--cyan-brand)]/70" />
          </div>
        </Reveal>
        </div>
      </Section>

          </div>
  );
}
