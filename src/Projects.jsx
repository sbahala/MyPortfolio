import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import External Link Icon
import medTRack from "./assets/medTRack.png";
import hotelStay from "./assets/hotelStay.png";
import weatherAdvisory from "./assets/weatherAdvisory.png";
import fullStackDemo from "./assets/fullStackDemo.png";

// Project Data
const projects = [
  {
    title: "Med Tracker",
    description:
      "Developed a hospital management system for patients, doctors, and nurses with real-time slot booking, cancellation, and AI-powered recommendations.",
    image: medTRack,
    link: "https://github.com/sbahala/med_tracker",
  },
  {
    title: "Suit Stay",
    description:
      "Led and built a complete hotel management system, covering all functionalities like room booking, customer handling, and analytics.",
    image: hotelStay,
    link: "https://github.com/sbahala/SuitStay",
  },
  {
    title: "Weather Advisory (React +LangCHain UI Agent)",
    description:
      "Smart Dressing, Smarter Weather Insights – AI-Powered Advisory in Progress!",
    image: weatherAdvisory,
    link: "https://github.com/sbahala/WeatherAdvisoryApp",
  },
  {
    title: "FullStack Demo App",
    description:
      "Created a Full Stack App with React FrontEnd, Backend with Java and deployment with Docker",
    image: fullStackDemo,
    link: "https://github.com/sbahala/user-patient",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 rounded-2xl shadow-lg text-gray-900">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-12 text-orange-500">Projects</h2>

        {/* Scrollable Container */}
        <div className="relative w-full overflow-x-auto scrollbar-hide px-4">
          <div className="flex space-x-8 justify-start min-w-max">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative w-96 h-auto bg-white shadow-xl border border-orange-400 rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Project Image */}
                <div className="relative w-full h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mt-3 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* View on GitHub Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center px-5 py-2 bg-orange-500 text-white font-semibold rounded-full transition-all transform hover:bg-orange-600 hover:scale-105 shadow-md"
                  >
                    View on GitHub <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
