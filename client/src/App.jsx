import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dark:bg-black">
      <Navbar scrollTo={scrollTo} />
      <Sidebar scrollTo={scrollTo} />

      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
