
    import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-linear-to-r from-purple-500 to-pink-500 text-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-500">
       <motion.img
           initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
          src="img.webp"
          alt="profile"
          className="w-60 h-60 rounded-full mx-auto mt-20 border-15 border-white"
        />
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mt-6 md:text-7xl text-center mb-4">
          Hi, I'm <span className="text-yellow-300">Shyam Sunder</span>
        </motion.h1>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 text-3xl">
          MERN Stack Developer 
        </motion.h1>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 text-xl">
         phone: +91 9829696171
        </motion.h1>
        <motion.a 
          initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="inline-block text-xl mt-1 hover:text-blue-900" href="https://mail.google.com/mail/?view=cm&fs=1&to=shyamsuthar9829@gmail.com" target="_blank" rel="noopener noreferrer" >Email: shyamsuthar9829@gmail.com</motion.a>
        
        <motion.a 
          initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="inline-block text-xl mt-1 hover:text-blue-900" href="https://www.linkedin.com/in/shyam-sunder-06a66536a" target="_blank" rel="noopener noreferrer"  > 👤 Linkedin Profile </motion.a>




    </section>
  );
};


export default Hero;
