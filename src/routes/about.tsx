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
        intro="Afsana began as a single-evening arts showcase and has grown, over eleven editions, into one of the country's most anticipated student-led arts festivals — a three-day gathering of theatre, music, dance, fine arts and literary arts, hosted by Shiv Nadar School, Gurgaon."
      >
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal>
            <div className="space-y-6 text-lg text-[var(--ink)] leading-relaxed">
              <p>
                <span className="font-display text-4xl text-[var(--royal)]">Afsana</span> — Urdu for
                <em> a story </em>— is our answer to a simple question: what happens when a school
                takes storytelling seriously, in every form it comes in?
              </p>
              <p className="text-[var(--mute)]">
                For three days each year, our campus is handed over to students. They program the
                festival. They design the identity. They run the auditorium, the black-box theatre,
                the amphitheatre, the studios and the courtyard. Working artists, alumni and
                educators come in as mentors and judges — but the festival is theirs.
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
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--royal)] via-[var(--cyan-brand)] to-[var(--lime)]">
                <svg viewBox="0 0 400 500" className="h-full w-full opacity-60" aria-hidden>
                  <circle cx="120" cy="140" r="90" fill="#fff" opacity=".15" />
                  <circle cx="290" cy="300" r="130" fill="#fff" opacity=".18" />
                  <path d="M40,420 C120,360 240,480 380,380" stroke="#fff" strokeWidth="3" fill="none" opacity=".6" />
                </svg>
              </div>
              <div className="anim-float absolute -right-6 -top-6 h-24 w-24 rounded-3xl bg-[var(--lime)]" />
              <div className="anim-drift absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[var(--cyan-brand)]/70" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Our Mission"
        title={<>Storytelling, in <span className="brand-gradient-text">five languages.</span></>}
        intro="Every discipline at Afsana is a way of telling a story — and every student is trusted to tell one."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { h: "Excellence", p: "We judge fairly and rigorously. Feedback from mentors is as much a part of the prize as the trophy." },
            { h: "Collaboration", p: "Cross-discipline projects are baked in — from the opening ensemble to the closing film." },
            { h: "Access", p: "Delegates travel to Afsana from schools of every size. We work hard to make sure the room reflects that." },
            { h: "Craft", p: "Workshops led by working artists. Real feedback. Real time on the tools." },
            { h: "Imagination", p: "Prompts are provocative. Themes are open. Students set the tone." },
            { h: "Joy", p: "The best weekend of the school year. That, first." },
          ].map((c, i) => (
            <Reveal key={c.h} delay={i * 80}>
              <div className="card-soft h-full p-8 hover:card-soft-hover">
                <h3 className="font-display text-2xl text-[var(--royal)]">{c.h}</h3>
                <p className="mt-3 text-[var(--mute)]">{c.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
