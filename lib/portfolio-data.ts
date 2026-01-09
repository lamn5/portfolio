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
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com", icon: "github" },
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
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with shopping cart, payment integration, and admin dashboard. Built with modern web technologies for optimal performance.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      link: "#",
      linkText: "View Project",
      featured: true,
    },
    {
      id: "project-2",
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "#",
      linkText: "View Project",
    },
    {
      id: "project-3",
      title: "Portfolio Website",
      description:
        "Personal portfolio site showcasing projects and skills with smooth animations and responsive design.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      link: "#",
      linkText: "View Project",
    },
  ],
};
