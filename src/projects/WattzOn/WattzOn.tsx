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
  "/WattzOn/WattzOn_1.jpg",
  "/WattzOn/WattzOn_2.jpg",
  "/WattzOn/WattzOn_3.jpg",
];

function WattzOn() {
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
          WattzOn
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
              This project was developed independently by me and a team of 5
              (including me). It is a mobile application developed using Swift
              for IOS devices. This application is aimed at helping people with
              reducing their energy consumption in their homes by providing them
              with a platform where they can monitor their energy consumption,
              register their energy consuming devices, electricity bills,
              receive recommendations on how to reduce their energy and
              visualize how much money they have saved by following the
              recommendations.
            </p>

            <h2 className="text-2xl text-white font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>
                The user can register their energy consuming devices and monitor
                their energy consumption in real time.
              </li>
              <li>
                The application provides the user with recommendations on how to
                reduce their energy consumption based on their energy consuming
                devices.
              </li>
              <li>
                The user can visualize how much money they have saved by
                following the recommendations.
              </li>
              <li>
                The user can visualize their electricity bills and compare them
                with previous bills to see how much they have reduced their
                consumption.
              </li>
              <li>
                Based on the wattage and daily use of their registered household
                appliances, the application automaticcaly calculated the
                percentage of energy they contribute to the total energy bill,
                in percentage, and moeny.
              </li>
            </ul>

            <h2 className="text-2xl text-white font-bold mb-4">
              Development Journey
            </h2>
            <p className="text-gray-300 mb-6">
              This project was developed by a team of 5 people, including me. We
              completed the project in a span of 3 sprint cycles, each one
              lasting 3 weeks. The first sprint was focused on the design of the
              application and database design, features and user stories. The
              second sprint was focused on the development of the front-end of
              the application, training our machine-learning models, and the
              development of the backend database and api. The third sprint was
              focused on integrating the front-end with the backend and
              machine-learning models, as well as testing and debugging the
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
                    Swift
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    SwiftUI
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    SwiftData
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    CoreML
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Express.js
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Json Web Tokens
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Prisma
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Aiven
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                    Render
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-purple-400 font-medium mb-2">Links</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/IsidroTrevino/WattzOn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <FiGithub /> GitHub (Application)
                  </a>
                  <a
                    href="https://github.com/IsidroTrevino/WattzOnApi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <FiGithub /> GitHub (API)
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

export default WattzOn;
