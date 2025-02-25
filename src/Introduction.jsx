import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profilePic from "./assets/profile.jpg";

const Introduction = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "Full Stack Developer", "Passionate Coder"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <section id="introduction" className="bg-white mx-auto max-w-7xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-10 transition-transform transform hover:scale-105">
      {/* Text Section */}
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hi, It's <span className="text-orange-500">Sushmita</span>
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          I'm a <span ref={typedRef} className="text-orange-500"></span>
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Hello! I'm a passionate Coder a deep love for coding and technology. I have hands-on experience with React, Node, HTML, CSS, JavaScript, Java and React.js. My goal is to learn everyday use my skill as a Full Stack Developer and explore AI and ML.
        </p>
        <div className="flex gap-6 mt-6 justify-center md:justify-start">
          <a href="/resume.pdf" download className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600">Download CV</a>
          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800">Contact</a>
          <h5>Work in Progress</h5>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
        <img src={profilePic} alt="Sushmita" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Introduction;
