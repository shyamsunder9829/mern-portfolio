import { useState } from "react";

export default function Sidebar({ scrollTo }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl m-2"
      >
        ☰
      </button>

      {open && (
        <div className="bg-black text-white w-60 h-screen p-6 mt-2">
                <h1 className="font-bold pb-6 text-2xl text-purple-600">PORTFOLIO</h1>

          {["about","skills","education","projects","contact"].map(item => (
            <p
              key={item}
              onClick={() => {
                scrollTo(item);
                setOpen(false);
              }}
              className="mb-4"
            >
              {item.toUpperCase()}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
