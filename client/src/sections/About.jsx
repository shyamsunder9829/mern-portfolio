export default function About() {
  return (
    <section id="about" className="min-h-screen p-10 flex flex-col items-center bg-gray-200 dark:bg-black">
      <h2 className="text-5xl mt-4 font-bold text-purple-600">About Me</h2>
    <div className="w-1/2 mt-6 transition-transform duration-600 hover:scale-110">
        <p className="text-black dark:text-white mt-4 text-3xl ">
        I am a passionate MERN Stack Developer and an MCA second-year student at University of Technology,Jaipur. I love building web applications that are both functional and visually appealing.</p>
        <p className="text-black dark:text-white mt-4 text-3xl"> My goal is to create seamless user experiences through clean and efficient code. I enjoy collaborating with teams and continuously learning new technologies to enhance my skills. I am working on turning complex problems into simple, elegant solutions using MongoDB, Express.js, React, and Node.js.</p>
      
    </div>
    </section>
  );
}
