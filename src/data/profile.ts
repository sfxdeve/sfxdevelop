export interface SiteMeta {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
}

export interface ProfileIdentity {
  name: string;
  title: string;
  strapline: string;
  location: string;
  relocation: string;
}

export interface Competency {
  title: string;
  detail: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  arrangement: string;
  period: string;
  scope: string;
  stack: string[];
  highlights: string[];
  impact: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  public: boolean;
}

export const profileData: {
  siteMeta: SiteMeta;
  identity: ProfileIdentity;
  professionalSummary: string[];
  positioning: string[];
  competencies: Competency[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  languages: LanguageItem[];
  contacts: ContactItem[];
} = {
  siteMeta: {
    siteName: "Shayan Fareed",
    defaultTitle: "Shayan Fareed | Full Stack JavaScript Engineer",
    defaultDescription:
      "Recruiter-focused portfolio for Shayan Fareed, a production-ready full stack JavaScript engineer with international remote collaboration experience.",
  },
  identity: {
    name: "Shayan Fareed",
    title: "Full Stack JavaScript Engineer",
    strapline:
      "Production-ready engineer building scalable web systems across frontend and backend.",
    location: "Karachi, Pakistan",
    relocation: "Open to relocation within Europe.",
  },
  professionalSummary: [
    "Full Stack JavaScript Developer with 3+ years of professional experience delivering production-grade applications with React.js, Next.js, Node.js, and MongoDB.",
    "Currently working remotely with a UK-based company, contributing across architecture, API development, and performance optimization. Known for clean architecture, maintainable codebases, and steady delivery in international remote teams.",
  ],
  positioning: [
    "Production-ready Full Stack JavaScript engineer",
    "Experienced in international remote collaboration",
    "Strong in structured architecture and scalable systems",
    "Comfortable owning frontend and backend systems",
    "Ready for European relocation",
  ],
  competencies: [
    {
      title: "Full Stack JavaScript Development",
      detail: "Owns delivery from UI architecture to backend services.",
    },
    {
      title: "Scalable REST API Architecture",
      detail: "Designs maintainable APIs for internal and third-party integrations.",
    },
    {
      title: "MERN Stack Applications",
      detail: "Builds and evolves production MERN applications with clean structure.",
    },
    {
      title: "Performance Optimization",
      detail: "Improves rendering performance and backend responsiveness.",
    },
    {
      title: "Reusable Component Architecture",
      detail: "Creates component systems focused on speed and maintainability.",
    },
    {
      title: "Clean Code & Code Reviews",
      detail: "Contributes disciplined standards across collaborative teams.",
    },
    {
      title: "Agile Sprint Delivery",
      detail: "Participates in planning, estimation, and iterative shipping.",
    },
    {
      title: "International Collaboration",
      detail: "Delivers consistently in distributed, remote-first environments.",
    },
  ],
  skills: [
    {
      title: "Programming",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Kotlin"],
    },
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Material UI",
        "Responsive UI/UX",
        "Cross-browser compatibility",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "NestJS",
        "REST API Development",
        "Authentication & Authorization",
        "Event-driven architecture",
        "Webhook handling",
      ],
    },
    {
      title: "Data & Systems",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Custom Admin Panels",
        "Data-driven dashboards",
        "Real-time analytics",
      ],
    },
    {
      title: "DevOps & Delivery",
      skills: [
        "Docker",
        "AWS",
        "Vercel",
        "Heroku",
        "CI/CD Pipelines",
        "Git & GitHub",
      ],
    },
    {
      title: "Process & Quality",
      skills: [
        "Agile Methodology",
        "Code Reviews",
        "Postman",
        "API Testing & Documentation",
        "Structured State Management",
      ],
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Aqua Digital Rising",
      location: "United Kingdom",
      arrangement: "Remote",
      period: "Jan 2025 - Present",
      scope:
        "Develop and maintain production MERN applications across frontend and backend layers.",
      stack: ["React.js", "Node.js", "MongoDB", "REST APIs", "MERN"],
      highlights: [
        "Designed and implemented scalable RESTful APIs for internal and third-party integrations.",
        "Optimized frontend performance with structured state management and reusable architecture.",
        "Contributed to sprint planning, architecture discussions, and peer code reviews.",
        "Supported scalable backend structures and clean deployment workflows.",
      ],
      impact:
        "Strengthened product scalability and maintainability for remote, production-focused delivery.",
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Upwork",
      location: "International",
      arrangement: "Remote",
      period: "Jan 2025 - Present",
      scope:
        "Delivered end-to-end custom web solutions for global clients with full lifecycle ownership.",
      stack: ["React.js", "Next.js", "Node.js", "MongoDB", "API Integrations"],
      highlights: [
        "Managed projects from requirements gathering to deployment.",
        "Built scalable frontend systems and backend integrations for business workflows.",
        "Collaborated with clients across regions in asynchronous remote setups.",
      ],
      impact:
        "Delivered reliable web products aligned with varied client goals and timelines.",
    },
    {
      role: "Associate Software Engineer",
      company: "Jumppace Pvt Ltd",
      location: "Karachi, Pakistan",
      arrangement: "On-site",
      period: "Oct 2023 - Nov 2024",
      scope:
        "Built production web applications and improved maintainability of existing systems.",
      stack: ["React.js", "Node.js", "MongoDB", "JavaScript"],
      highlights: [
        "Developed production-grade features using React.js and Node.js.",
        "Refactored reusable components to improve maintainability and performance.",
        "Supported backend API development and MongoDB schema design.",
        "Contributed to version control workflows and deployment processes.",
      ],
      impact:
        "Improved developer velocity through cleaner component architecture and backend consistency.",
    },
    {
      role: "React.js Developer",
      company: "AZ Code Arena",
      location: "Karachi, Pakistan",
      arrangement: "On-site",
      period: "Apr 2023 - Sep 2023",
      scope:
        "Delivered frontend interfaces and API-connected user flows for production products.",
      stack: ["React.js", "REST APIs", "Authentication", "Responsive UI"],
      highlights: [
        "Converted Figma designs into responsive interfaces.",
        "Integrated REST APIs and authentication systems.",
        "Ensured cross-browser compatibility and mobile responsiveness.",
      ],
      impact:
        "Shipped dependable frontend experiences with consistent behavior across devices.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "NED University of Engineering & Technology",
      location: "Karachi, Pakistan",
      period: "Expected 2026",
      grade: "CGPA: 3.5",
    },
  ],
  languages: [
    { language: "English", proficiency: "Professional" },
    { language: "Turkish", proficiency: "Fluent" },
    { language: "Urdu", proficiency: "Native" },
  ],
  contacts: [
    {
      label: "Email",
      value: "sfx.deve@gmail.com",
      href: "mailto:sfx.deve@gmail.com",
      public: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/shayanfareed",
      href: "https://linkedin.com/in/shayanfareed",
      public: true,
    },
    {
      label: "GitHub",
      value: "github.com/sfxdeve",
      href: "https://github.com/sfxdeve",
      public: true,
    },
    { label: "Location", value: "Karachi, Pakistan", public: true },
    { label: "Phone", value: "+92 308 2228141", public: false },
  ],
};
