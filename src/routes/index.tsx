import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Hero } from "../components/afsana/Hero";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { Countdown } from "../components/afsana/Countdown";
import { Counters } from "../components/afsana/Counters";
import { worlds, quotes, events } from "../components/afsana/data";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afsana — Where Stories Become Art" },
      { name: "description", content: "The Annual Inter-School Arts Festival of Shiv Nadar School, Gurgaon. Three days, five artistic worlds, one shared stage for the country's most imaginative young voices." },
      { property: "og:title", content: "Afsana — Where Stories Become Art" },
      { property: "og:description", content: "Three days of theatre, music, dance, fine arts and literary arts at Shiv Nadar School, Gurgaon." },
    ],
  }),
  component: Home,
});

function Home() {
  const [qIdx, setQIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setQIdx((x) => (x + 1) % quotes.length), 5500);
    return () => clearInterval(i);
  }, []);
  const q = quotes[qIdx];

  const featured = events.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Countdown */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid items-end gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <Reveal>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />
                  Countdown to Afsana
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
                  The stage is being <span className="brand-gradient-text">set.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-4 max-w-xl text-lg text-[var(--mute)]">
                  Three days of theatre, sound, movement, colour and language. Mark the dates —
                  the twelfth edition of Afsana begins soon.
                </p>
              </Reveal>
            </div>
            <Countdown />
          </div>
        </div>
      </section>

      {/* Why attend + stats */}
      <Section
        eyebrow="Why Attend Afsana"
        title={<>A festival built by students, <span className="brand-gradient-text">for storytellers.</span></>}
        intro="Afsana is where a debate finishes, a rehearsal begins and a canvas is left drying in the courtyard. It's a weekend that treats every art form as equal — and every student as an artist."
      >
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {[
            { title: "Cross-discipline collaboration", body: "Musicians score short films. Dancers stage debate finals. Painters design the closing ceremony. Everyone works with everyone." },
            { title: "Mentored by working artists", body: "Workshops and masterclasses led by practitioners — from theatre directors to spoken-word poets and independent musicians." },
            { title: "A stage that goes national", body: "Delegates from partner schools across India. A week you'll be talking about, and a network you'll keep." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="card-soft h-full p-8 hover:card-soft-hover">
                <Sparkles className="text-[var(--cyan-brand)]" />
                <h3 className="mt-5 font-display text-2xl text-[var(--royal)]">{c.title}</h3>
                <p className="mt-3 text-[var(--mute)]">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20">
          <Counters />
        </div>
      </Section>

      {/* Journey Through Afsana */}
      <section className="relative section-y bg-[var(--muted)]">
        <div className="container-x">
          <Reveal><span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />Journey Through Afsana</span></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
              A weekend told in <span className="brand-gradient-text">chapters.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10">
            {[
              { k: "01", h: "The Opening", p: "The lamp is lit. The festival ensemble takes the stage. Every school walks in together." },
              { k: "02", h: "The Craft", p: "Rehearsals, warm-ups, workshops. Every hallway becomes a studio." },
              { k: "03", h: "The Performance", p: "Auditoriums fill. Amphitheatres glow. The stories arrive." },
              { k: "04", h: "The Farewell", p: "Awards, reflections, the festival song. And a courtyard full of new friends." },
            ].map((c, i) => (
              <Reveal key={c.k} delay={i * 100}>
                <div className="grid gap-6 rounded-3xl border border-[var(--border)] bg-white p-8 md:grid-cols-[120px_1fr_auto] md:items-center md:p-10">
                  <div className="font-display text-6xl text-[var(--cyan-brand)]">{c.k}</div>
                  <div>
                    <h3 className="font-display text-3xl text-[var(--royal)]">{c.h}</h3>
                    <p className="mt-2 max-w-2xl text-[var(--mute)]">{c.p}</p>
                  </div>
                  <div className="hidden md:block">
                    <div className="h-24 w-1 rounded-full bg-gradient-to-b from-[var(--royal)] via-[var(--cyan-brand)] to-[var(--lime)]" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore worlds preview */}
      <Section
        eyebrow="Explore Afsana"
        title={<>Five artistic <span className="brand-gradient-text">worlds.</span></>}
        intro="Not categories. Worlds — each with its own vocabulary, its own rituals, its own way of turning stories into art."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {worlds.map((w, i) => (
            <Reveal key={w.slug} delay={i * 80}>
              <Link
                to="/explore"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                style={{ background: `linear-gradient(180deg, ${w.tint}, #fff 80%)` }}
              >
                <div>
                  <div className="text-4xl">{w.emoji}</div>
                  <h3 className="mt-6 font-display text-3xl text-[var(--royal)]">{w.name}</h3>
                  <div className="mt-1 text-sm uppercase tracking-[0.2em]" style={{ color: w.hue }}>
                    {w.label}
                  </div>
                  <p className="mt-4 text-[var(--mute)]">{w.blurb}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--royal)]">
                  Enter {w.name}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured events */}
      <Section
        eyebrow="Featured Events"
        title={<>The ones people <span className="brand-gradient-text">talk about.</span></>}
        intro="A first look at some of this year's headline events — full listings live on the Events page."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((e, i) => (
            <Reveal key={e.id} delay={i * 100}>
              <div className="card-soft flex h-full flex-col p-8 hover:card-soft-hover">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--cyan-brand)]">{e.category}</div>
                <h3 className="mt-3 font-display text-2xl text-[var(--royal)]">{e.name}</h3>
                <p className="mt-3 text-[var(--mute)]">{e.short}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-[var(--mute)]">
                  <span>{e.venue}</span>
                  <span>{e.timing}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/events" className="inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-5 py-3 text-sm font-medium text-white">
            See all events <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Highlights */}
      <section className="section-y bg-[var(--royal-deep)] text-white">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow text-[var(--lime)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />
              Festival Highlights
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-white md:text-6xl">
              Moments that make <span className="text-[var(--lime)]">Afsana, Afsana.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { t: "The Opening Ensemble", p: "60 students. Five disciplines. One eight-minute opening act rehearsed for two months." },
              { t: "Flagship Performance", p: "A commissioned piece staged only once — on the closing evening — with student and guest artists." },
              { t: "The Late Nights", p: "Amphitheatre sets, courtyard poetry and a food truck line that has become its own tradition." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-transform hover:-translate-y-1">
                  <h3 className="font-display text-2xl text-white">{c.t}</h3>
                  <p className="mt-3 text-white/70">{c.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote of the day */}
      <section className="section-y">
        <div className="container-x">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />Quote of the Day</span>
            <blockquote
              key={qIdx}
              className="anim-reveal mt-6 font-display text-3xl italic leading-tight text-[var(--royal)] md:text-5xl"
            >
              "{q.text}"
            </blockquote>
            <div className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--mute)]">— {q.author}</div>
          </div>
        </div>
      </section>

      {/* Partner schools */}
      <section className="section-y bg-[var(--muted)]">
        <div className="container-x">
          <Reveal><span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />Partner Schools</span></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl">
              45+ schools. <span className="brand-gradient-text">One weekend.</span>
            </h2>
          </Reveal>
          <div className="relative mt-14 overflow-hidden">
            <div className="anim-marquee flex gap-10 whitespace-nowrap will-change-transform">
              {[
                "Shiv Nadar School Gurgaon", "Shiv Nadar School Noida", "The Doon School", "Modern School Barakhamba",
                "Sanskriti School", "Vasant Valley", "Step by Step School", "Pathways World School",
                "DPS RK Puram", "Heritage Xperiential", "Riverside School Ahmedabad", "Cathedral & John Connon",
                "Bombay Scottish School", "Mallya Aditi International", "Inventure Academy",
              ].concat([
                "Shiv Nadar School Gurgaon", "Shiv Nadar School Noida", "The Doon School", "Modern School Barakhamba",
                "Sanskriti School", "Vasant Valley", "Step by Step School", "Pathways World School",
                "DPS RK Puram", "Heritage Xperiential", "Riverside School Ahmedabad", "Cathedral & John Connon",
                "Bombay Scottish School", "Mallya Aditi International", "Inventure Academy",
              ]).map((s, i) => (
                <span key={i} className="font-display text-2xl text-[var(--royal)]/70">
                  {s} <span className="mx-4 text-[var(--lime)]">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Behind the scenes + venue */}
      <Section
        eyebrow="Behind the Scenes"
        title={<>Two months of <span className="brand-gradient-text">making.</span></>}
        intro="Afsana isn't a weekend — it's a semester. Design mock-ups, rehearsal schedules, technical run-throughs, hospitality plans, sponsor decks and a great deal of chai."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-soft h-full p-8 hover:card-soft-hover">
              <h3 className="font-display text-2xl text-[var(--royal)]">The Studio</h3>
              <p className="mt-3 text-[var(--mute)]">Design and identity are led by a student team working under a working art director. Every poster, badge and stage backdrop is built in-house.</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="aspect-square rounded-2xl bg-[var(--royal)]/10" />
                <div className="aspect-square rounded-2xl bg-[var(--cyan-brand)]/20" />
                <div className="aspect-square rounded-2xl bg-[var(--lime)]/30" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-soft h-full p-8 hover:card-soft-hover">
              <h3 className="font-display text-2xl text-[var(--royal)]">The Venue</h3>
              <p className="mt-3 text-[var(--mute)]">A 6-acre campus in Gurgaon with an auditorium, amphitheatre, black-box theatre, three studios and a central courtyard that becomes the beating heart of Afsana.</p>
              <div className="mt-6 aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-[var(--royal)] via-[var(--cyan-brand)] to-[var(--lime)] opacity-90" />
            </div>
          </Reveal>
        </div>
      </Section>

    </>
  );
}
