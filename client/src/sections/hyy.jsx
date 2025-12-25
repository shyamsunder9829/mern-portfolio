import React from 'react'

const hyy = () => {
  return (
    <div>
              <h1 className="text-5xl font-bold mt-6">
          Hi, I'm <span className="text-yellow-300">Shyam Sunder</span>
        </h1>

        <h1 className="mt-4 text-3xl">
          MERN Stack Developer 
        </h1>
        <h1 className="mt-4 text-xl">
         phone: +91 9829696171
        </h1>
        <a className="inline-block text-xl mt-1 hover:text-blue-900" href="https://mail.google.com/mail/?view=cm&fs=1&to=shyamsuthar9829@gmail.com" target="_blank" rel="noopener noreferrer" >Email: shyamsuthar9829@gmail.com</a>
        <br />
        <a className="inline-block text-xl mt-1 hover:text-blue-900" href="https://www.linkedin.com/in/shyam-sunder-06a66536a" target="_blank" rel="noopener noreferrer"  >Linkedin Profile</a>





      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="text-xl md:text-2xl text-center max-w-xl"
      >
        A passionate MERN Stack Developer creating beautiful web experiences.
      </motion.p>





{/* about */}
        <section id="about" className="flex flex-col items-center min-h-screen p-10">
      <h2 className="text-4xl mt-3 font-bold text-purple-600">About Me</h2>
    <div className="w-1/2 mt-6">
        <p className="text-white mt-4 text-3xl transition-transform duration-300 hover:scale-110">
        I am a passionate MERN Stack Developer and an MCA second-year student at University of Technology,Jaipur. I love building web applications that are both functional and visually appealing.
        <p className="text-white mt-4 text-3xl"> My goal is to create seamless user experiences through clean and efficient code. I enjoy collaborating with teams and continuously learning new technologies to enhance my skills. I am working on turning complex problems into simple, elegant solutions using MongoDB, Express.js, React, and Node.js.</p>
      </p>
    </div>
    </section>






{/* skills */}
    <section
      id="skills"
      className="min-h-screen px-10 py-20 bg-gray-100 dark:bg-gray-800"
    >
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-6 text-center rounded-xl bg-white dark:bg-gray-400
            shadow hover:scale-105 transition transform
            hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500
            hover:text-white"
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </section>














    </div>
  )
}

export default hyy
