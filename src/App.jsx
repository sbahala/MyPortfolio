import './App.css';
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // For smooth scroll animations
import TechnologyStack from "./TechnologyStack";
import ProfessionalExperience from './ProfessionalExperience';
import Introduction from './Introduction';
import Education from './Education';
import ContactForm from './ContactForm';
import Projects from './Projects';
import Skills from './skills';

// Animation variants for scrolling effects
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const App = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-200 to-purple-300 w-full font-sans">
      {/* Header Section with Fade-in Effect */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-gray-400 via-gray-600 to-orange-500 text-white text-center py-4 w-full fixed top-0 z-50 shadow-md"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
        <h1 className="text-2xl font-bold">
            Sushmita <span className="text-orange-500">Bahala</span>
        </h1>
        <nav className="flex space-x-8 text-lg font-medium">
          <a href="#introduction" className="hover:text-orange-400">Introduction</a>
          <a href="#education" className="hover:text-orange-400">Education</a>
          <a href="#experience" className="hover:text-orange-400">ProfessionalExperience</a>
          <a href="#skills" className="hover:text-orange-400">Skills</a>
          <a href="#projects" className="hover:text-orange-400">Recent Projects</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
        </nav>
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
        {/*<button className="bg-pink-500 text-black rounded-full px-4 py-2 shadow-lg hover:bg-pink-400 transition-colors">
          <i className="fas fa-moon"></i>
        </button>*/}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 p-8 space-y-8">
        {/* Technology Stack Section with Ladder Effect */}
       {/*<TechnologyStack />*/}
        <Introduction/>

        {/* Sections with Scroll-in Animation 
        <ScrollSection>
          <section id="introduction" className="bg-white mx-auto max-w-6xl rounded-2xl p-6 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 font-bold">
              Welcome to my portfolio! I’m a Software Engineer with a master’s degree in Software Engineering from Stevens Institute of Technology and have 6 years of professional experience. This page highlights my skills, experience, and project work, showcasing my expertise in programming languages, web development, and cloud-based solutions.
              Feel free to explore my work and see how I’ve contributed to building scalable, high-performance applications with a focus on efficiency, innovation, and user experience.
            </p>
          </section>
        </ScrollSection>*/}
        <ScrollSection>
          <Education />
        </ScrollSection>
        {/* Experience Section */}
        <ScrollSection>
          <ProfessionalExperience />
        </ScrollSection>
        <ScrollSection>
          <Skills/>
        </ScrollSection>

        {/* Resume Section with Hover Effect 
        <ScrollSection>
          <section id="resume" className="bg-white rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Download My Resume</h2>
            <a
              href="/Bahala_Sushmita_Resume.pdf"
              download="Bahala_Sushmita_Resume.pdf"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Download Resume
            </a>
          </section>
        </ScrollSection>*/}

        {/* Projects Section 
        <ScrollSection>
          <section id="projects" className="bg-white mx-auto max-w-6xl shadow-lg rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard title="Med Tracker" description="Developed a hospital management system for patients, doctor and nurse with real-time slot booking, cancellation and recommendation." link="https://github.com/sbahala/med_tracker" />
              <ProjectCard title="Hotel Management System" description="Led and built a hotel management system in a group of 5 covering all functionalities." link="https://github.com/sbahala/SuitStay" />
            </div>
          </section>
        </ScrollSection>*/}
        <ScrollSection>
          <Projects />
        </ScrollSection>

        {/* Social Links Section 
        <ScrollSection>
          <section id="social-links" className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect with Me</h2>
            <ul className="flex space-x-8 justify-center">
              <SocialLink platform="LinkedIn" url="https://www.linkedin.com/in/sushmitabahala/" icon="fab fa-linkedin-in" />
              <SocialLink platform="GitHub" url="https://github.com/sbahala" icon="fab fa-github" />
            </ul>
          </section>
        </ScrollSection>*/}
        <ScrollSection>
          <ContactForm />
        </ScrollSection>

        {/* Summary Section */}
        <ScrollSection>
          <section id="summary" className="bg-white shadow-lg rounded-2xl p-6">
            <p className="text-gray-700">
              Feel free to reach out to me at <strong>sushmita.bahala@gmail.com</strong>. I'm always open to new opportunities and collaborations!
            </p>
            <p className="text-gray-700 mt-2">Connect with me to explore how we can work together.</p>
          </section>
        </ScrollSection>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-200 mt-8">
        <p className="text-gray-600">© 2025 Sushmita Bahala. All rights reserved.</p>
      </footer>
    </div>
  );
};

/* Component for Scroll Animation */
const ScrollSection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="transition-transform transform hover:scale-105"
    >
      {children}
    </motion.div>
  );
};

/* Reusable Project Card */
const ProjectCard = ({ title, description, link }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-700 mt-2">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">
      View on GitHub
    </a>
  </div>
);

/* Reusable Social Link */
const SocialLink = ({ platform, url, icon }) => (
  <li className="flex items-center space-x-2">
    <span className="ml-2 text-gray-700">{platform}</span>
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center">
      <i className={`${icon} text-2xl`}></i>
    </a>
  </li>
);

export default App;
