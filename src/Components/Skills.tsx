import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiSharp,
  SiSwift,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiDotnet,
  SiPython,
  SiRender,
  SiJsonwebtokens,
  SiArduino,
  SiBootstrap,
  SiUnity,
  SiJest,
  SiVercel,
  SiPrisma,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const skills = [
  { name: "React", icon: SiReact, category: "Frontend Library" },
  { name: "TypeScript", icon: SiTypescript, category: "Programming Language" },
  { name: "HTML", icon: SiHtml5, category: "Frontend" },
  { name: "CSS", icon: SiCss3, category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, category: "Programming Language" },
  { name: "C++", icon: SiCplusplus, category: "Programming Language" },
  { name: "C#", icon: SiSharp, category: "Programming Language" },
  { name: "Swift", icon: SiSwift, category: "Programming Language" },
  { name: "Express", icon: SiExpress, category: "Backend Framework" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend Runtime" },
  { name: "MySQL", icon: SiMysql, category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "PgAdmin", icon: BiLogoPostgresql, category: "Database Tool" },
  { name: "Git", icon: SiGit, category: "Version Control" },
  { name: "GitHub", icon: SiGithub, category: "Version Control" },
  { name: "Tailwind", icon: SiTailwindcss, category: "CSS Framework" },
  { name: ".NET", icon: SiDotnet, category: "Backend Framework" },
  { name: "Python", icon: SiPython, category: "Programming Language" },
  { name: "Render", icon: SiRender, category: "Cloud Platform" },
  { name: "JWT", icon: SiJsonwebtokens, category: "Authentication" },
  { name: "Arduino", icon: SiArduino, category: "IoT" },
  { name: "Bootstrap", icon: SiBootstrap, category: "CSS Framework" },
  { name: "Unity", icon: SiUnity, category: "Game Development" },
  { name: "Vercel", icon: SiVercel, category: "Deployment Platform" },
  { name: "Jest", icon: SiJest, category: "Testing Framework" },
  { name: "Prisma", icon: SiPrisma, category: "ORM" },
];

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-20 flex flex-col items-center px-4 md:px-0 gap-10"
      id="Skills"
    >
      <h1 className="text-4xl text-white font-bold">Skills</h1>
      <div className="w-full md:w-[calc(33.333%+16rem+5rem)] max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1,
              }}
              className="relative group"
            >
              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-500/5 to-purple-500/20 hover:from-purple-500/10 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-105">
                <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <skill.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 rounded-md text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {skill.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
