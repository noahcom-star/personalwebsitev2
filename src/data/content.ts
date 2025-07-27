// Content data for the personal website

export interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
  status: 'current' | 'past';
  showLink?: boolean;
}

export interface SubstackData {
  url: string;
  blurb: string;
  stats: {
    subscribers: string;
    schedule: string;
  };
}

export const projects: Project[] = [
  {
    title: "Antifragility Labs",
    description: "SEO/GEO agency helping businesses rank for both search engines and AI. building internal software to eventually flip inside out and turn into a startup. current clients include Product Market Fit podcast, Mistral Venture Partners, and north&nova.",
    link: "https://antifragilitylabs.com",
    tech: ["SEO", "AI Optimization", "Python", "Data Analytics", "GEO"],
    status: "current"
  },
  {
    title: "Armilla AI",
    description: "Y Combinator-backed AI insurance startup ($5M+ raised). drove 12x increase in impressions (5.46K → 66.2K), 5x increase in clicks, ranked on page 1 for high-intent KWs like 'AI insurance' (unranked before), grew backlinks 5x (1,379 → 7,706), and optimized for AI citations in ChatGPT, Perplexity, Claude.",
    link: "https://armilla.ai",
    tech: ["SEO", "AI Optimization", "Analytics", "Content Strategy", "GEO"],
    status: "current"
  },
  {
    title: "The Point One",
    description: "my Substack documenting the journey from '0 to 0.1' — sharing raw perspectives on life, startups, and entrepreneurship from a 17-year-old's lens. weekly essays and newsletters exploring the early stages of building something meaningful.",
    link: "https://thepointone.co",
    tech: ["Writing", "Substack", "Content Strategy", "Storytelling", "Newsletter"],
    status: "current"
  },
  {
    title: "CoVenture",
    description: "first-ever network for ambitious, entrepreneurial teens to connect and build cool stuff. hustled my way to 100+ users and came close to partnering with Clemson and Waterloo for campus expansion before shutting it down to chase better opportunities.",
    link: "https://coventure-demo.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Community Building"],
    status: "past"
  },
  {
    title: "Built for Impact",
    description: "startup with support from U of T Rotman & Western Ivey. scaled outreach from 0 to 10,000+ users in less than 2 weeks, then worked on product and marketing to drive growth and user engagement.",
    link: "https://builtforimpact.ca",
    tech: ["Growth Marketing", "Product Strategy", "Analytics", "User Acquisition"],
    status: "past",
    showLink: false
  },
  {
    title: "Marketing / Consulting for SMEs",
    description: "Wanted to find random ways to make money in high school so I did marketing for SMEs and eventually made decent money for a high-schooler. One of my favourite projects was coding a software that pulled info from social media (like Instagram) that then leveraged AI to assist with targeted ads.",
    link: "https://social-ai-demo.vercel.app",
    tech: ["Python", "Instagram API", "AI/ML", "Advertising APIs", "Data Analytics"],
    status: "past",
    showLink: false
  },
  {
    title: "MovItiative",
    description: "mini charity launched in grade 7 (2019) to support cancer research after seeing everyone around me affected by cancer. grew from solo project to 20+ team members, scaled fundraising 10x, now spreading across school boards in Ontario.",
    link: "https://movitivate.org",
    tech: ["Community Organizing", "Fundraising", "Event Planning", "Social Impact"],
    status: "past",
    showLink: false
  }
];

export const substack: SubstackData = {
  url: "https://www.thepointone.co/",
  blurb: "i believe that entrepreneurship is its own dimension. launching a startup means entering uncharted territory -- you can't plan more than five steps ahead when existing solutions don't exist, so everyone's just figuring it out as they stumble through unknown terrain. in 0 to 0.1, you watch a 17 y/o (me) find their way through this \"dimension.\" it's a raw look at the power of being a beginner and the insights that come with it.",
  stats: {
    subscribers: "40",
    schedule: "Bi-weekly"
  }
};

export interface ObsessionsData {
  books: string[];
  people: string[];
  rabbitHoles: string[];
  doodleUrl: string;
}

export const obsessions: ObsessionsData = {
  books: [
    "Sapiens - Yuval Noah Harari",
    "The Design of Everyday Things - Don Norman", 
    "Atomic Habits - James Clear",
    "The Pragmatic Programmer - Andy Hunt & Dave Thomas",
    "Systems Thinking - Donella Meadows",
    "The Lean Startup - Eric Ries",
    "Thinking, Fast and Slow - Daniel Kahneman",
    "The Elements of Typographic Style - Robert Bringhurst",
    "Don't Make Me Think - Steve Krug",
    "The Cathedral and the Bazaar - Eric S. Raymond"
  ],
  people: [
    "Paul Graham - Essays on startups and life",
    "Dieter Rams - Design philosophy that shaped Apple",
    "John Carmack - Programming genius behind Doom and VR",
    "Rich Hickey - Creator of Clojure, thinks deeply about complexity",
    "Casey Neistat - Storytelling through video and relentless work ethic",
    "Bret Victor - Inventing on principle and the future of programming",
    "Naval Ravikant - Wisdom on wealth, happiness, and decision-making",
    "DHH - Rails creator, contrarian thinker on work and business",
    "Joel Spolsky - Software management insights and Stack Overflow co-founder",
    "Jessica Hische - Lettering artist who makes typography magical"
  ],
  rabbitHoles: [
    "mechanical keyboards - the perfect tactile experience",
    "typography - kerning, leading, and the art of readable text",
    "vim workflows - because life's too short for slow editing",
    "coffee brewing methods - pour-over precision meets morning ritual",
    "productivity systems - GTD, PARA, and the quest for mental clarity",
    "urban planning - how cities shape human behavior and happiness",
    "synthesizer programming - creating sounds from mathematical waveforms",
    "sourdough science - fermentation as both art and chemistry",
    "watch complications - mechanical engineering in miniature",
    "ergonomic desk setups - optimizing for long coding sessions"
  ],
  doodleUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
};

// Future content can be added here:
// export const bio = {...};
// export const experience = [...]; 