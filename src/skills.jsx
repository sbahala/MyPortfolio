import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt"; // For 3D hover effect

// Skills Data
const skills = [
  {
    category: "Front-End",
    skills: ["React.js", "Next.js", "Angular", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS"],
  },
  {
    category: "Back-End",
    skills: [ "Java","Python","Spring MVC", "Node.js", "Express.js", "Spring Boot", "Django", "GraphQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "CI/CD & DevOps",
    skills: [ "Jenkins", "GitHub Actions", "Bitbucket", "Docker", "Kubernetes", "Terraform", "AWS Lambda"],
  },
  {
    category: "DataBase & Cloud Platforms",
    skills: ["Oracle Pl/SQL","Postgre SQL","MySQL","MongoDB","Cloud FireStore","AWS", "Firebase"],
  },
];

// Smooth Infinite Scrolling for Skills
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-white-900 p-14 rounded-2xl text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-white-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-black-400 mb-12">
          My Skills
        </h2>

        {/* Floating Animated Skills */}
        <div className="relative overflow-hidden w-full py-6">
          <motion.div
            className="flex space-x-10 w-max"
            variants={marqueeVariants}
            animate="animate"
          >
            {skills.flatMap((category, index) =>
              category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={`${index}-${skillIndex}`}
                  className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg border border-orange-400 hover:scale-110 transition-transform text-lg font-semibold"
                  whileHover={{ scale: 1.2 }}
                >
                  {skill}
                </motion.div>
              ))
            )}
          </motion.div>
        </div>

        {/* Category Grid with Modern Shapes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12">
          {skills.map((category, index) => (
            <Tilt key={index} options={{ max: 20, scale: 1.05, speed: 400 }}>
              <motion.div
                className="relative p-6 bg-white-800 rounded-xl shadow-xl border border-orange-500 transition-transform hover:shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Curved Background Shape */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500 rounded-full blur-lg opacity-50"></div>

                <h3 className="text-3xl font-semibold text-white-400 mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-white-700 px-4 py-2 rounded-full text-center text-lg hover:bg-orange-500 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
