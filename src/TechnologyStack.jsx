import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import Icons

// Import images (Ensure paths are correct)
import reactLogo from "./assets/react.png";
import nodeLogo from "./assets/nodeJs.png";
import javaScript from "./assets/JavaScript.png";
import java from "./assets/java.png";
import awsLogo from "./assets/AWS.png";
import mongoDbLogo from "./assets/mongoDb.png";
import oracleLogo from "./assets/oracle.png";
import anacondaLogo from "./assets/anacondaLogo.png";
import vsCodeLogo from "./assets/visualStudio.png";
import shellScriptingLogo from "./assets/shellScripting.png";
import githubAction from "./assets/GithubAction.png";
import jenkins from "./assets/Jenkins.png";
import trello from "./assets/Trello.png";
import jira from "./assets/Jira.png";
import python from "./assets/python.png";
import PostGreSQL from "./assets/PostGreSQL.png";

// Define Technology Categories
const categories = [
  {
    name: "Programming Languages",
    technologies: [
      { name: "React", image: reactLogo },
      { name: "Node.js", image: nodeLogo },
      { name: "JavaScript", image: javaScript },
      { name: "Python", image: python },
      { name: "Java", image: java },
      { name: "Shell Scripting", image: shellScriptingLogo },
    ],
  },
  {
    name: "Databases( Relational & Non Relational )",
    technologies: [
      { name: "MongoDB", image: mongoDbLogo },
      { name: "Oracle PL/SQL", image: oracleLogo },
      { name:"PostGreSQL", image:PostGreSQL},
    ],
  },
  {
    name: "CI/CD and Cloud",
    technologies: [
      { name: "GitHub Actions", image: githubAction },
      { name: "Jenkins", image: jenkins },
      { name: "AWS", image: awsLogo },
    ],
  },
  {
    name: "IDEs & Software Development Practices",
    technologies: [
      { name: "Anaconda", image: anacondaLogo },
      { name: "VS Code", image: vsCodeLogo },
      { name: "Trello", image: trello },
      { name: "JIRA", image: jira },
    ],
  },
];

const TechnologyStack = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [showHeading, setShowHeading] = useState(false);

  // Show heading after all images drop
  useEffect(() => {
    const timer = setTimeout(() => setShowHeading(true), categories[currentCategory].technologies.length * 400);
    return () => clearTimeout(timer);
  }, [currentCategory]);

  // Handle Navigation (Left & Right Arrows)
  const handlePrev = () => {
    setShowHeading(false);
    setCurrentCategory((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setShowHeading(false);
    setCurrentCategory((prev) => (prev + 1) % categories.length);
  };

  return (
    <section
      id="technology-stack"
      className="w-full min-h-[200px] bg-gradient-to-r from-blue-100 to-indigo-200 py-6 flex flex-col items-center rounded-xl justify-center relative"
    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        My Tech Stack
      </motion.h2>

      <div className="max-w-screen-lg mx-auto text-center relative w-full px-8 flex items-center justify-center">
        {/* Left Arrow Button at Extreme Left */}
        <button
          onClick={handlePrev}
          className="absolute left-0 transform -translate-x-1/2 text-blue-500 hover:text-blue-700 transition duration-300 p-2 bg-white shadow-md rounded-full"
        >
          <FaArrowLeft size={30} />
        </button>

        <div className="w-full flex flex-col items-center">
          {/* Tech Images Section */}
          <motion.div
            key={currentCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-6 flex-wrap min-h-[180px]"
          >
            {categories[currentCategory].technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="w-20 h-20 md:w-24 md:h-24 bg-white shadow-md rounded-xl rounded-full flex items-center justify-center p-1 border border-gray-300"
              >
                <img src={tech.image} alt={tech.name} className="w-full h-full object-contain" />
              </motion.div>
            ))}
          </motion.div>

          {/* Category Title */}
          <div className="mt-2 min-h-[20px]">
            {showHeading && (
              <motion.h2
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg font-semibold text-gray-800"
              >
                {categories[currentCategory].name}
              </motion.h2>
            )}
          </div>
        </div>

        {/* Right Arrow Button at Extreme Right */}
        <button
          onClick={handleNext}
          className="absolute right-0 transform translate-x-1/2 text-blue-500 hover:text-blue-700 transition duration-300 p-2 bg-white shadow-md rounded-full"
        >
          <FaArrowRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default TechnologyStack;
