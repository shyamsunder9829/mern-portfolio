const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen px-10 py-20 dark:bg-black"
    >
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-l-4 border-purple-600 pl-6">
          <h3 className="text-2xl font-semibold">
            B.Sc. Mathematics
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            2021 – 2024
          </p>
          <p className="mt-2">
            Learned analytical thinking, logic, and problem solving.
          </p>
        </div>

        <div className="border-l-4 border-pink-600 pl-6">
          <h3 className="text-2xl font-semibold">
            MERN Stack Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Self Learning
          </p>
          <p className="mt-2">
            Built full-stack applications using React, Node, MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
