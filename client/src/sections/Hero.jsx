const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-500 to-pink-500">
      <div className="text-center text-white">
        
        <img
          src="img.webp"
          alt="profile"
          className="w-60 h-60 rounded-full mx-auto border-4 border-white"
        />

        <h1 className="text-4xl font-bold mt-6">
          Hi, I'm <span className="text-yellow-300">Shyam</span>
        </h1>

        <h1 className="mt-4 text-xl">
          MERN Stack Developer 
        </h1>
        <h1 className="mt-4 text-xl">
         phone: +91 9829696171
        </h1>
        <h1 className="mt-4 text-xl">
          Email: shyamsuthar@gmail.com
        </h1>

      </div>
    </section>
  );
};

export default Hero;
