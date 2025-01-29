import React from "react";

// Import images (Replace these with actual paths)
import charlesSchwabImg from "./assets/charlesSchwab.png";
import transUnionImg from "./assets/TransUnion1.png";
import fssTechImg from "./assets/FSS-Logo.png";

// Experience data
const experiences = [
  {
    title: "Software Engineer",
    company: "Charles Schwab, USA",
    duration: "Jan 2024 – Present",
    image: charlesSchwabImg,
    gradient: "bg-white",
    textColor: "text-blue-900",
    buttonColor: "bg-green-500 hover:bg-green-700",
    link: "https://www.schwab.com/",
  },
  {
    title: "Associate Software Developer",
    company: "TransUnion, India",
    duration: "Jul 2019 – Aug 2022",
    image: transUnionImg,
    gradient: "bg-gray-100",
    textColor: "text-blue-900",
    buttonColor: "bg-green-500 hover:bg-green-700",
    link: "https://www.transunion.com/?atvy=%7B%22264995%22%3A%22Experience+B%22%7D",
  },
  {
    title: "Software Engineer - I",
    company: "FSS Technology Inc., India",
    duration: "Jul 2016 – Jul 2019",
    image: fssTechImg,
    gradient: "bg-white",
    textColor: "text-blue-900",
    buttonColor: "bg-green-500 hover:bg-green-700",
    link: "https://www.fsstech.com/",
  },
];

const ProfessionalExperience = () => {
  return (
    <section id="experience" className="w-full">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Professional Experience
      </h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center ${exp.gradient} overflow-hidden mb-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
        >
          {/* Image Section (Full Width to Edge) */}
          <div className="w-full md:w-[50%] h-[500px]">
            <img
              src={exp.image}
              alt={exp.company}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section (Centered Content) */}
          <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100/50 to-indigo-200/50 backdrop-blur-md rounded-xl shadow-lg">
            <h3 className={`text-2xl font-bold ${exp.textColor}`}>{exp.title}</h3>
            <p className="text-lg text-gray-600">{exp.company}</p>
            <p className="text-md text-gray-500">{exp.duration}</p>
            
            {/* Read More Button (Small & Properly Sized) */}
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn mt-3"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProfessionalExperience;
