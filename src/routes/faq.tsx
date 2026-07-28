import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { faqs } from "../components/afsana/data";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Afsana" },
      { name: "description", content: "Answers to common questions about Afsana — participation, judging, workshops, dress code and more." },
      { property: "og:title", content: "Afsana FAQ" },
      { property: "og:description", content: "Answers to common questions about Afsana." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="pt-24">
      <Section
        eyebrow="FAQ"
        title={<>Everything you might <span className="brand-gradient-text">ask.</span></>}
        intro="Have a question we haven't covered? Reach out through the Contact page."
      />
      <div className="container-x pb-32">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full rounded-2xl border border-[var(--border)] bg-white p-6 text-left transition-colors hover:border-[var(--cyan-brand)]/40"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="font-display text-xl text-[var(--royal)]">{f.q}</div>
                    <Plus
                      className={`mt-1 shrink-0 text-[var(--cyan-brand)] transition-transform ${isOpen ? "rotate-45" : ""}`}
                    />
                  </div>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pt-4 text-[var(--mute)]">{f.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
