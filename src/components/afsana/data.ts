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
    id: "art-therapy-workshop",
    name: "Art Therapy Workshop",
    category: "The Canvas · Fine Arts",
    short: "Create. Reflect. Heal.",
    concept:
      "Participants will take part in a retro-inspired art therapy workshop focused on creativity, mindfulness, and personal expression under the guidance of a facilitator. No prior artistic experience is required, and all materials will be provided.",
    venue: "Art Studio (IC Wing)",
    timing: "Day 1 · 10:30 – 12:00",
    coordinator: "",
  },
  {
    id: "voices-from-the-past",
    name: "Voices from the Past Competition",
    category: "The Stage · Theatre",
    short: "",
    concept: "",
    venue: "Theatre Room 1 and 2",
    timing: "Day 1 · 10:30 – 12:00",
    coordinator: "",
  },
  {
    id: "swaranjali",
    name: "Swaranjali",
    category: "The Rhythm · Music",
    short: "Raga & Rigour.",
    concept:
      "An interactive workshop with a professional Indian classical musician featuring demonstrations of ragas, rhythm, improvisation, and an interactive discussion about the artist’s musical journey and career.",
    venue: "Theatre Studio",
    timing: "Day 1 · 10:30 – 12:00",
    coordinator: "",
  },
  {
    id: "dance-championship",
    name: "Dance Championship",
    category: "The Movement · Dance",
    short: "",
    concept: "",
    venue: "WCH",
    timing: "Day 1 · 10:30 – 12:00",
    coordinator: "",
  },
  {
    id: "ai-and-arts",
    name: "Guest Speaker - AI & Arts",
    category: "Cross-discipline",
    short: "AI: Boon or Bane?",
    concept:
      "An interactive guest speaker session exploring the impact of artificial intelligence on the creative arts. Students will engage in discussion and a Q&A on the opportunities and challenges AI presents for artists.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 1 · 12:00 – 1:00",
    coordinator: "",
  },
  {
    id: "silhouettes-workshop",
    name: "Silhouettes Workshop",
    category: "The Stage · Theatre",
    short: "",
    concept: "",
    venue: "Theatre Room",
    timing: "Day 1 · 12:00 – 1:00",
    coordinator: "",
  },
  {
    id: "comedy-show",
    name: "Comedy Show",
    category: "The Stage · Theatre",
    short: "",
    concept: "",
    venue: "WCH",
    timing: "Day 1 · 1:30 – 2:30",
    coordinator: "",
  },

  // ---------- DAY 2 ----------
  {
    id: "hip-hop-workshop",
    name: "Dance Workshop & Battle - Hip Hop",
    category: "The Movement · Dance",
    short: "Learn. Battle. Perform.",
    concept:
      "A high-energy, interactive workshop led by a professional hip hop choreographer. Participants will learn the foundations of hip hop, explore its journey into Indian dance culture, and perform in a friendly battle at the end of the session.",
    venue: "Dance Room",
    timing: "Day 2 · 9:00 – 11:00",
    coordinator: "",
  },
  {
    id: "fourth-wall",
    name: "The Fourth Wall Competition",
    category: "The Stage · Theatre",
    short: "One stage. Endless stories.",
    concept:
      "A one-act play competition where teams present original productions inspired by an abstract prompt. Performances are judged on storytelling, originality, characterization, stagecraft, and overall impact.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 2 · 9:00 – 12:00",
    coordinator: "",
  },
  {
    id: "take-one-workshop",
    name: "Take One Workshop",
    category: "Cross-discipline",
    short: "",
    concept: "",
    venue: "Theatre Studio",
    timing: "Day 2 · 9:00 – 12:00",
    coordinator: "",
  },
  {
    id: "art-heist",
    name: "Art Heist Competition",
    category: "The Canvas · Fine Arts",
    short: "Retro reimagined.",
    concept:
      "Participants reinterpret the visual language of Retro India and Indian Maximalism through an original artwork inspired by vintage advertisements, Bollywood posters, hand-painted signs, and matchbox art. Entries are judged on creativity, interpretation, technique, and presentation.",
    venue: "Old Art Rooms",
    timing: "Day 2 · 9:00 – 12:00",
    coordinator: "",
  },
  {
    id: "traditional-dance-speaker",
    name: "Traditional Dance Speaker",
    category: "The Movement · Dance",
    short: "Tradition in motion.",
    concept:
      "An interactive guest speaker session where a renowned traditional dancer shares their artistic journey, the cultural significance of their dance form, and engages students in an open Q&A.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 2 · 12:00 – 1:00",
    coordinator: "",
  },
  {
    id: "blue-notes-speaker",
    name: "Blue Notes Speaker (Jazz)",
    category: "The Rhythm · Music",
    short: "",
    concept: "",
    venue: "Theatre Studio",
    timing: "Day 2 · 12:00 – 1:00",
    coordinator: "",
  },
  {
    id: "immersive-art-galli",
    name: "Immersive Art Galli",
    category: "The Canvas · Fine Arts",
    short: "Walk through art.",
    concept:
      "An immersive walk-through exhibition inspired by Indian truck art and highway culture, featuring interactive installations, photography zones, and experiential displays that visitors can explore at their own pace.",
    venue: "MYP Classroom",
    timing: "Day 2 · 12:00 – 2:30",
    coordinator: "",
  },
  {
    id: "clay-modelling-workshop",
    name: "Clay Modelling Workshop",
    category: "The Canvas · Fine Arts",
    short: "Shape your imagination.",
    concept:
      "A guided hands-on workshop where participants learn clay modelling techniques and create original sculptures inspired by Retro India, vintage advertisements, and traditional Indian design motifs.",
    venue: "Art Room",
    timing: "Day 2 · 1:30 – 2:30",
    coordinator: "",
  },
  {
    id: "slam-poetry",
    name: "Slam Poetry Competition",
    category: "The Words · Literary Arts",
    short: "Words that resonate.",
    concept:
      "A two-round slam poetry competition featuring original spoken-word performances in Hindi and English. Finalists showcase prepared pieces before taking on an impromptu creative challenge judged on originality, delivery, and impact.",
    venue: "Mini WCH (4th Floor)",
    timing: "Day 2 · 8:00 – 2:00",
    coordinator: "",
  },

  // ---------- DAY 3 ----------
  {
    id: "university-fair",
    name: "University Fair",
    category: "Cross-discipline",
    short: "Explore your future.",
    concept:
      "A university exhibition featuring institutions specializing in film, art, design, music, dance, media, and other creative disciplines. Students can interact directly with university representatives to learn about admissions, portfolios, auditions, and career pathways.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 3 · 8:00 – 10:00",
    coordinator: "",
  },
  {
    id: "mini-film-fest",
    name: "Mini Film Fest",
    category: "Cross-discipline",
    short: "",
    concept: "",
    venue: "Theatre Studio",
    timing: "Day 3 · 10:00 – 12:00",
    coordinator: "",
  },
  {
    id: "sound-check",
    name: "Sound Check",
    category: "The Rhythm · Music",
    short: "Behind every great performance.",
    concept:
      "Final technical rehearsals for Battle of the Bands finalists, allowing performers to test instruments, stage setup, monitor mixes, and lighting before the showcase.",
    venue: "WCH",
    timing: "Day 3 · 12:00 – 1:00",
    coordinator: "",
  },
  {
    id: "judges-performance",
    name: "Judges Performance",
    category: "The Rhythm · Music",
    short: "",
    concept: "",
    venue: "WCH",
    timing: "Day 3 · 1:00 – 1:30",
    coordinator: "",
  },
  {
    id: "battle-of-the-bands",
    name: "Battle of the Bands",
    category: "The Rhythm · Music",
    short: "Where talent takes the stage.",
    concept:
      "The flagship music competition of Rhapsody, bringing together school bands for live performances before a professional jury. Bands are judged on musicality, technical proficiency, originality, stage presence, and audience engagement.",
    venue: "WCH",
    timing: "Day 3 · 1:30 – 3:00",
    coordinator: "",
  },
  {
    id: "prize-distribution",
    name: "Prize Distribution",
    category: "Festival",
    short: "Celebrating excellence.",
    concept:
      "The closing ceremony recognizing winners across all competitions, celebrating outstanding performances and creative achievements throughout the festival.",
    venue: "WCH",
    timing: "Day 3 · 3:00 – 3:30",
    coordinator: "",
  },
];
export const timeline = [
  {
    day: "Day 01",
    date: "Friday",
    title: "Opening & First Sparks",
    color: "#0E2B6F",
    items: [
      { time: "08:15", name: "Welcoming of Attendees", note: "Registration and Welcome" },
      { time: "09:00", name: "Opening Ceremony", note: "Lighting of the lamp, festival address, ensemble opening act." },
      { time: "10:30", name: "Art Therapy Workshop", note: "Creative expression through visual and performance-based activities." },
      { time: "10:30", name: "Voices from the Past Competition", note: "A historical storytelling and performance showcase." },
      { time: "10:30", name: "Swaranjali", note: "Classical music performance with focus on raga and laya." },
      { time: "10:30", name: "Dance Championship", note: "A high-energy dance competition featuring multiple styles." },
      { time: "12:00", name: "Guest Speaker - AI and Arts", note: "Invited alumni ensemble." },
      { time: "12:00", name: "Silhouettes Workshop", note: "Invited alumni ensemble." },
      { time: "01:30", name: "Comedy Show", note: "Invited alumni ensemble." },
    ],
  },
  {
    day: "Day 02",
    date: "Saturday",
    title: "The Festival in Full Colour",
    color: "#1FA8E0",
    items: [
      { time: "09:00", name: "The Fourth Wall Competition", note: "Solo artists at work in the courtyard, all day." },
      { time: "09:00", name: "Take One Workshop", note: "Solo artists at work in the courtyard, all day." },
      { time: "09:00", name: "Art Heist Competition", note: "Solo artists at work in the courtyard, all day." },
      { time: "12:00", name: "Traditional Dance Speaker", note: "Group pieces on the main stage." },
      { time: "09:00", name: "Blue Notes Speaker", note: "Solo artists at work in the courtyard, all day." },
      { time: "12:00", name: "Immersive Art Gali", note: "Author reading, panel & open mic." },
      { time: "01:30", name: "Clay Modelling Workshop", note: "Amphitheatre, into the night." },
    ],
  },
  {
    day: "Day 03",
    date: "Sunday",
    title: "Finales, Awards & Farewell",
    color: "#98D24A",
    items: [
      { time: "08:00", name: "University Fair", note: "Stage, Rhythm, Movement, Canvas and Words." },
      { time: "09:00", name: "Mini Film Fest", note: "The Afsana Ensemble presents this year's headline work." },
      { time: "10:00", name: "Rhapsody- Battle of the Bands (InterSchool)", note: "Category winners, overall trophy, spotlight awards." },
      { time: "12:30", name: "Prize Distribution", note: "Reflections, festival song and farewell." },
      { time: "01:30", name: "Rhapsody (IntraSchool)", note: "Solo artists at work in the courtyard, all day." },
      { time: "02:30", name: "Prize Distribution", note: "Solo artists at work in the courtyard, all day." },
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
  { name: "Tvisha Das", role: "Director", dept: "Organising Committee" },
  { name: "Riaan Sabharwal", role: "Deputy Director", dept: "Organising Committee" },
  { name: "Aanya Roy", role: "Deputy Director", dept: "Organising Committee" },
  { name: "Anaaya Chawla", role: "Head - Curation", dept: "Curation " },
  { name: "Ananya Ahluwalia", role: "Head — Outreach", dept: "Outreach" },
  { name: "Vian Jain", role: "Head — Human Resources", dept: "HR" },
  { name: "Shaurya Singh", role: "Head — Finance", dept: "Finance" },
  { name: "Aarav Singh", role: "Head - Logistics", dept: "Logistics" },
  { name: "Vania Pradhan", role: "Head - Design", dept: "Design" },
  { name: "Vihaan Jindal", role: "Head - Tech", dept: "Tech" },
  { name: "Vidhi Dawar", role: "Head - Marketing", dept: "Marketing" },
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
