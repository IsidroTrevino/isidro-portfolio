import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { FiGithub } from "react-icons/fi";
import { ProjectType } from "../types/ProjectType";
import React from "react";

function ProjectCard({
  title,
  description,
  images,
  technologies,
  githubUrl,
  projectUrl,
}: ProjectType) {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl rounded-3xl border border-gray-500/15 overflow-hidden cursor-pointer group"
      onClick={() => navigate(projectUrl)}
    >
      <div className="relative h-48 w-full">
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          alt={title}
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImage(index);
              }}
              className={`w-2 h-2 rounded-full ${
                currentImage === index ? "bg-purple-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl text-white font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-500/20 rounded-full text-purple-300 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div onClick={(e) => e.stopPropagation()} className="w-fit">
          <Button icon={FiGithub} text="View Code" href={githubUrl} />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
