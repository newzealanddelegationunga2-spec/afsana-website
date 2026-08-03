import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Section } from "../components/afsana/Section";
import { Reveal } from "../components/afsana/Reveal";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Afsana" },
      {
        name: "description",
        content:
          "A visual journey through past editions of Afsana — performances, workshops and behind-the-scenes moments.",
      },
      { property: "og:title", content: "Afsana Gallery" },
      {
        property: "og:description",
        content: "Photographs from previous editions of Afsana.",
      },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});


type Tile = {
  id: number;
  ratio: string;
  image: string;
  caption: string;
  position?: string;
};


const tiles: Tile[] = [
  {
    id: 1,
    ratio: "aspect-[4/5]",
    image: "/DSC_5741.JPG",
    caption: "Opening Ensemble",
    position: "center center",
  },
  {
    id: 2,
    ratio: "aspect-[3/4]",
    image: "/DSC_5767.JPG",
    caption: "Battle of the Bands",
    position: "30% center",
  },
  {
    id: 3,
    ratio: "aspect-square",
    image: "/DSC_5768.JPG",
    caption: "Flagship Performance",
    position: "center center",
  },
  {
    id: 4,
    ratio: "aspect-[4/3]",
    image: "/DSC_5773.JPG",
    caption: "Workshop — Voice",
    position: "center 15%",
  },
  {
    id: 5,
    ratio: "aspect-[3/2]",
    image: "/DSC_5784.JPG",
    caption: "Contemporary Choreo",
    position: "center 15%",
  },
  {
    id: 6,
    ratio: "aspect-[4/5]",
    image: "/DSC_5797.JPG",
    caption: "Live Painting",
    position: "center 15%",
  },
  {
    id: 7,
    ratio: "aspect-square",
    image: "/DSC_5813.JPG",
    caption: "Slam Poetry Finals",
    position: "center center",
  },
  {
    id: 8,
    ratio: "aspect-[3/4]",
    image: "/DSC_5818.JPG",
    caption: "Amphitheatre Night",
    position: "center center",
  },
  {
    id: 9,
    ratio: "aspect-[4/3]",
    image: "/DSC_5824.JPG",
    caption: "Festival Crew",
    position: "center 80%",
  },
  {
    id: 10,
    ratio: "aspect-[4/3]",
    image: "/DSC_5882.JPG",
    caption: "Festival Crew",
    position: "center center",
  },
];


const featured = tiles.slice(0, 5);


function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);


  useEffect(() => {
    const i = setInterval(() => {
      setSlide((s) => (s + 1) % featured.length);
    }, 4500);

    return () => clearInterval(i);
  }, []);


  useEffect(() => {
    if (active === null) return;

    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);

      if (e.key === "ArrowRight") {
        setActive((a) =>
          a === null ? a : (a + 1) % tiles.length
        );
      }

      if (e.key === "ArrowLeft") {
        setActive((a) =>
          a === null ? a : (a - 1 + tiles.length) % tiles.length
        );
      }
    };

    window.addEventListener("keydown", on);

    return () => window.removeEventListener("keydown", on);
  }, [active]);


  return (
    <div className="pt-24">

      <Section
        eyebrow="Gallery"
        title={
          <>
            A festival,{" "}
            <span className="brand-gradient-text">
              in pictures.
            </span>
          </>
        }
        intro="A visual journey through past editions of Afsana. Click any image to open the lightbox."
      />


      {/* Featured Carousel */}
      <div className="container-x pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">

            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
            >

              {featured.map((t) => (
                <div
                  key={t.id}
                  className="relative aspect-[16/8] w-full shrink-0"
                >

                  <img
                    src={t.image}
                    alt=""
                    className="h-full w-full object-cover"
                    style={{
                      objectPosition: t.position || "center center",
                    }}
                  />

                </div>
              ))}

            </div>


            <div className="absolute bottom-6 right-6 flex gap-2">

              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    slide === i
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}

            </div>

          </div>
        </Reveal>
      </div>      {/* Gallery Grid */}
      <div className="container-x pb-32">

        <div className="columns-1 gap-4 sm:columns-2 md:columns-3">

          {tiles.map((t, i) => (

            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`mb-4 block w-full overflow-hidden rounded-2xl ${t.ratio} group relative`}
            >

              <img
                src={t.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  objectPosition: t.position || "center center",
                }}
              />

            </button>

          ))}

        </div>

      </div>



      {/* Lightbox */}
      {active !== null && (

        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur"
          onClick={() => setActive(null)}
        >

          <button
            className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
          >
            <X />
          </button>


          <button
            className="absolute left-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();

              setActive(
                (a) =>
                  a === null
                    ? a
                    : (a - 1 + tiles.length) % tiles.length
              );
            }}
          >
            <ChevronLeft />
          </button>


          <button
            className="absolute right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();

              setActive(
                (a) =>
                  a === null
                    ? a
                    : (a + 1) % tiles.length
              );
            }}
          >
            <ChevronRight />
          </button>



          <div
            className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={tiles[active].image}
              alt=""
              className="h-full w-full object-cover"
              style={{
                objectPosition:
                  tiles[active].position || "center center",
              }}
            />

          </div>

        </div>

      )}

    </div>
  );
}