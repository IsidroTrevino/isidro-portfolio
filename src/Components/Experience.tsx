import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="pt-20 flex flex-row justify-center gap-20"
      id="Work"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-3/6 flex flex-col p-8 bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl rounded-3xl border border-gray-500/15"
      >
        <h1 className="text-white text-4xl font-bold">Work Experience</h1>
        <div className="flex flex-row gap-8 pt-8">
          <div>
            <img src="geostats.png" alt="" className="w-24 rounded-full" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="text-white font-bold text-xl">Geostats</h3>
                <h6 className="text-white text-sm">
                  Full-stack Developer Intern
                </h6>
              </div>
              <h6 className="text-gray-400 text-sm">
                December 2023 - May 2024
              </h6>
            </div>
            <ul className="text-white list-disc pt-4 pl-10 flex flex-col gap-4">
              <li>
                Led the design and implementation of critical React components
                and unit tests for the Probono Web Application of the
                organization, improving user experience and adding new features.
              </li>
              <li>
                Collaborated with a cross-functional team and external
                organizations to develop a robust platform to facilitate
                communication and collaboration to create strategic alliances
                between probono organizations in Nuevo Leon.
              </li>
              <li>
                Played a key role in mapping Nuevo Leon initiatives by
                developing a screen that visually displays the impact of
                registered local organizations. Ensuring that the probono web
                application meets the needs of civil society, fostering
                engagement and collaboration of different initiatives for the
                benefit of the city.
              </li>
            </ul>
          </div>
        </div>
        <div id="Experience">
          <h1 className="text-white text-4xl font-bold pt-5">Education</h1>
          <div className="flex flex-row gap-8 pt-8">
            <div>
              <img src="/Tec.png" alt="" className="w-24 rounded-full" />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-xl">
                    Tecnologico de Monterrey, Campus Monterrey
                  </h3>
                  <h6 className="text-white text-sm">
                    B.S. in Computer Science
                  </h6>
                  <h6 className="text-white text-sm">GPA: 95/100</h6>
                </div>
                <h6 className="text-gray-400 text-sm">
                  August 2022 - June 2026
                </h6>
              </div>
              <ul className="text-white list-disc pt-4 pl-10 flex flex-col gap-4">
                <li>
                  Chair of Education of the &quot;SwiftTec&quot; student group,
                  taking charge of activities involving in giving classes to
                  High School or University students about the Swift programming
                  language.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
