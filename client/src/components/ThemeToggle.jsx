import { useEffect, useState } from "react";
 import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.button
     initial={{ y: -10, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ duration: 1 }}
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        fixed bottom-6 right-6 z-50
        px-4 py-2 rounded-full
        bg-black text-white
        dark:bg-white dark:text-black
        transition-all duration-300
      "
    >
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </motion.button>
  );
};

export default ThemeToggle;
