// Education.jsx
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2012 - 2016",
    title: "Silicon Institute of Technology ",
    description:
      "Class 12th || College of Basic Science and Humanities || CHSE Board, Odisha Bhubaneswar || Year of Passing: 2022 || Percentage: 72%",
  },
  {
    year: "2022 - 2024",
    title: "Stevens Institute of Technology",
    description:
      "Bachelor of Technology in Computer Science (Software Engineering) || CV Raman Global University || Bhubaneswar, Odisha || Graduation Year: 2027",
  },
  
];

const Education = () => {
  return (
    <section id="education" className="bg-white mx-auto max-w-6xl p-10 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Education</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-400"></div>

        <div className="space-y-10">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative w-full md:w-1/2 p-6 rounded-2xl border-2 border-orange-400 bg-white shadow-lg ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              {/* Year and dot */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                {item.year}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>

              {/* Content */}
              <h3 className="text-2xl font-semibold italic text-gray-800 mb-2 text-center">{item.title}</h3>
              <p className="text-gray-700 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
