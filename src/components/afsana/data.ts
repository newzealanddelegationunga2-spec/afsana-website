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
    label: "Battle of the Bands",
    blurb:
      "High-voltage performances, electrifying riffs, powerful vocals, and unforgettable stage presence — where bands battle for the ultimate spotlight.",
    hue: "#0E2B6F",
    tint: "rgba(14,43,111,.08)",
  },
  {
    slug: "8-beats",
    emoji: "💃",
    name: "8 Beats",
    label: "Dance",
    blurb:
      "From classical elegance to hip-hop energy, crews and soloists light up the stage with rhythm, passion, and breathtaking choreography.",
    hue: "#1FA8E0",
    tint: "rgba(31,168,224,.10)",
  },
  {
    slug: "kalateeth",
    emoji: "🎭",
    name: "Kalateeth",
    label: "Theatre",
    blurb:
      "Compelling stories, expressive performances, and creative stagecraft come together to transform imagination into unforgettable theatre.",
    hue: "#98D24A",
    tint: "rgba(152,210,74,.16)",
  },
  {
    slug: "art-galli",
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
  {
    id: "art-therapy-workshop",
    name: "Art Therapy Workshop",
    category: "The Canvas · Fine Arts",
    short: "Create. Reflect. Heal.",
    concept:
      "Art has the ability to express emotions that words often cannot. This workshop invites participants to slow down and reconnect with themselves through the artistic technique of negative space, focusing on what is left out rather than what is added. Through creative expression, participants explore mindfulness, self-reflection, letting go of distractions, and the discovery of meaningful space within themselves.",
    venue: "Art Studio (IC Wing)",
    timing: "Day 1 · 10:30 – 12:00",
    coordinator: "",
  },
  {
    id: "voices-from-the-past",
    name: "Voices from the Past Competition",
    category: "The Stage · Theatre",
    short: "History finds its voice.",
    concept:
      "A monologue competition where participants step into the lives of iconic historical personalities whose actions and ideas have shaped societies. Through careful research, thoughtful interpretation, and expressive performance, students explore the triumphs, struggles, motivations, and legacies of remarkable individuals, bringing history to life through the power of theatre.",
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
    short: "Find your rhythm.",
    concept:
      "A group dance competition celebrating individuality, creativity, and storytelling through movement. Teams may explore any dance style or fusion, including Indian classical, contemporary, hip-hop, jazz, folk, waacking, locking, and ballet. Performances are judged on synchronization, musicality, originality, meaningful storytelling, and the team’s ability to create a unified artistic identity.",
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
      "An interactive guest speaker session exploring the evolving relationship between traditional artistic intuition and artificial intelligence. The session examines how artists move from ideas to execution in an age where art can be created by hand, digitized, or generated with AI, while exploring whether AI is limiting creativity or expanding the creative palette.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 1 · 12:00 – 1:00",
    coordinator: "",
  },
  {
    id: "silhouettes-workshop",
    name: "Silhouettes Workshop",
    category: "The Stage · Theatre",
    short: "Stories without words.",
    concept:
      "The brochure does not provide a standalone concept for an event titled Silhouettes Workshop. The closest documented theatre event is Silencio, a mime competition focused on telling stories through facial expressions, body language, and movement without spoken words.",
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
      "A high-energy workshop exploring the foundations, history, culture, and evolution of hip-hop dance. Guided by an experienced choreographer, participants learn grooves, techniques, rhythm, and musicality while exploring how changes in energy, timing, texture, and intention can give movement a unique identity. The workshop culminates in a battle celebrating creativity, individuality, freedom, and self-expression.",
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
      "A one-act play competition where participants devise an original theatrical performance inspired by a single abstract word. Themes such as Labels, Time, Connections, Freedom, or Silence become starting points for teams to explore personal experiences, social realities, and creative interpretations through collaborative theatre-making.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 2 · 9:00 – 12:00",
    coordinator: "",
  },
  {
    id: "take-one-workshop",
    name: "Take One Workshop",
    category: "Cross-discipline",
    short: "From idea to screen.",
    concept:
      "An immersive filmmaking workshop that demystifies the process of taking an idea from page to screen. Participants work collaboratively in production teams to pitch, write, shoot, and edit original short films while exploring the creative and technical foundations of cinema, preparing them for the festival’s filmmaking competition.",
    venue: "Theatre Studio",
    timing: "Day 2 · 9:00 – 12:00",
    coordinator: "",
  },
  {
    id: "art-heist",
    name: "Art Heist Competition",
    category: "The Canvas · Fine Arts",
    short: "Steal the essence. Make it yours.",
    concept:
      "A visual art competition challenging participants to study the visual language of influential Indian artists and transform their influences into original artwork. Participants identify elements such as colour, composition, symbolism, linework, technique, or subject from artists including M.F. Husain, S.H. Raza, Amrita Sher-Gil, Jamini Roy, Tyeb Mehta, F.N. Souza, Raja Ravi Varma, and Nalini Malani, then reinterpret those ideas in their own creative voice.",
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
      "An immersive workshop led by a guest artist exploring the beauty of Indian classical dance through rhythm, expression, storytelling, and movement. Participants engage in discussion, ask questions, and share their own artistic journeys while discovering how an ancient art form continues to evolve and remain relevant today.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 2 · 12:00 – 1:00",
    coordinator: "",
  },
  {
    id: "blue-notes-speaker",
    name: "Blue Notes Speaker (Jazz)",
    category: "The Rhythm · Music",
    short: "Jazz has a story.",
    concept:
      "An interactive session exploring the history and evolution of Delhi’s jazz scene, tracing the musicians, venues, independent collectives, and cultural influences that shaped the city’s musical identity. The session combines cultural insights and anecdotes with an interactive Q&A and live session, giving students the opportunity to experience jazz as a living and evolving form of artistic expression.",
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
      "An immersive experience inspired by Indian truck art and the visual culture of Indian streets. Art Gali brings together a bazaar, community hub, social adda, tribute to Indian cultural icons, and an archive of the school’s arts community, allowing visitors to wander, shop, create, listen, and participate while experiencing the nostalgia and energy of a desi retro street.",
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
      "A hands-on creative session inviting participants to work directly with clay, natural textures, and living seeds. Inspired by the Gaia Hypothesis and the connections between soil, human health, trees, biodiversity, and food systems, participants create physical artefacts that celebrate India’s ecological and cultural heritage.",
    venue: "Art Room",
    timing: "Day 2 · 1:30 – 2:30",
    coordinator: "",
  },
  {
    id: "slam-poetry",
    name: "Slam Poetry Competition",
    category: "The Words · Literary Arts",
    short: "Let your voice resonate.",
    concept:
      "A featured poetry competition designed to give young wordsmiths a platform to unleash their creativity and bring their unique voices into the spotlight. Participants use spoken word and performance to express their ideas, perspectives, and stories while engaging with the competition’s guidelines, timelines, and regulations.",
    venue: "Mini WCH (4th Floor)",
    timing: "Day 2 · 8:00 – 2:00",
    coordinator: "",
  },

  // ---------- DAY 3 ----------
  {
    id: "university-fair",
    name: "University Fair",
    category: "Cross-discipline",
    short: "Where passion meets profession.",
    concept:
      "An arts-focused university fair bringing together leading national and global institutions across music, theatre, film, design, dance, visual arts, and media. Students and parents can interact directly with university representatives to explore admissions, creative portfolios, career pathways, and how artistic talent can translate into a professional future.",
    venue: "Mini WCH (IC Wing)",
    timing: "Day 3 · 8:00 – 10:00",
    coordinator: "",
  },
  {
    id: "mini-film-fest",
    name: "Mini Film Fest",
    category: "Cross-discipline",
    short: "Stories on screen.",
    concept:
      "A showcase celebrating student filmmaking and the journey from idea to screen. Building on the Take One filmmaking experience, students explore storytelling through original short films, bringing together scriptwriting, direction, cinematography, editing, and visual storytelling to create films that reflect their perspectives and artistic vision.",
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
      "The flagship music competition of Rhapsody, bringing together student bands from across schools for live performances. Bands showcase their unique sound through original music or fresh takes on well-known songs and are judged on musicality, stage presence, coordination, and overall performance.",
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
      "The closing ceremony recognizing winners across the festival’s competitions and celebrating outstanding performances and creative achievements throughout Afsana.",
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
