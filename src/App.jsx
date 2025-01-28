//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Timeline from "./Timeline";
import React from "react";
import transUnionImg from "./assets/TransUnion1.png";
import fssTechImg from "./assets/FSS-Logo.png";
import charlesSchwab from "./assets/charlesSchwab.png";
import ProfessionalExperience from './ProfessionalExperience';

const experiences = [
  {
    title: "Software Engineer",
    company: "Charles Schwab",
    duration: "Jan 2024 – Till Date",
    image: charlesSchwab,
    gradient: "from-yellow-300 via-orange-400 to-red-400",
  },
  {
    title: "Associate Software Developer",
    company: "TransUnion, India",
    duration: "Jul 2019 – Aug 2022",
    image: transUnionImg,
    gradient: "from-yellow-300 via-orange-400 to-red-400",
  },
  {
    title: "Software Engineer - I",
    company: "FSS Technology Inc., India",
    duration: "Jul 2016 – Jul 2019",
    image: fssTechImg,
    gradient: "from-green-400 via-blue-400 to-yellow-500",
  },
];

const App = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-200 to-purple-300  w-full font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Hi, I'm Sushmita Bahala</h1>
        <p className="text-lg mt-2">A passionate software developer</p>
        <div className="absolute top-4 right-4 flex space-x-4">
          <a
            href="https://www.linkedin.com/in/sushmitabahala/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a
            href="https://github.com/sbahala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>

      </header>
      {/*<Timeline />*/}

      {/* Main Content */}
      <main className="p-8 space-y-16">
        {/* Introduction Section */}
        <section id="introduction" className="bg-white mx-auto max-w-6xl rounded-2xl p-6 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 font-bold">
          Welcome to my portfolio! I’m a Software Engineer with a master’s degree in Software Engineering from Stevens Institute of Technology and 7 years of professional experience. This page highlights my skills, experience, and project work, showcasing my expertise in Java programming, web development, and cloud-based solutions.
          Feel free to explore my work and see how I’ve contributed to building scalable, high-performance applications with a focus on efficiency, innovation, and user experience
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="bg-white mx-auto max-w-6xl shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Education</h2>
          <strong>Master's in Software Engineering</strong>, Stevens Institute of Technology<br></br>
          <strong>Bachelor of Technology in Computer Science</strong>, Silicon Institute of Technology
         
        </section>

        {/* Experience Section */}
        <ProfessionalExperience/>


      <section id="resume" className="bg-white rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Download My Resume</h2>
          <a
            href="/SushmitaBahala_Software Engineer_Resume.pdf"
            download="SushmitaBahala_Software Engineer_Resume.pdf"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Download Resume
          </a>
        </section>




        {/* Projects Section */}
        <section id="projects" className="bg-white mx-auto max-w-6xl shadow-lg rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Med Tracker</h3>
              <p className="text-gray-700 mt-2">Developed a hospital management system for patients, doctor and nurse with real-time slot booking, cancellation and recommendation.</p>
              <a
                href="https://github.com/yuzhi-wang/med_tracker/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View on GitHub
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Hotel Management System</h3>
              <p className="text-gray-700 mt-2">Led and Built a Hotel management system in a group of 5 covering all functionalities</p>
              <a
                href="https://github.com/mahesh349/SuitStay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section id="social-links" className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect with Me</h2>
        <ul className="flex space-x-8 justify-center">
          {/* LinkedIn */}
          <li className="flex items-center space-x-2">
          <span className="ml-2 text-gray-700">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/sushmitabahala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 flex items-center"
            >
              {/* Use smaller icon size */}
              <i className="fab fa-linkedin-in text-2xl"></i>
              
            </a>
          </li>
          {/* GitHub */}
          <li className="flex items-center space-x-2">
          <span className="ml-2 text-gray-700">GitHub</span>
            <a
              href="https://github.com/sbahala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 flex items-center"
            >
              {/* Use smaller icon size */}
              <i className="fab fa-github text-2xl"></i>
              
            </a>
          </li>
        </ul>
      </section>




        {/* Summary Section */}
        <section id="summary" className="bg-white shadow-lg rounded-2xl p-6">
          
          <p className="text-gray-700">
            Feel free to reach out to me at <strong>sushmita.bahala@gmail.com</strong>. I'm always open to new opportunities and collaborations!
          </p>
          <p className="text-gray-700 mt-2">Connect with me to explore how we can work together.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-200 mt-8">
        <p className="text-gray-600">© 2025 Sushmita Bahala. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;