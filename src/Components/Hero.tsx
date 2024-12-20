import Button from "./Button";
import { FiDownload, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

import { motion } from "framer-motion";
import React from "react";

function Hero() {
  return (
    <div className="pt-32 flex flex-row justify-center gap-20" id="Home">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-1/3 flex flex-col p-8 bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl rounded-3xl border border-gray-500/15"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl text-white font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600"
        >
          Hey! I&apos;m Isidro
        </motion.h1>
        <p className="text-gray-200 text-xl mt-5">
          I am a 19 year old Software Enginner from Mexico. <br /> I really like
          to develop full-stack web and mobile applications, as well as backend
          development.
        </p>
        <div className="flex flex-row pt-5 gap-5">
          <Button
            icon={FiDownload}
            text="Resume"
            border={true}
            size="md"
            download="../IsidroCV.pdf"
          />
          <div className="flex flex-row">
            <Button
              icon={FiLinkedin}
              href="https://www.linkedin.com/in/isidro-trevino/"
            />
            <Button icon={FiGithub} href="https://github.com/IsidroTrevino" />
            <Button icon={FiMail} href="mailto:isidro.trevinl@gmail.com" />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-fit flex justify-center items-center"
      >
        <img
          src="../public/me.jpg"
          alt=""
          className="w-64 rounded-3xl relative z-10"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
