import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git", "GitHub", "RESTful APIs", "Redis", "RabbitMQ", "Responsive Design", "Figma"
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-10 py-20 bg-gray-300 dark:bg-gray-800">
      <h2 className="text-5xl font-bold text-center text-purple-600 mb-18">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1, rotate: 5 }}
             whileTap={{ scale: 1.1, rotate: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 text-center rounded-xl bg-white dark:bg-gray-400 shadow cursor-pointer hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
