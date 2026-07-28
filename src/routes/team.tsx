import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { team } from "../components/afsana/data";
import { Instagram, Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — Afsana" },
      { name: "description", content: "The student Organising Committee behind Afsana — the festival's directors, discipline leads and department heads." },
      { property: "og:title", content: "Meet the Afsana Team" },
      { property: "og:description", content: "The student Organising Committee behind Afsana." },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const gradients = [
  "linear-gradient(135deg, #0E2B6F, #1FA8E0)",
  "linear-gradient(160deg, #1FA8E0, #98D24A)",
  "linear-gradient(135deg, #98D24A, #0E2B6F)",
  "linear-gradient(200deg, #0E2B6F, #98D24A)",
];

function initials(n: string) {
  return n.split(" ").map(p => p[0]).join("").slice(0, 2);
}

function TeamPage() {
  const byDept = team.reduce<Record<string, typeof team>>((acc, t) => {
    (acc[t.dept] ??= []).push(t);
    return acc;
  }, {});

  return (
    <div className="pt-24">
      <Section
        eyebrow="Organising Committee"
        title={<>Meet the <span className="brand-gradient-text">team.</span></>}
        intro="Afsana is entirely student-led. Meet the directors, discipline heads and department leads behind the twelfth edition."
      />

      <div className="container-x pb-32 space-y-20">
        {Object.entries(byDept).map(([dept, members]) => (
          <Reveal key={dept}>
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl text-[var(--royal)]">{dept}</h3>
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--mute)]">{members.length} members</span>
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {members.map((m, i) => (
                  <div key={m.name} className="group text-center">
                    <div
                      className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-white shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105"
                      style={{ background: gradients[i % gradients.length] }}
                    >
                      <div className="grid h-full w-full place-items-center font-display text-4xl text-white">
                        {initials(m.name)}
                      </div>
                      <div className="pointer-events-none absolute inset-0 bg-[var(--royal-deep)]/40 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div className="mt-4 font-display text-lg text-[var(--royal)]">{m.name}</div>
                    <div className="text-sm text-[var(--mute)]">{m.role}</div>
                    <div className="mt-3 flex justify-center gap-2 text-[var(--mute)]">
                      <a href="#" aria-label="Instagram" className="rounded-full p-1.5 hover:bg-[var(--royal)]/5 hover:text-[var(--royal)]"><Instagram size={16} /></a>
                      <a href="#" aria-label="LinkedIn" className="rounded-full p-1.5 hover:bg-[var(--royal)]/5 hover:text-[var(--royal)]"><Linkedin size={16} /></a>
                      <a href="#" aria-label="Email" className="rounded-full p-1.5 hover:bg-[var(--royal)]/5 hover:text-[var(--royal)]"><Mail size={16} /></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
