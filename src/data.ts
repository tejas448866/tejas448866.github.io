export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  visualDirection: string;
  mockType: 'horror-game' | 'ai-assistant' | 'financial-engine' | 'palmpilot' | 'timetable' | 'volt-relay';
}

export interface JourneyMilestone {
  id: string;
  yearOrPeriod: string;
  title: string;
  organization: string;
  roleOrDegree?: string;
  description: string;
  tag: string;
  isCurrent?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'learning' | 'competition' | 'hackathon';
  status: string;
  organization?: string;
  team?: string;
  highlight?: boolean;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  fullName: "Tejas Gowda",
  firstName: "TEJAS",
  lastName: "GOWDA",
  role: "Student Developer",
  college: "B. N. M. Institute of Technology (BNMIT)",
  collegeShort: "BNMIT",
  degree: "B.E. in Information Science and Engineering",
  graduationYear: 2029,
  tagline: "Building smart solutions, exploring bold ideas, and turning technology into real-world impact.",
  about:
    "I'm a passionate tech enthusiast who loves exploring innovative ideas, building creative projects, and using technology to solve real-world problems. My goal is to become a skilled software developer who builds intelligent, impactful, and user-friendly solutions that make a difference.",
  heroDescription:
    "I’m a student developer exploring software, AI, automation, and interactive experiences through practical projects.",
  email: "tejas448866@gmail.com",
  github: "https://github.com/tejas448866",
  linkedin: "https://www.linkedin.com/in/tejas-gowda-25902a386",
  resumeAvailable: false,
  copyrightYear: new Date().getFullYear(),
};

export const ABOUT_THEMES = [
  {
    number: "01",
    title: "EXPLORE",
    description: "Discover ideas, technologies, and new approaches to solving problems.",
    accent: "sage",
  },
  {
    number: "02",
    title: "BUILD",
    description: "Turn ideas into practical software projects.",
    accent: "charcoal",
  },
  {
    number: "03",
    title: "IMPROVE",
    description: "Learn through implementation, debugging, and refinement.",
    accent: "sage",
  },
];

export const ALL_PROJECTS: Project[] = [
  {
    id: "3d-stealth-horror-game",
    number: "01",
    title: "3D Stealth Horror Game",
    category: "3D GAME DEV",
    description:
      "A 3D stealth horror survival game where the player explores a dark environment, avoids an enemy, collects items, solves puzzles, and escapes.",
    technologies: ["TypeScript", "3D Graphics", "Audio Ambience", "State Logic"],
    githubUrl: "https://github.com/tejas448866/3d-stealth-horror-game-1-",
    visualDirection:
      "A cinematic dark environment with atmospheric lighting, stealth elements, and suspenseful environmental design.",
    mockType: "horror-game",
  },
  {
    id: "ai-virtual-assistant",
    number: "02",
    title: "AI Virtual Assistant",
    category: "AI & AUTOMATION",
    description:
      "An AI-powered virtual assistant for system monitoring, browser use, web search, screen analysis, file management, code writing and debugging, reminders, and messaging.",
    technologies: ["Python", "AI & Automation", "Browser Control", "Vision-Based UI Analysis"],
    githubUrl: "https://github.com/tejas448866/AI-VIRTUAL-ASSISTANT",
    visualDirection:
      "A refined assistant interface with conversational elements, system-status panels, and browser automation visuals.",
    mockType: "ai-assistant",
  },
  {
    id: "financial-decision-engine",
    number: "03",
    title: "AI Business and Financial Decision Optimization Engine",
    category: "FINANCIAL DECISION AI",
    description: "An AI-based business and financial decision optimization engine.",
    technologies: ["TypeScript", "Decision Logic", "Risk Modeling", "Analytics"],
    githubUrl: "https://github.com/tejas448866/artifacts",
    visualDirection:
      "A sophisticated financial decision interface with scenario comparisons and business analytics visuals.",
    mockType: "financial-engine",
  },
  {
    id: "palmpilot-ai",
    number: "04",
    title: "PalmPilot AI",
    category: "COMPUTER VISION",
    description:
      "An AI-based hand gesture gaming system using webcam input to control a game without a keyboard or controller.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    githubUrl: "https://github.com/tejas448866/PalmPilot-AI",
    visualDirection:
      "A hand-gesture recognition concept with a webcam-style interface and interactive gaming visuals.",
    mockType: "palmpilot",
  },
  {
    id: "smart-timetable-optimization",
    number: "05",
    title: "Smart Timetable Optimization",
    category: "OPTIMIZATION SYSTEMS",
    description:
      "An intelligent timetable optimization system that generates conflict-free academic schedules based on teachers, rooms, groups, subject constraints, and availability.",
    technologies: ["JavaScript", "Constraint Solving", "Scheduling Heuristics", "UI Logic"],
    githubUrl: "https://github.com/tejas448866/Smart-Timetable-Optimization",
    visualDirection:
      "A clean weekly timetable with subject blocks, room assignments, and scheduling-conflict visualization.",
    mockType: "timetable",
  },
  {
    id: "voltrealy-data-analysis",
    number: "06",
    title: "VoltRelay Data Analysis",
    category: "DATA SCIENCE",
    description: "A data analysis project focused on electrical/data insights and analysis workflows.",
    technologies: ["Jupyter Notebook", "Python", "Data Exploration", "Diagnostics"],
    githubUrl: "https://github.com/tejas448866/VoltRelay-Data-Analysis",
    visualDirection:
      "An elegant notebook-inspired analytical interface with data exploration visuals and charts.",
    mockType: "volt-relay",
  },
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    id: "academic-degree",
    yearOrPeriod: "2029 (Expected)",
    title: "B.E. IN INFORMATION SCIENCE AND ENGINEERING",
    organization: "B. N. M. Institute of Technology (BNMIT)",
    roleOrDegree: "Student Developer",
    description:
      "Undergraduate engineering studies in Information Science, developing strong foundations in core computing, data structures, algorithms, and systems design.",
    tag: "ACADEMICS",
    isCurrent: true,
  },
  {
    id: "evox-runnerup",
    yearOrPeriod: "COMPETITION",
    title: "RUNNER-UP — EVOX 1.0",
    organization: "Team Technova · DETOX · Unstop",
    description:
      "Achieved Runner-Up distinction as part of Team Technova in the EVOX 1.0 competition organized by DETOX and hosted on Unstop.",
    tag: "RECOGNITION",
  },
  {
    id: "analytics-hackathon",
    yearOrPeriod: "HACKATHON",
    title: "DATA ANALYTICS HACKATHON PARTICIPANT",
    organization: "Gradient Learnings",
    description:
      "Participated in the competitive Data Analytics Hackathon organized by Gradient Learnings, tackling analytical problems and data exploration workflows.",
    tag: "PARTICIPATION",
  },
  {
    id: "project-milestone",
    yearOrPeriod: "MILESTONE",
    title: "PRACTICAL SOFTWARE & AI EXPERIMENTATION",
    organization: "Independent Project Engineering",
    description:
      "Developed 6 distinct technical projects covering 3D stealth gaming, AI virtual assistance, hand-gesture computer vision, and academic timetable optimization.",
    tag: "ENGINEERING",
  },
];

export const GENERAL_SKILLS: SkillCategory[] = [
  {
    title: "Programming",
    description: "Foundational languages used for algorithms, system programming, and application logic.",
    skills: ["C", "Java", "Python"],
  },
  {
    title: "Web Development",
    description: "Core technologies used to build responsive, accessible, and structured web interfaces.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECT_TECHNOLOGIES: SkillCategory = {
  title: "Project-Specific Technologies",
  description: "Specialized frameworks, libraries, and environments applied across completed projects.",
  skills: [
    "TypeScript",
    "OpenCV",
    "MediaPipe",
    "Jupyter Notebook",
    "Browser Automation Tooling",
    "AI Tooling",
  ],
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "evox",
    title: "Runner-Up — EVOX 1.0",
    category: "competition",
    status: "Podium Recognition",
    organization: "Organized by DETOX (Submission via Unstop)",
    team: "Team Technova",
    highlight: true,
    description:
      "Recognized as Runner-Up in the EVOX 1.0 competition as part of Team Technova, demonstrating technical problem-solving and innovation.",
  },
  {
    id: "hackathon",
    title: "Data Analytics Hackathon Participant",
    category: "hackathon",
    status: "Participant",
    organization: "Gradient Learnings",
    description:
      "Successfully participated in the hackathon organized by Gradient Learnings, focusing on data analysis workflows.",
  },
  {
    id: "learning-js",
    title: "JavaScript",
    category: "learning",
    status: "Successfully Completed",
    description: "Completed comprehensive foundational learning in modern JavaScript syntax, DOM manipulation, and asynchronous programming.",
  },
  {
    id: "learning-css",
    title: "CSS3",
    category: "learning",
    status: "Successfully Completed",
    description: "Completed comprehensive study of CSS3 layout systems, responsive design principles, and visual styling.",
  },
  {
    id: "learning-html",
    title: "HTML5 — The Language",
    category: "learning",
    status: "Successfully Completed",
    description: "Completed comprehensive study of semantic HTML5 document structures, accessibility standards, and web fundamentals.",
  },
];

export const CURRENTLY_EXPLORING = [
  {
    title: "Advanced Data Structures & Algorithms",
    focus: "Graph algorithms, dynamic programming, and computational complexity optimization.",
  },
  {
    title: "Agentic AI & Vision Workflows",
    focus: "Autonomous tool execution, multimodal reasoning, and real-time computer vision.",
  },
  {
    title: "High-Performance Systems & Web Engines",
    focus: "Modern browser rendering pipelines, reactive architectures, and distributed services.",
  },
];

export const NAV_ITEMS = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Projects", href: "#work" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "achievements", label: "Achievements", href: "#achievements" },
  { id: "contact", label: "Contact", href: "#contact" },
];
