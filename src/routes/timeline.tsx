import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { timeline } from "../components/afsana/data";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "3-Day Festival Experience — Afsana" },
      { name: "description", content: "The three-day Afsana timeline — opening ceremony, competitions, workshops, flagship performances, awards and closing." },
      { property: "og:title", content: "Afsana — The Three Days" },
      { property: "og:description", content: "Opening, craft, performance, farewell — hour by hour." },
    ],
    links: [{ rel: "canonical", href: "/timeline" }],
  }),
  component: Timeline,
});

function Timeline() {
  const [openKey, setOpenKey] = useState<string | null>("Day 01-0");

  return (
    <div className="pt-24">
      <Section
        eyebrow="3-Day Festival Experience"
        title={<>Three days, told <span className="brand-gradient-text">hour by hour.</span></>}
        intro="An interactive timeline of the festival — click any card to expand it."
      />

      <div className="container-x pb-32">
        <div className="space-y-16">
          {timeline.map((d) => (
            <Reveal key={d.day}>
              <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                <div className="md:sticky md:top-24 md:self-start">
                  <div
                    className="rounded-3xl p-6 text-white shadow-[var(--shadow-soft)]"
                    style={{ background: `linear-gradient(160deg, ${d.color}, var(--royal))` }}
                  >
                    <div className="text-xs uppercase tracking-[0.25em] text-white/70">{d.date}</div>
                    <div className="mt-2 font-display text-5xl">{d.day}</div>
                    <div className="mt-4 text-sm text-white/85">{d.title}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {d.items.map((it, i) => {
                    const key = `${d.day}-${i}`;
                    const isOpen = openKey === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setOpenKey(isOpen ? null : key)}
                        className="card-soft w-full text-left transition-transform hover:-translate-y-0.5"
                      >
                        <div className="flex items-center justify-between gap-6 p-6 md:p-8">
                          <div className="flex items-center gap-6">
                            <div className="font-display text-3xl text-[var(--cyan-brand)] tabular-nums">
                              {it.time}
                            </div>
                            <div>
                              <div className="font-display text-2xl text-[var(--royal)]">{it.name}</div>
                              {!isOpen && (
                                <div className="mt-1 text-sm text-[var(--mute)]">Tap to read more</div>
                              )}
                            </div>
                          </div>
                          <ChevronDown
                            className={`shrink-0 text-[var(--royal)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </div>
                        <div
                          className="grid overflow-hidden transition-[grid-template-rows] duration-500"
                          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <div className="px-6 pb-6 text-[var(--mute)] md:px-8 md:pb-8">
                              {it.note}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
