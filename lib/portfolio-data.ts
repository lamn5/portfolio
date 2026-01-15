export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "resume";
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  linkText: string;
  featured?: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
  };
  social: SocialLink[];
  skills: Skill[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Noddy Lam ",
    title: "Full Stack Developer",
    tagline:
      "Building modern web experiences with clean code and thoughtful design",
  },
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/noddy-lam/",
      icon: "linkedin",
    },
    { name: "GitHub", url: "https://github.com/lamn5", icon: "github" },
    { name: "Resume", url: "/resume.pdf", icon: "resume" },
  ],
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "Digitizer AI",
      description:
        "Full-stack application that automates EEG electrode digitization from multi-angle video recordings. Features a 6-step workflow with interactive 3D point cloud visualization, YOLOv8 object detection, and Random Forest classification to transform manual 30-minute tasks into 5-minute automated processes.",
      technologies: ["React", "Three.js", "FastAPI", "YOLOv8", "Python"],
      link: "/projects/digitizer-ai",
      linkText: "Read Case Study",
      featured: true,
    },
    {
      id: "project-2",
      title: "Freelance Landing Page",
      description:
        "Professional freelance portfolio and services landing page showcasing web development expertise. Features modern design, responsive layout, and clear call-to-actions for potential clients.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      link: "https://nodster.tech/",
      linkText: "View Live Site",
    },
  ],
};
