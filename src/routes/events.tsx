import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { events } from "../components/afsana/data";
import { Clock, MapPin, User } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Afsana" },
      { name: "description", content: "The full list of Afsana events across theatre, music, dance, fine arts and literary arts." },
      { property: "og:title", content: "Afsana Events" },
      { property: "og:description", content: "Every event at Afsana — concept notes, venues, timings and coordinators." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const cats = ["All", "The Stage · Theatre", "The Rhythm · Music", "The Movement · Dance", "The Canvas · Fine Arts", "The Words · Literary Arts", "Cross-discipline"];

function EventsPage() {
  const [cat, setCat] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const list = useMemo(() => cat === "All" ? events : events.filter(e => e.category === cat), [cat]);

  return (
    <div className="pt-24">
      <Section
        eyebrow="Events"
        title={<>Every event, in one <span className="brand-gradient-text">place.</span></>}
        intro="Concept notes, venues, timings and coordinators for every event at this year's Afsana."
      />
      <div className="container-x pb-32">
        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                cat === c
                  ? "bg-[var(--royal)] text-white"
                  : "border border-[var(--border)] bg-white text-[var(--ink)] hover:bg-[var(--royal)]/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((e, i) => (
            <Reveal key={e.id} delay={i * 60}>
              <article className="card-soft flex h-full flex-col overflow-hidden hover:card-soft-hover">
                <div
                  className="aspect-[16/10] w-full"
                  style={{
                    background: "linear-gradient(135deg, var(--royal), var(--cyan-brand) 70%, var(--lime))",
                  }}
                >
                  <div className="grid h-full w-full place-items-center text-white/70 text-xs uppercase tracking-[0.25em]">
                    Image placeholder
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-brand)]">{e.category}</div>
                  <h3 className="mt-2 font-display text-2xl text-[var(--royal)]">{e.name}</h3>
                  <p className="mt-3 text-[var(--mute)]">{e.short}</p>

                  {expanded === e.id && (
                    <p className="anim-reveal mt-4 rounded-2xl bg-[var(--muted)] p-4 text-sm text-[var(--ink)]">
                      <span className="font-semibold text-[var(--royal)]">Concept · </span>
                      {e.concept}
                    </p>
                  )}

                  <ul className="mt-5 space-y-2 text-sm text-[var(--mute)]">
                    <li className="flex items-center gap-2"><MapPin size={14} /> {e.venue}</li>
                    <li className="flex items-center gap-2"><Clock size={14} /> {e.timing}</li>
                    <li className="flex items-center gap-2"><User size={14} /> {e.coordinator}</li>
                  </ul>

                  <div className="mt-6 flex items-center gap-2">
                    <button
                      onClick={() => setExpanded(expanded === e.id ? null : e.id)}
                      className="rounded-full border border-[var(--royal)]/20 px-4 py-2 text-xs font-medium text-[var(--royal)] hover:bg-[var(--royal)]/5"
                    >
                      {expanded === e.id ? "Hide concept" : "Read concept"}
                    </button>
                    <a
                      href="#rules"
                      onClick={(ev) => { ev.preventDefault(); alert("Rules document coming soon."); }}
                      className="rounded-full bg-[var(--royal)] px-4 py-2 text-xs font-medium text-white"
                    >
                      Rules
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
