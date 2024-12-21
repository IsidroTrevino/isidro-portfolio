import Button from "./Button";
import { FiDownload, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      className="pt-32 flex flex-col md:flex-row justify-center gap-10 md:gap-20 px-4 md:px-0"
      id="Home"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/3 flex flex-col p-4 md:p-8 bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl rounded-3xl border border-gray-500/15"
      >
        <motion.h1 className="text-3xl md:text-4xl text-white font-bold">
          Hey! I&apos;m Isidro
        </motion.h1>
        <p className="text-gray-200 text-lg md:text-xl mt-5">
          I am a 19 year old Software Engineer from Mexico. <br />I really like
          to develop full-stack web and mobile applications, as well as backend
          development.
        </p>
        <div className="flex flex-col sm:flex-row pt-5 gap-5">
          <Button
            icon={FiDownload}
            text="Resume"
            border={true}
            size="md"
            download="../IsidroCV.pdf"
          />
          <div className="flex flex-row gap-2">
            <Button
              icon={FiLinkedin}
              href="https://www.linkedin.com/in/isidro-trevino/"
            />
            <Button icon={FiGithub} href="https://github.com/IsidroTrevino" />
            <Button icon={FiMail} href="mailto:isidro.trevinl@gmail.com" />
          </div>
        </div>
      </motion.div>
      <motion.div className="w-full md:w-fit flex justify-center items-center">
        <img
          src="/me.png"
          alt=""
          className="w-48 md:w-64 rounded-3xl relative z-10"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
