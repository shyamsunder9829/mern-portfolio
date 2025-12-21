const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-10 py-20 bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-6 text-center rounded-xl bg-white dark:bg-gray-800
            shadow hover:scale-105 transition transform
            hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500
            hover:text-white"
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
