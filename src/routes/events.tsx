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
      {
        name: "description",
        content:
          "The full list of Afsana events across theatre, music, dance, fine arts and literary arts.",
      },
      { property: "og:title", content: "Afsana Events" },
      {
        property: "og:description",
        content:
          "Every event at Afsana — concept notes, venues, timings and coordinators.",
      },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const cats = [
  "All",
  "The Stage · Theatre",
  "The Rhythm · Music",
  "The Movement · Dance",
  "The Canvas · Fine Arts",
  "The Words · Literary Arts",
  "Cross-discipline",
];

/*
 * Event photography
 *
 * Images are selected by event ID so the events data file
 * does not need to contain any image URLs.
 */
const eventImages: Record<string, string> = {
  // ---------- DAY 1 ----------

  "art-therapy-workshop":
    "https://static.wixstatic.com/media/4090eb_1acfae47f7824b09883baf5988476c91~mv2.jpeg/v1/fill/w_1200,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4090eb_1acfae47f7824b09883baf5988476c91~mv2.jpeg",

  "voices-from-the-past":
    "https://surnosecrans.files.wordpress.com/2023/07/fracture.s-1-9.jpeg?w=1200",

  swaranjali:
    "https://static.toiimg.com/thumb/imgsize-23456%2Cmsid-62652323%2Cwidth-1200%2Cresizemode-4/62652323.jpg",

  "dance-championship":
    "https://storage.ghost.io/c/81/43/8143ec94-5168-45b1-a5e8-d3ad406ee496/content/images/2025/01/Pic-2.JPG",

  "ai-and-arts":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",

  "silhouettes-workshop":
    "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=85",

  "comedy-show":
    "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=85",

  // ---------- DAY 2 ----------

  "hip-hop-workshop":
    "https://www.stephanemonserant.com/wp-content/uploads/2019/02/023_Le-duo-Battle-hip-hop-Vibrations-Urbaines-2018.jpg",

  "fourth-wall":
    "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=85",

  "take-one-workshop":
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",

  "art-heist":
    "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=85",

  "traditional-dance-speaker":
    "https://storage.ghost.io/c/81/43/8143ec94-5168-45b1-a5e8-d3ad406ee496/content/images/2025/01/Pic-2.JPG",

  "blue-notes-speaker":
    "https://assets-prod.turntabletickets.com/media/frankiesjazzclub/show-4318/chung.jpeg",

  "immersive-art-galli":
    "https://mehtatransportcorporations.com/upload/1742987611453.jpeg",

  "clay-modelling-workshop":
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=85",

  "slam-poetry":
    "https://assets.st-note.com/production/uploads/images/8412206/picture_pc_ffe606be366e0c36fb157c526351bd49.jpg?fit=bounds&height=1200&quality=85&width=1200",

  // ---------- DAY 3 ----------

  "university-fair":
    "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2026/04/02/1775118711547_8d0a3cab-0979-418b-9b24-0566a03d63b1.jpeg",

  "mini-film-fest":
    "https://images.indianexpress.com/2024/07/idsffk-30072024.jpg",

  "sound-check":
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",

  "judges-performance":
    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=85",

  "battle-of-the-bands":
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",

  "prize-distribution":
    "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1200&q=85",
};

function EventsPage() {
  const [cat, setCat] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const list = useMemo(
    () => (cat === "All" ? events : events.filter((e) => e.category === cat)),
    [cat]
  );

  return (
    <div>
      <Section
        eyebrow="Events"
        title={
          <>
            Every event, in one place.
          </>
        }
        intro="Concept notes, venues, timings and coordinators for every event at this year's Afsana."
      />

      <div className="mx-auto max-w-7xl px-6 pb-20">
        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setExpanded(null);
              }}
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

        {/* Event cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((e, i) => (
            <Reveal key={e.id} delay={i * 60}>
              <article className="card-soft flex h-full flex-col overflow-hidden hover:card-soft-hover">
                {/* Event image */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--muted)]">
                  {eventImages[e.id] ? (
                    <img
                      src={eventImages[e.id]}
                      alt={e.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div
                      className="grid h-full w-full place-items-center text-white/70 text-xs uppercase tracking-[0.25em]"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--royal), var(--cyan-brand) 70%, var(--lime))",
                      }}
                    >
                      Afsana
                    </div>
                  )}
                </div>

                {/* Event information */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--cyan-brand)]">
                    {e.category}
                  </div>

                  <h3 className="mt-2 font-display text-2xl text-[var(--royal)]">
                    {e.name}
                  </h3>

                  {e.short && (
                    <p className="mt-3 text-[var(--mute)]">
                      {e.short}
                    </p>
                  )}

                  {/* Expanded concept */}
                  {expanded === e.id && e.concept && (
                    <p className="anim-reveal mt-4 rounded-2xl bg-[var(--muted)] p-4 text-sm text-[var(--ink)]">
                      <span className="font-semibold text-[var(--royal)]">
                        Concept ·{" "}
                      </span>
                      {e.concept}
                    </p>
                  )}

                  {/* Event details */}
                  <ul className="mt-5 space-y-2 text-sm text-[var(--mute)]">
                    {e.venue && (
                      <li className="flex items-center gap-2">
                        <MapPin size={14} />
                        {e.venue}
                      </li>
                    )}

                    {e.timing && (
                      <li className="flex items-center gap-2">
                        <Clock size={14} />
                        {e.timing}
                      </li>
                    )}

                    {e.coordinator && (
                      <li className="flex items-center gap-2">
                        <User size={14} />
                        {e.coordinator}
                      </li>
                    )}
                  </ul>

                  {/* Actions */}
                  <div className="mt-6 flex items-center gap-2">
                    {e.concept && (
                      <button
                        onClick={() =>
                          setExpanded(expanded === e.id ? null : e.id)
                        }
                        className="rounded-full border border-[var(--royal)]/20 px-4 py-2 text-xs font-medium text-[var(--royal)] hover:bg-[var(--royal)]/5"
                      >
                        {expanded === e.id
                          ? "Hide concept"
                          : "Read concept"}
                      </button>
                    )}

                    <a
                      href="#rules"
                      onClick={(ev) => {
                        ev.preventDefault();
                        alert("Rules document coming soon.");
                      }}
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