import { User } from 'lucide-react';

const Navbar = ({ scrollTo }) => {
  return (
    <nav className="hidden md:flex fixed text-white  top-0 w-full bg-white dark:bg-black shadow z-50 px-10 py-4 justify-between">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
      <User height={24} strokeWidth="4"/>
      <h1 className="text-4xl font-bold text-purple-600">Portfolio</h1>
      </div>

      <ul className="flex items-center gap-6">
        {["about", "skills", "education", "contact"].map(item => (
          <li
            key={item}
            onClick={() => scrollTo(item)}
            className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-purple-500"
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>