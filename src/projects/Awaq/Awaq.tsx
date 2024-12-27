import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiGithub,
  FiArrowLeft,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

const projectImages = [
  "/AWAQ/Awaq_Dashboard.png",
  "/AWAQ/Awaq_Guia.png",
  "/AWAQ/Awaq_Instrucciones.png",
  "/AWAQ/Awaq_Login.png",
  "/AWAQ/Awaq_Select.png",
  "/AWAQ/Awaq_Juego1.png",
  "/AWAQ/Awaq_Juego2.png",
];

function Awaq() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 min-h-screen pt-10 pb-20 px-4 md:px-0 flex flex-col items-center gap-10"
    >
      <div className="w-full md:w-[calc(33.333%+16rem+5rem)] max-w-7xl">
        <div className="mb-6">
          <Button
            icon={FiArrowLeft}
            text="Back to Home"
            onClick={() => navigate("/")}
            iconPosition="left"
          />
        </div>

        <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Awaq</h1>

        <div className="relative h-[300px] md:h-[400px] mb-10 rounded-xl overflow-hidden group">
          <motion.img
            key={currentImage}
            src={projectImages[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
            alt={`Project screenshot ${currentImage + 1}`}
          />

          {projectImages.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === 0 ? projectImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={() =>
                  setCurrentImage((prev) => (prev + 1) % projectImages.length)
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FiChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl text-white font-bold mb-4">
              Project Overview
            </h2>
            <p className="text-gray-300 mb-6">
              This project consisted on two separate parts. The first part is a
              Web Application where collaborators that want to join the
              organization can see their current progress of training based on
              the level of the videogame they are, also tracking stats as the
              percentage of completion, time played, and missing levels. <br />
              <br />
              The second part is a Unity videogame where the collaborators can
              play and learn about the organization's ethic code, security, and
              technology for developers. This game is divided into three levels,
              each one with a different theme and set of questions. The game is
              integrated with the web application to track the progress of the
              collaborators.
            </p>

            <h2 className="text-2xl text-white font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>
                Progress is tracked after each minigame of the game has been
                completed and is updated on the database.
              </li>
              <li>
                The web application has a especial study section where
                collaborators can consult their code of ethics, security
                protocols and other topics to study.
              </li>
              <li>
                Administrators of the organization can track the progress of
                collaboratos, as well as register new ones or delete them from
                the database.
              </li>
              <li>
                Using Looker Studio, the statistics of the collaborators can be
                visualized in a dashboard, showing the progress of each one of
                them, either as an Admin or as a collaborator.
              </li>
            </ul>

            <h2 className="text-2xl text-white font-bold mb-4">
              Development Journey
            </h2>
            <p className="text-gray-300 mb-6">
              This project was developed by a team of 5 people, including me. We
              completed the project in a span of 3 sprint cycles, each one
              lasting 3 weeks. The first sprint was focused on the design of the
              game and the web application, as well as the database design. The
              second sprint was focused on the development of the game and the
              web application, as well as the integration of both. The third
              sprint was focused on testing and debugging the game and the web
              application.
            </p>
          </div>

          <div className="bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl rounded-3xl border border-gray-500/15 p-6">
            <h2 className="text-xl text-white font-bold mb-4">
              Project Details
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-purple-400 font-medium mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    ASP.NET
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Bootstrap
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Unity
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    C#
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    MySQL
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Aiven
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Looker Studio
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-purple-400 font-medium mb-2">Links</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/ivanadp-19/PROYECTOAWAQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Awaq;
