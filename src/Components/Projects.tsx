import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "../types/ProjectType";

const projects: ProjectType[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and TypeScript",
    images: ["Portfolio/PortfolioWebApp.png"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/IsidroTrevino/Isidro-Portfolio",
    projectUrl: "/projects/portfolio",
  },
  {
    title: "WattzOn",
    description:
      "Mobile application developed using Swift and SwiftUI for tracking energy consumption in Houses, Buildings and Industries to combat climate change and reduce energy costs.",
    images: ["/PortfolioWebApp.png"],
    technologies: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "Json Web Tokens",
      "Aiven",
      "Render",
    ],
    githubUrl: "https://github.com/IsidroTrevino/WattzOn",
    projectUrl: "/projects/Portfolio",
  },
  {
    title: "Awaq",
    description:
      "Mobile application developed using Swift and SwiftUI for tracking energy consumption in Houses, Buildings and Industries to combat climate change and reduce energy costs.",
    images: ["/PortfolioWebApp.png"],
    technologies: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "Json Web Tokens",
      "Aiven",
      "Render",
    ],
    githubUrl: "https://github.com/IsidroTrevino/WattzOn",
    projectUrl: "/projects/Portfolio",
  },
];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-20 flex flex-col items-center px-4 md:px-0 gap-20"
      id="Projects"
    >
      <h1 className="text-4xl text-white font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[calc(33.333%+16rem+5rem)]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
