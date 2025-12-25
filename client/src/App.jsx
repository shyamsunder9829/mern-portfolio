import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Project from "./sections/Project";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white ">
      <Navbar scrollTo={scrollTo} />
      <Sidebar scrollTo={scrollTo} />
      <ThemeToggle />


      <Hero />
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
