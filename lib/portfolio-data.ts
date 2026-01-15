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
      title: "Checkmark Inc. Database Management System",
      description:
        "Full-stack retail operations management application with normalized MySQL database (3NF), RESTful API, and dynamic web interface. Features complete CRUD operations across all entities, complex JOIN queries, and analytical reporting for sales, employees, suppliers, and customers.",
      technologies: ["Node.js", "Express", "MySQL", "Handlebars", "Tailwind CSS"],
      link: "https://github.com/lamn5/database_webpage_checkmark_inc",
      linkText: "View on GitHub",
    },
    {
      id: "project-3",
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with shopping cart, payment integration, and admin dashboard. Built with modern web technologies for optimal performance.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      link: "#",
      linkText: "View Project",
    },
    {
      id: "project-4",
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "#",
      linkText: "View Project",
    },
    {
      id: "project-5",
      title: "Portfolio Website",
      description:
        "Personal portfolio site showcasing projects and skills with smooth animations and responsive design.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      link: "#",
      linkText: "View Project",
    },
  ],
};
