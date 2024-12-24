import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ProjectType } from "../types/ProjectType";

function ProjectCard({
  title,
  description,
  images,
  technologies,
  githubUrl,
  projectUrl,
}: ProjectType) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [intervalKey, setIntervalKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isHovering && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, images.length, intervalKey]);

  const handleDotClick = (index: number) => {
    setCurrentImage(index);
    setIntervalKey((prev) => prev + 1);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl rounded-3xl border border-gray-500/15 overflow-hidden cursor-pointer group"
      onClick={() => navigate(projectUrl)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setCurrentImage(0);
      }}
    >
      <div className="relative h-48 sm:h-56 md:h-64 w-full group">
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full bg-black/40"
          alt={title}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(
                  currentImage === 0 ? images.length - 1 : currentImage - 1
                );
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(
                  currentImage === images.length - 1 ? 0 : currentImage + 1
                );
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FiChevronRight size={24} />
            </button>
          </>
        )}

        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(index);
              }}
              className={`w-2 h-2 rounded-full ${
                currentImage === index ? "bg-purple-500" : "bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl text-white font-bold mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-xs md:text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 md:py-1 bg-purple-500/20 rounded-full text-purple-300 text-[10px] md:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div onClick={(e) => e.stopPropagation()} className="w-fit">
          <Button icon={FiGithub} text="View Code" href={githubUrl} size="sm" />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
