export type World = {
  slug: string;
  emoji: string;
  name: string;
  label: string;
  blurb: string;
  hue: string; // css color
  tint: string; // css color
};

export const worlds: World[] = [
  {
    slug: "stage",
    emoji: "🎭",
    name: "The Stage",
    label: "Theatre",
    blurb:
      "Where scripts breathe. Monologues, ensemble pieces and stagecraft that turn empty floors into worlds.",
    hue: "#0E2B6F",
    tint: "rgba(14,43,111,.08)",
  },
  {
    slug: "rhythm",
    emoji: "🎵",
    name: "The Rhythm",
    label: "Music",
    blurb:
      "Choirs, bands, classical solos and contemporary sets — a festival where every note has a story.",
    hue: "#1FA8E0",
    tint: "rgba(31,168,224,.10)",
  },
  {
    slug: "movement",
    emoji: "💃",
    name: "The Movement",
    label: "Dance",
    blurb:
      "From classical roots to contemporary choreography — movement as the language of memory.",
    hue: "#98D24A",
    tint: "rgba(152,210,74,.16)",
  },
  {
    slug: "canvas",
    emoji: "🎨",
    name: "The Canvas",
    label: "Fine Arts",
    blurb:
      "Live painting, installations, sculpture and design — colour as a way of thinking.",
    hue: "#0E2B6F",
    tint: "rgba(14,43,111,.06)",
  },
  {
    slug: "words",
    emoji: "✍️",
    name: "The Words",
    label: "Literary Arts",
    blurb:
      "Debate, slam poetry, storytelling and creative writing — where language becomes performance.",
    hue: "#1FA8E0",
    tint: "rgba(31,168,224,.08)",
  },
];

export type Event = {
  id: string;
  name: string;
  category: string;
  short: string;
  concept: string;
  venue: string;
  timing: string;
  coordinator: string;
};

export const events: Event[] = [
  {
    id: "monologue",
    name: "Solo Monologue",
    category: "The Stage · Theatre",
    short: "A single voice, a single light, a whole world.",
    concept:
      "Participants perform an original or adapted monologue of up to 4 minutes. Judged on presence, diction, emotional truth and originality of interpretation.",
    venue: "Black Box, Wing A",
    timing: "Day 1 · 11:00 – 14:00",
    coordinator: "Ananya M. (Grade 12)",
  },
  {
    id: "battle-of-bands",
    name: "Battle of the Bands",
    category: "The Rhythm · Music",
    short: "Original sets, tight arrangements, three unforgettable minutes.",
    concept:
      "School bands present a 12-minute set of original or reimagined work. Judged on musicianship, composition, stage presence and audience response.",
    venue: "Amphitheatre",
    timing: "Day 2 · 18:30 – 21:00",
    coordinator: "Kabir S. (Grade 11)",
  },
  {
    id: "classical-solo",
    name: "Indian Classical Solo",
    category: "The Rhythm · Music",
    short: "Raga, rigour, riyaaz.",
    concept:
      "Vocal or instrumental classical performance of 6–8 minutes in any tradition. Judged on shruti, laya, technique and aesthetic depth.",
    venue: "Music Hall",
    timing: "Day 1 · 15:00 – 17:30",
    coordinator: "Meher P. (Grade 12)",
  },
  {
    id: "contemporary-choreo",
    name: "Contemporary Choreography",
    category: "The Movement · Dance",
    short: "Group choreography, contemporary vocabulary.",
    concept:
      "Group of 4–8 dancers presents an original piece up to 5 minutes on a theme released 48 hours before the festival.",
    venue: "Dance Studio + Main Stage",
    timing: "Day 2 · 13:00 – 16:00",
    coordinator: "Ira D. (Grade 11)",
  },
  {
    id: "live-painting",
    name: "Live Painting",
    category: "The Canvas · Fine Arts",
    short: "Three hours, one prompt, an audience of hundreds.",
    concept:
      "Solo participants receive a sealed prompt and create a finished piece in three hours, in view of the public. Any 2D medium.",
    venue: "Central Courtyard",
    timing: "Day 2 · 10:00 – 13:00",
    coordinator: "Rohan K. (Grade 12)",
  },
  {
    id: "installation",
    name: "Collaborative Installation",
    category: "The Canvas · Fine Arts",
    short: "Teams build a piece the festival walks through.",
    concept:
      "Teams of up to 5 design and install a themed piece across the festival weekend. Materials briefed in advance; construction begins Day 1 morning.",
    venue: "Arts Wing Foyer",
    timing: "Day 1 – Day 3 · rolling",
    coordinator: "Sara V. (Grade 12)",
  },
  {
    id: "slam-poetry",
    name: "Slam Poetry",
    category: "The Words · Literary Arts",
    short: "Three minutes. No props. Just words.",
    concept:
      "Original spoken word up to 3 minutes. Judged on writing, delivery and impact. Preliminary rounds Day 1; finals Day 3.",
    venue: "Library Theatre",
    timing: "Day 1 & Day 3",
    coordinator: "Devika R. (Grade 11)",
  },
  {
    id: "debate",
    name: "Parliamentary Debate",
    category: "The Words · Literary Arts",
    short: "British Parliamentary format. Three preliminary rounds.",
    concept:
      "Two-speaker teams debate motions across social, cultural and creative themes. Break rounds and finals judged by an invited panel.",
    venue: "Conference Rooms 1–4",
    timing: "Day 1 – Day 3",
    coordinator: "Yash B. (Grade 12)",
  },
  {
    id: "shortfilm",
    name: "48-Hour Short Film",
    category: "Cross-discipline",
    short: "A prompt on Friday. A screening on Sunday.",
    concept:
      "Teams receive a genre, prop and line of dialogue on Day 1 morning and screen a finished short (max 6 min) on Day 3 evening.",
    venue: "Auditorium",
    timing: "Day 1 – Day 3",
    coordinator: "Nivedita C. (Grade 12)",
  },
];

export const timeline = [
  {
    day: "Day 01",
    date: "Friday",
    title: "Opening & First Sparks",
    color: "#0E2B6F",
    items: [
      { time: "09:30", name: "Opening Ceremony", note: "Lighting of the lamp, festival address, ensemble opening act." },
      { time: "11:00", name: "Preliminary Competitions", note: "Solo Monologue, Slam Poetry heats, Debate round 1." },
      { time: "13:30", name: "Workshops", note: "Voice for the stage, watercolour, songwriting, physical theatre." },
      { time: "18:00", name: "Special Performance", note: "Invited alumni ensemble." },
    ],
  },
  {
    day: "Day 02",
    date: "Saturday",
    title: "The Festival in Full Colour",
    color: "#1FA8E0",
    items: [
      { time: "10:00", name: "Live Painting", note: "Solo artists at work in the courtyard, all day." },
      { time: "13:00", name: "Contemporary Choreography", note: "Group pieces on the main stage." },
      { time: "15:30", name: "Literary Salon", note: "Author reading, panel & open mic." },
      { time: "18:30", name: "Battle of the Bands", note: "Amphitheatre, into the night." },
    ],
  },
  {
    day: "Day 03",
    date: "Sunday",
    title: "Finales, Awards & Farewell",
    color: "#98D24A",
    items: [
      { time: "10:30", name: "Finals — All Disciplines", note: "Stage, Rhythm, Movement, Canvas and Words." },
      { time: "15:00", name: "Flagship Performance", note: "The Afsana Ensemble presents this year's headline work." },
      { time: "18:00", name: "Awards", note: "Category winners, overall trophy, spotlight awards." },
      { time: "20:00", name: "Closing Ceremony", note: "Reflections, festival song and farewell." },
    ],
  },
];

export const quotes = [
  { text: "Art is not what you see, but what you make others see.", author: "Edgar Degas" },
  { text: "There is no must in art because art is free.", author: "Wassily Kandinsky" },
  { text: "Every artist was first an amateur.", author: "Ralph Waldo Emerson" },
  { text: "The purpose of art is washing the dust of daily life off our souls.", author: "Pablo Picasso" },
  { text: "A painter paints, a poet writes, a dancer dances. An artist keeps trying.", author: "Afsana Committee" },
];

export const sponsorTiers = [
  {
    tier: "Curtain Raisers",
    note: "Presenting partners",
    items: ["Aakar Foundation", "Meridian Arts Trust", "Studio Kaleido"],
  },
  {
    tier: "Stage Partners",
    note: "Category partners",
    items: ["Kavya Publishing", "Rhythmhouse Music", "Palette & Co.", "Vayu Dance Co."],
  },
  {
    tier: "Community Partners",
    note: "Supporters of the arts",
    items: [
      "Blue Tokai",
      "Bookmark Café",
      "Ink & Paper",
      "The Reading Room",
      "Studio Verse",
      "Chai Point",
    ],
  },
];

export const team = [
  { name: "Aarohi Sen", role: "Festival Director", dept: "Organising Committee" },
  { name: "Vikram Rao", role: "Creative Lead", dept: "Organising Committee" },
  { name: "Meher Puri", role: "Head — The Rhythm", dept: "Music" },
  { name: "Ananya Mehta", role: "Head — The Stage", dept: "Theatre" },
  { name: "Ira Dutta", role: "Head — The Movement", dept: "Dance" },
  { name: "Rohan Kapoor", role: "Head — The Canvas", dept: "Fine Arts" },
  { name: "Devika Rane", role: "Head — The Words", dept: "Literary Arts" },
  { name: "Sara Verma", role: "Design & Identity", dept: "Design" },
  { name: "Kabir Suri", role: "Production", dept: "Production" },
  { name: "Nivedita Chaudhary", role: "Media & Film", dept: "Media" },
  { name: "Yash Bhalla", role: "Hospitality", dept: "Operations" },
  { name: "Tara Iyer", role: "Outreach", dept: "Community" },
];

export const faqs = [
  {
    q: "Who can participate in Afsana?",
    a: "Afsana welcomes students from partner and invited schools across India. Registration is coordinated through your school's cultural office.",
  },
  {
    q: "Is Afsana open to visitors?",
    a: "Yes — parents, alumni and members of the arts community are warmly invited. Some flagship performances are ticketed to manage seating.",
  },
  {
    q: "Can a school participate in multiple categories?",
    a: "Absolutely. In fact, most partner schools field teams across at least three of the five artistic worlds.",
  },
  {
    q: "Are the workshops open to all delegates?",
    a: "Workshops are open to all registered delegates on a first-come, first-served basis. Sign-ups open on Day 1 morning.",
  },
  {
    q: "How are winners chosen?",
    a: "Each category has a panel of invited artists and educators. Judging criteria are shared with participants in advance for every event.",
  },
  {
    q: "What is the dress code?",
    a: "Performance-appropriate attire for competitions. Otherwise, come dressed for a long, joyful day of art.",
  },
];
