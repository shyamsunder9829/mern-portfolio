import { useState } from "react";
import { motion } from "framer-motion";
import project1img from "../assets/project1.png";
import project2img from "../assets/project2.png";

const projects = [
  {
    title: "Portfolio Website",
    image: project1img,
    github: "https://github.com/shyamsunder9829/mern-portfolio.git",
    Website: "https://shyamsunder9829.github.io/mern-portfolio/",
    description: "Animated portfolio built with MERN stack"
  },
  {
    title: "GlowSense AI",
    image: project2img,
    github: "https://github.com/shyamsunder9829/GlowSense-AI.git",
    Website: "https://glowsense-ai.netlify.app/",
    description: "GlowSense AI is a MERN stack beauty analysis platform that provides skin-type detection and personalized product recommendations with a modern UI, dark/light theme, and cloud-based deployment."
  }
];

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen px-10 py-20  bg-gray-300 dark:bg-gray-800">
      <h2 className="text-5xl font-bold text-center text-purple-600 mb-10">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl shadow-lg overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-900"
            onClick={() => setModalProject(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover"/>
            <div className="p-5">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                GitHub Link
              </a>
              <a
                href={project.Website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Website Link
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setModalProject(null)}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-lg mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{modalProject.title}</h3>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p>{modalProject.description}</p>
            <a
              href={modalProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-3 block"
            >
              GitHub Repository
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
