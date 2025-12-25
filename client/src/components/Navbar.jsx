 import { motion } from "framer-motion";
 import {User} from "lucide-react";

export default function Navbar({ scrollTo }) {
  return (
    <motion.nav
     initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
    className="hidden md:flex fixed top-0 w-full bg-white dark:bg-black
      shadow px-10 py-4 justify-between z-40">
      <div className="flex items-center gap-3">
          <User fill="black" />
      <h1 className="font-bold pb-1 text-4xl text-purple-600">PORTFOLIO</h1>
      </div>

      <div className="flex gap-6 font-medium">
        {["about","skills","education","projects","contact"].map(item => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="hover:text-purple-600"
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
