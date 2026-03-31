export const METADATA = {
  author: "Sourav V Salunke",
  title: "Portfolio | Sourav V Salunke",
  description:
    "Full Stack Developer (MERN) with a strong interest in building intuitive and high-performance frontend experiences. I build scalable web apps and intelligent systems that solve real-world problems.",
  siteUrl: "#",
  twitterHandle: "",
  keywords: [
    "Sourav V Salunke",
    "Full Stack Developer",
    "MERN Stack",
    "Software Engineer",
    "Portfolio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Full Stack Developer",
  "I build things for the web",
  "I build scalable web apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:salunkesourav1224@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sourav-salunke-324520305",
  },
  {
    name: "github",
    url: "https://github.com/gamingdyno21",
  },
];

export const SKILLS = {
  languagesAndTools: [
    { id: "html", name: "HTML" },
    { id: "css", name: "CSS" },
    { id: "javascript", name: "JavaScript" },
    { id: "typescript", name: "TypeScript" },
    { id: "git", name: "Git" },
    { id: "figma", name: "Figma" },
  ],
  librariesAndFrameworks: [
    { id: "react", name: "React" },
    { id: "nodejs", name: "Node.js" },
    { id: "expressjs", name: "Express.js" },
    { id: "bootstrap", name: "Bootstrap" },
    { id: "react-bootstrap", name: "React Bootstrap" },
  ],
  databases: [
    { id: "mongodb", name: "MongoDB" },
    { id: "mysql", name: "MySQL" },
  ],
  other: [
    { id: "restapi", name: "REST APIs" },
    { id: "jwt", name: "JWT" },
    { id: "chrome", name: "Chrome Ext." },
    { id: "promptengineering", name: "Prompt Eng." },
    { id: "machinelearning", name: "Machine Learning" },
    { id: "openai", name: "OpenAI" },
  ],
};

export const PROJECTS = [
  {
    name: "CarbonX",
    imageKey: "dukaan", // Placeholder using existing image
    description: "Manage companies and monitor industry carbon usage limits 🏭",
    gradient: ["#2E7D32", "#4CAF50"], 
    url: "https://github.com/gamingdyno21/CarbonX",
    tech: ["react", "nodejs", "mongodb"],
  },
  {
    name: "Productivity Extension",
    imageKey: "bot9", 
    description: "Insights to improve productivity and time management ⏱️",
    gradient: ["#1565C0", "#42A5F5"], 
    url: "https://github.com/gamingdyno21/chrome-extention",
    tech: ["javascript", "chrome"],
  },
  {
    name: "FinVault",
    imageKey: "ready-ai", 
    description: "Track expenses and visualize financial data 💰",
    gradient: ["#F9A825", "#FFCA28"], 
    url: "https://github.com/gamingdyno21/FinVault",
    tech: ["react", "nodejs", "expressjs", "mongodb"],
  },
  {
    name: "Travel Planner AI",
    imageKey: "inshorts", 
    description: "Personalized itineraries based on user preferences ✈️",
    gradient: ["#6A1B9A", "#AB47BC"], 
    url: null,
    tech: ["react", "nodejs", "openai"],
  },
  {
    name: "My Portfolio",
    imageKey: "nextboss", 
    description: "My personal portfolio website built with modern web technologies 🚀",
    gradient: ["#0F2027", "#203A43"], 
    url: "https://github.com/gamingdyno21/my-portfolio",
    tech: ["react", "nextjs", "tailwindcss"],
  },
];

export const WORK_CONTENTS = {};

export const GTAG = "G-5HCTL2TJ5W";
