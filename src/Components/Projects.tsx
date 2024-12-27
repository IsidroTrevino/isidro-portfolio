import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "../types/ProjectType";

const projects: ProjectType[] = [
  {
    title: "WattzOn",
    description:
      "Mobile application developed using Swift and SwiftUI for tracking energy consumption in Houses, Buildings and Industries to combat climate change and reduce energy costs.",
    images: [
      "/WattzOn/WattzOn_1.jpg",
      "/WattzOn/WattzOn_2.jpg",
      "/WattzOn/WattzOn_3.jpg",
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "CoreML",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "Json Web Tokens",
      "Prisma",
      "Aiven",
      "Render",
    ],
    githubUrl: "https://github.com/IsidroTrevino/WattzOn",
    projectUrl: "/projects/WattzOn",
  },
  {
    title: "Awaq",
    description:
      "Web Application developed using ASP.NET, and a VideoGame developed using Unity for training collaborators of the organization regarding their safety policies, ethic code, and technology for developers.",
    images: [
      "/AWAQ/Awaq_Login.png",
      "/AWAQ/Awaq_Dashboard.png",
      "/AWAQ/Awaq_Guia.png",
      "/AWAQ/Awaq_Instrucciones.png",
    ],
    technologies: ["ASP.NET", "C#", "MySQL", "Bootstrap", "Aiven", "Unity", "Looker Studio"],
    githubUrl: "https://github.com/IsidroTrevino/WattzOn",
    projectUrl: "/projects/Awaq",
  },
  {
    title: "Smart Covers",
    description:
      "Web application and Arduino projects for monitoring and automating the control of blind in an intelligent home, office or other spaces.",
    images: [
      "/SmartCovers/Smartcovers_Dashboard.png",
      "/SmartCovers/Smartcovers_Home.png",
      "/SmartCovers/Smartcovers_Time.png",
      "/SmartCovers/Smartcovers_Arduino.png",
    ],
    technologies: [
      "React.js",
      "CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Arduino",
      "NodeMCU",
      "MQTT",
    ],
    githubUrl: "https://github.com/IsidroTrevino/WattzOn",
    projectUrl: "/projects/SmartCovers",
  },
];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-20 flex flex-col items-center px-4 md:px-0 gap-6 md:gap-10"
      id="Projects"
    >
      <h1 className="text-4xl text-white font-bold">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full md:w-[calc(33.333%+16rem+5rem)] max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
