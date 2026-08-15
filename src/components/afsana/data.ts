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
    slug: "rhapsody",
    emoji: "🎸",
    name: "Rhapsody",
    label: "Music",
    blurb:
      "High-voltage performances, electrifying riffs, powerful vocals, and unforgettable stage presence — where bands battle for the ultimate spotlight.",
    hue: "#0E2B6F",
    tint: "rgba(14,43,111,.08)",
  },
  {
    slug: "unbound",
    emoji: "💃",
    name: "Unbound",
    label: "Dance",
    blurb:
      "From classical elegance to hip-hop energy, crews and soloists light up the stage with rhythm, passion, and breathtaking choreography.",
    hue: "#1FA8E0",
    tint: "rgba(31,168,224,.10)",
  },
  {
    slug: "kalateet",
    emoji: "🎭",
    name: "Kalateet",
    label: "Theatre",
    blurb:
      "Compelling stories, expressive performances, and creative stagecraft come together to transform imagination into unforgettable theatre.",
    hue: "#98D24A",
    tint: "rgba(152,210,74,.16)",
  },
  {
    slug: "art",
    emoji: "🎨",
    name: "Art Galli",
    label: "Fine Arts",
    blurb:
      "A vibrant showcase of paintings, sketches, sculptures, installations, and creative expression where every artwork tells its own story.",
    hue: "#0E2B6F",
    tint: "rgba(14,43,111,.06)",
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
  // ---------- DAY 1 ----------
  {
    id: "negative-space",
    name: "Negative Space",
    category: "The Canvas · Fine Arts",
    short: "Create. Reflect. Heal.",
    concept:
      "Art has the ability to express emotions that words often cannot. This workshop invites participants to slow down and reconnect with themselves through the artistic technique of negative space, focusing on what is left out rather than what is added. Through creative expression, participants explore mindfulness, self-reflection, letting go of distractions, and the discovery of meaningful space within themselves.",
    venue: "Art Studio (IC Wing)",
    timing: "Day 1 · 10:30 – 12:00",
    coordinator: "",
  },

  {
    id: "archives",
    name: "Archives",
    category: "The Stage · Theatre",
    short: "History finds its voice.",
    concept:
      "A monologue competition where participants step into the lives of iconic historical personalities whose actions and ideas have shaped societies. Through research, interpretation, and expressive performance, students explore the triumphs, struggles, motivations, and legacies of remarkable individuals, bringing history to life through theatre.",
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
      "An interactive Indian classical music workshop featuring demonstrations of ragas, rhythm, improvisation, and the relationship between melody and tala. Participants also engage with the artist's musical journey and gain insight into the practice, discipline, and possibilities of a career in Indian classical music.",
    venue: "Theatre Studio",
    timing: "Day 1 · 10:30 – 12:00",
    coordinator: "",
  },

  {
    id: "dance-championship",
    name: "Dance Championship",
    category: "The Movement · Dance",
    short: "Find your rhythm.",
    concept:
      "A group dance competition celebrating individuality, creativity, and storytelling through movement. Teams may explore a range of dance styles and fusions, with performances judged on synchronization, musicality, originality, storytelling, and the ability to create a unified artistic identity.",
    venue: "WCH",
    timing: "Day 1 · 10:30 – 12:00",
    coordinator: "",
  },

  {
    id: "silencio",
    name: "Silencio",
    category: "The Stage · Theatre",
    short: "Stories without words.",
    concept:
      "A mime competition challenging participants to communicate stories, emotions, and ideas without spoken words. Through facial expressions, body language, movement, gesture, and carefully constructed performances, participants explore the expressive possibilities of theatre beyond dialogue.",
    venue: "Mini WCH (4th Floor)",
    timing: "Day 1 · 11:00 – 12:00",
    coordinator: "",
  },

  {
    id: "spark-to-screen",
    name: "Spark to Screen",
    category: "Cross-discipline",
    short: "AI meets imagination.",
    concept:
      "An interactive session exploring the evolving relationship between traditional artistic intuition and artificial intelligence. The discussion examines how artists move from ideas to execution in an age where art can be created by hand, digitized, or generated with AI, while asking whether AI limits creativity or expands the creative palette.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 1 · 12:00 – 1:00",
    coordinator: "",
  },

  {
    id: "art-galli-day-1",
    name: "Art Galli",
    category: "The Canvas · Fine Arts",
    short: "A street of stories.",
    concept:
      "An immersive celebration of Indian street culture inspired by truck art, bazaars, community spaces, and the visual language of a desi-retro street. Visitors can wander through interactive spaces, discover artworks, participate in activities, and experience the energy and nostalgia of Art Galli.",
    venue: "3rd Floor",
    timing: "Day 1 · All Day",
    coordinator: "",
  },

  // ---------- DAY 2 ----------
  {
    id: "slam-poetry",
    name: "Slam Poetry",
    category: "The Words · Literary Arts",
    short: "Let your voice resonate.",
    concept:
      "A poetry competition designed to give young wordsmiths a platform to unleash their creativity and bring their unique voices into the spotlight. Participants use spoken word and performance to express their ideas, perspectives, and stories while engaging with the competition's guidelines, timelines, and regulations.",
    venue: "Mini WCH (4th Floor)",
    timing: "Day 2 · 8:00 – 2:00",
    coordinator: "",
  },

  {
    id: "hip-hop-101",
    name: "Hip Hop 101",
    category: "The Movement · Dance",
    short: "Learn. Battle. Perform.",
    concept:
      "A high-energy workshop exploring the foundations, history, culture, and evolution of hip-hop dance. Participants learn grooves, techniques, rhythm, musicality, and movement vocabulary while exploring how energy, timing, texture, and intention give movement its identity. The workshop culminates in a battle celebrating creativity, individuality, freedom, and self-expression.",
    venue: "Dance Room",
    timing: "Day 2 · 9:00 – 11:00",
    coordinator: "",
  },

  {
    id: "fourth-wall",
    name: "The Fourth Wall",
    category: "The Stage · Theatre",
    short: "One stage. Endless stories.",
    concept:
      "A one-act play competition where participants devise an original theatrical performance inspired by a single abstract word. Ideas such as Labels, Time, Connections, Freedom, or Silence become starting points for teams to explore personal experiences, social realities, and creative interpretations through collaborative theatre-making.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 2 · 9:00 – 12:00",
    coordinator: "",
  },

  {
    id: "take-one",
    name: "Take One",
    category: "Cross-discipline",
    short: "From idea to screen.",
    concept:
      "An immersive filmmaking workshop that demystifies the process of taking an idea from page to screen. Participants work collaboratively to pitch, write, shoot, and edit original short films while exploring the creative and technical foundations of cinema and developing the skills needed for filmmaking.",
    venue: "Theatre Studio",
    timing: "Day 2 · 9:00 – 12:00",
    coordinator: "",
  },

  {
    id: "art-heist",
    name: "Art Heist",
    category: "The Canvas · Fine Arts",
    short: "Steal the essence. Make it yours.",
    concept:
      "A visual art competition challenging participants to study the visual language of influential Indian artists and transform those influences into original artwork. Participants explore elements such as colour, composition, symbolism, linework, technique, and subject before reinterpreting them through their own creative voice.",
    venue: "Old Art Rooms",
    timing: "Day 2 · 9:00 – 12:00",
    coordinator: "",
  },

  {
    id: "journey-of-jazz",
    name: "The Journey of Jazz in Delhi",
    category: "The Rhythm · Music",
    short: "Jazz has a story.",
    concept:
      "An interactive session exploring the history and evolution of Delhi's jazz scene, tracing the musicians, venues, independent collectives, and cultural influences that shaped the city's musical identity. The session combines cultural insights and anecdotes with an interactive Q&A and live musical experience.",
    venue: "Dance Room 3 & 4",
    timing: "Day 2 · 12:00 – 1:00",
    coordinator: "",
  },

  {
    id: "tradition-in-motion",
    name: "Tradition in Motion",
    category: "The Movement · Dance",
    short: "Tradition in motion.",
    concept:
      "An immersive session led by a guest artist exploring the beauty of Indian classical dance through rhythm, expression, storytelling, and movement. Participants engage in discussion, ask questions, and discover how an ancient art form continues to evolve and remain relevant in the present.",
    venue: "Dance Room 1",
    timing: "Day 2 · 12:00 – 1:00",
    coordinator: "",
  },

  {
    id: "step-inside",
    name: "Step Inside",
    category: "The Canvas · Fine Arts",
    short: "Walk through art.",
    concept:
      "An immersive Art Galli experience inspired by Indian truck art and the visual culture of Indian streets. Visitors can explore different spaces designed around community, nostalgia, culture, conversation, and creativity, creating an experience where art is not simply viewed but entered and experienced.",
    venue: "Dance Room 1 & 2",
    timing: "Day 2 · 12:00 – 2:30",
    coordinator: "",
  },

  {
    id: "mitti-studio",
    name: "Mitti Studio",
    category: "The Canvas · Fine Arts",
    short: "Shape your imagination.",
    concept:
      "A hands-on creative session inviting participants to work directly with clay, natural textures, and living seeds. Inspired by the Gaia Hypothesis and the connections between soil, human health, trees, biodiversity, and food systems, participants create physical artefacts celebrating India's ecological and cultural heritage.",
    venue: "Art Room 3",
    timing: "Day 2 · 1:30 – 2:30",
    coordinator: "",
  },


  // ---------- DAY 3 ----------
  {
    id: "university-fair-students",
    name: "University Fair",
    category: "Cross-discipline",
    short: "Where passion meets profession.",
    concept:
      "An arts-focused university fair bringing together institutions across music, theatre, film, design, dance, visual arts, and media. Students can interact directly with university representatives to explore admissions, creative portfolios, career pathways, and how artistic interests can translate into a professional future.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 3 · 9:00 – 11:00",
    coordinator: "",
  },

  {
    id: "spic-macay",
    name: "SPIC MACAY Performance",
    category: "The Rhythm · Music",
    short: "Tradition on stage.",
    concept:
      "A special performance presented in association with SPIC MACAY, bringing students and parents closer to India's rich classical and traditional performing arts heritage through a live artistic experience.",
    venue: "Mini WCH (4th Floor)",
    timing: "Day 3 · 9:00 – 10:00",
    coordinator: "",
  },

  {
    id: "mini-film-fest",
    name: "Mini Film Fest",
    category: "Cross-discipline",
    short: "Stories on screen.",
    concept:
      "A showcase celebrating student filmmaking and the journey from idea to screen. Building on the Take One filmmaking experience, participants bring together scripting, direction, cinematography, editing, and visual storytelling to present original short films.",
    venue: "Theatre Studio",
    timing: "Day 3 · 9:30 – 10:00",
    coordinator: "",
  },


  {
    id: "judges-performance",
    name: "Performance by the Judges",
    category: "The Rhythm · Music",
    short: "The masters take the stage.",
    concept:
      "A special live performance by the judges of Rhapsody, giving attendees an opportunity to experience the artistry and musicianship of the professionals evaluating the festival's bands.",
    venue: "WCH",
    timing: "Day 3 · 10:00 – 11:00",
    coordinator: "",
  },

  {
    id: "inter-school-rhapsody",
    name: "Rhapsody · Inter-School",
    category: "The Rhythm · Music",
    short: "Where talent takes the stage.",
    concept:
      "The flagship inter-school music competition, bringing together student bands for live performances before a professional jury. Bands showcase their musical identity through original music or fresh interpretations while demonstrating musicality, coordination, technical skill, stage presence, and overall performance.",
    venue: "WCH",
    timing: "Day 3 · 11:00 – 12:30",
    coordinator: "",
  },

  {
    id: "closing-ceremony",
    name: "Closing Ceremony",
    category: "Festival",
    short: "The final chapter.",
    concept:
      "The closing celebration of Afsana, bringing together participants, artists, judges, parents, and the school community to mark the culmination of three days of artistic exchange, performance, experimentation, and collaboration.",
    venue: "WCH",
    timing: "Day 3 · 12:30 – 1:00",
    coordinator: "",
  },

  {
    id: "intra-school-rhapsody",
    name: "Rhapsody · Intra-School",
    category: "The Rhythm · Music",
    short: "Our voices. Our stage.",
    concept:
      "An intra-school celebration of music featuring student performers from within the school community. The event gives young musicians the opportunity to perform live, experiment with their sound, and celebrate the collaborative spirit of Rhapsody.",
    venue: "WCH",
    timing: "Day 3 · 1:30 – 2:30",
    coordinator: "",
  },

  {
    id: "rhapsody-prize-distribution",
    name: "Prize Distribution · Rhapsody",
    category: "Festival",
    short: "Celebrating musical excellence.",
    concept:
      "The final recognition ceremony for Rhapsody, celebrating the musicians, bands, and performances that stood out across the competition and recognising their creativity, musicianship, stage presence, and contribution to the festival.",
    venue: "WCH",
    timing: "Day 3 · 2:30 – 3:00",
    coordinator: "",
  },
];
export const timeline = [
  {
    day: "Day 01",
    date: "20 August",
    title: "Opening & First Sparks",
    color: "#0E2B6F",
    items: [
      {
        time: "08:30",
        name: "Welcoming of Attendees",
        note: "Registration and welcome at the Double Height Area.",
      },
      {
        time: "09:00",
        name: "Opening Ceremony",
        note: "The festival officially begins at WCH.",
      },
      {
        time: "10:30",
        name: "Negative Space - Art Therapy Workshop",
        note: "Art therapy workshop at the Art Studio (IC Wing).",
      },
      {
        time: "10:30",
        name: "Archives (Monologue Competition)",
        note: "Monologue competition in Theatre Room 1 and 2.",
      },
      {
        time: "10:30",
        name: "Swaranjali (Indian Music Workshop)",
        note: "Indian music workshop at the Theatre Studio (IC Wing).",
      },
      {
        time: "10:30",
        name: "Dance Championship",
        note: "Dance competition at WCH.",
      },
      {
        time: "11:00",
        name: "Silencio (Mime Competition)",
        note: "Mime competition at Mini WCH (4th Floor).",
      },
      {
        time: "12:00",
        name: "Guest Speaker Session: Spark to Screen (AI & Arts)",
        note: "Guest speaker session exploring AI and the arts at Mini WCH (IC Wing).",
      },
      {
        time: "13:00",
        name: "Lunch",
        note: "Lunch at the Basketball Court.",
      },
      {
        time: "All Day",
        name: "Art Galli",
        note: "ART GALLI · 3rd Floor · All Day.",
      },
    ],
  },

  {
    day: "Day 02",
    date: "21 August",
    title: "The Festival in Full Colour",
    color: "#1FA8E0",
    items: [
      {
        time: "08:00",
        name: "Slam Poetry Competition",
        note: "Slam Poetry Competition at Mini WCH (4th Floor).",
      },
      {
        time: "08:30",
        name: "Welcoming of Attendees",
        note: "Registration and welcome at the Double Height Area.",
      },
      {
        time: "09:00",
        name: "Hip Hop 101 (Dance Workshop & Battle)",
        note: "Dance workshop and battle in Theatre Room 1 & 2.",
      },
      {
        time: "09:00",
        name: "The Fourth Wall (One-Act Play Competition)",
        note: "One-act play competition at Mini WCH (IC Wing).",
      },
      {
        time: "09:00",
        name: "Take One (Film Making Workshop)",
        note: "Filmmaking workshop at the Theatre Studio.",
      },
      {
        time: "09:00",
        name: "Art Heist Competition",
        note: "Fine arts competition in Art Room 2.",
      },
      {
        time: "12:00",
        name: "The Journey of Jazz in Delhi",
        note: "Jazz-focused session in Dance Room 3 & 4.",
      },
      {
        time: "12:00",
        name: "Tradition in Motion",
        note: "Traditional dance session in Dance Room 1.",
      },
      {
        time: "12:00",
        name: "Step Inside (Immersive Art Galli)",
        note: "Immersive Art Galli experience in Dance Room 1 & 2.",
      },
      {
        time: "13:00",
        name: "Lunch",
        note: "Lunch at the Basketball Court.",
      },
      {
        time: "13:30",
        name: "Mitti Studio",
        note: "Clay-focused creative workshop in Art Room 3.",
      },
      {
        time: "All Day",
        name: "Art Galli",
        note: "ART GALI · 3rd Floor · All Day.",
      },
    ],
  },

  {
    day: "Day 03",
    date: "22 August",
    title: "Finales, Performances & Farewell",
    color: "#98D24A",
    items: [
      {
        time: "08:30",
        name: "Welcoming of Attendees",
        note: "Registration and welcome at Double Heights.",
      },
      {
        time: "09:00",
        name: "University Fair (For Students)",
        note: "University Fair for students at IC Wing Mini WCH.",
      },
      {
        time: "09:00",
        name: "SPIC MACAY Performance (For Parents)",
        note: "SPIC MACAY performance for parents at Mini WCH (4th Floor).",
      },
      {
        time: "09:30",
        name: "Mini Film Fest - Culmination of Film Making Workshop",
        note: "The culmination of the filmmaking workshop at the Theatre Studio.",
      },
      {
        time: "10:00",
        name: "University Fair (For Parents)",
        note: "University Fair for parents at IC Wing Mini WCH.",
      },
      {
        time: "10:00",
        name: "Performance by the Judges (Rhapsody)",
        note: "Special judges' performance at WCH.",
      },
      {
        time: "11:00",
        name: "Inter-School Rhapsody",
        note: "Inter-school Rhapsody performance at WCH.",
      },
      {
        time: "12:30",
        name: "Closing Ceremony",
        note: "Festival closing ceremony at WCH.",
      },
      {
        time: "13:00",
        name: "Lunch",
        note: "Lunch at the Basketball Court.",
      },
      {
        time: "13:30",
        name: "Intra-School Rhapsody",
        note: "Intra-school Rhapsody at WCH.",
      },
      {
        time: "14:30",
        name: "Prize Distribution of Intra-School Rhapsody",
        note: "Prize distribution for Intra-School Rhapsody at WCH.",
      },
    ],
  },
];

export const quotes = [
  { text: "Art is not what you see, but what you make others see.", author: "Edgar Degas" },
  { text: "There is no must in art because art is free.", author: "Wassily Kandinsky" },
  { text: "Every artist was first an amateur.", author: "Ralph Waldo Emerson" },
  { text: "The purpose of art is washing the dust of daily life off our souls.", author: "Pablo Picasso" },
  { text: "A painter paints, a poet writes, a dancer dances. An artist keeps trying.", author: "Afsana Committee" },
  { text: "Every student is a storyteller; only their medium differs.", author: "Afsana Committee" },
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
  { name: "Vidhi Dawar", role: "Head - Marketing", dept: "Marketing" },
  { name: "Vihaan Jindal", role: "Head - Tech", dept: "Tech" },
  
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
