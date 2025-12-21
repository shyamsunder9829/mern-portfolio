import { useState } from "react";

const Sidebar = ({ scrollTo }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-4 text-2xl"
      >
        ☰
      </button>

      {open && (
        <div className="bg-black text-white w-60 h-screen p-6">
          {["about", "skills", "education", "contact"].map(item => (
            <p
              key={item}
              onClick={() => {
                scrollTo(item);
                setOpen(false);
              }}
              className="mb-6 cursor-pointer"
            >
              {item.toUpperCase()}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
