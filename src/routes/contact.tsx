import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Afsana" },
      { name: "description", content: "Get in touch with the Afsana team at Shiv Nadar School, Gurgaon — email, phone, Instagram and directions." },
      { property: "og:title", content: "Contact Afsana" },
      { property: "og:description", content: "Reach the Afsana team at Shiv Nadar School, Gurgaon." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "afsana@shivnadarschool.edu.in" },
    { icon: Phone, label: "Phone", value: "+91 98xxxxxx21" },
    { icon: Instagram, label: "Instagram", value: "@afsana.sns" },
    { icon: MapPin, label: "Campus", value: "Shiv Nadar School, Gurgaon, Haryana" },
  ];
  return (
    <div className="pt-24">
      <Section
        eyebrow="Contact"
        title={<>Come say <span className="brand-gradient-text">hello.</span></>}
        intro="For participation queries, sponsorship or press — reach out to the Afsana committee."
      />
      <div className="container-x pb-32">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {items.map((it) => (
                <div key={it.label} className="card-soft flex items-center gap-5 p-6 hover:card-soft-hover">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--royal)]/5 text-[var(--royal)]">
                    <it.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-[var(--mute)]">{it.label}</div>
                    <div className="mt-1 font-display text-xl text-[var(--royal)]">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-soft overflow-hidden">
              <div className="aspect-[4/3] w-full bg-[var(--muted)]">
                <div
                  className="grid h-full w-full place-items-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(14,43,111,.08), rgba(31,168,224,.15))",
                  }}
                >
                  <div className="text-center">
                    <MapPin className="mx-auto text-[var(--royal)]" />
                    <div className="mt-3 font-display text-xl text-[var(--royal)]">Google Maps embed</div>
                    <div className="mt-1 text-sm text-[var(--mute)]">Shiv Nadar School, Gurgaon</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="font-display text-2xl text-[var(--royal)]">Reaching campus</div>
                <p className="mt-2 text-[var(--mute)]">
                  Shuttles run from the nearest metro station across all three festival days. Detailed
                  directions and delegate check-in information will be shared with registered schools.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
