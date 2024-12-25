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
  "/SmartCovers/Smartcovers_Dashboard.png",
  "/SmartCovers/Smartcovers_Home.png",
  "/SmartCovers/Smartcovers_Time.png",
  "/SmartCovers/Smartcovers_Arduino.png",
];

function SmartCovers() {
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

        <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
          Smart Covers
        </h1>

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
              This project was developed independently by me and a team of 4.
              This project is a web Application and arduino projects for
              automating the control of blinds in an intelligent home or office.
              <br />
              <br />
              The application allows the user to control the blinds in their
              home by setting a schedule for when the blinds should open and
              close, or letting the arduino automatically control the blinds
              based on the amount of light (in lumens) in the room.
            </p>

            <h2 className="text-2xl text-white font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>
                The user can choose to control the blinds manually or
                automatically.
              </li>
              <li>
                The user can set a schedule for when the blinds should open and
                close for each day of the week.
              </li>
              <li>
                The user can set the threshold of light (in lumens) at which the
                blinds should open or close automatically.
              </li>
              <li>
                The user can monitor the status of the blinds in real time. As
                well as override the automatic control of the blinds if they
                wish to.
              </li>
            </ul>

            <h2 className="text-2xl text-white font-bold mb-4">
              Development Journey
            </h2>
            <p className="text-gray-300 mb-6">
              This project was developed in a span of 1.5 months by a team of 4.
              First we started with the idea, the design of the database and the
              arduino. Then, we developed the API using Node.js and Express.js
              and the frontend using React.js. Finally, we developed the arduino
              code and connected it to the API using an MQTT broker to allow the
              arduino to communicate with the API.
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
                    React.js
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    CSS
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Express.js
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    MySQL
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Arduino
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    NodeMCU
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    MQTT
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-purple-400 font-medium mb-2">Links</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/IsidroTrevino/IoT-API-JS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <FiGithub /> Code
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

export default SmartCovers;
