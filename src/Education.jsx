import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2022 - 2024",
    title: "Stevens Institute of Technology",
    description:"Masters in Software Engineering ||  United States of America, New Jersey, Hoboken || Graduation Year: 2024",
   
  },
  {
    year: "2012 - 2016",
    title: "Silicon Institute of Technology",
    description: "Bachelors of Technology in Computer Science|| India, Odisha Bhubaneswar || Year of Passing: 2016",
  },
];

const Education = () => {
  return (
    <section id="education" className=" mx-auto max-w-8xl p-14 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">Education</h2>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-orange-400"></div>

        <div className="space-y-20 relative">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center w-full`}
            >
              {/* Card Content */}
              <div
                className={`relative w-full md:w-2/5 p-10 rounded-2xl border-2 border-orange-400 bg-white shadow-lg ${
                  index % 2 === 0 ? "ml-auto text-right pr-12" : "mr-auto text-left pl-12"
                }`}
              >
                {/* Year Label */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-md font-medium shadow-md">
                  {item.year}
                </div>

                <h3 className="text-2xl font-semibold italic text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
              </div>

              {/* Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full shadow-lg border-4 border-white"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
