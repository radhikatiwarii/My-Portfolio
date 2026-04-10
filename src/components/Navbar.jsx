import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-500 bg-transparent">
      <div className="mx-auto px-4 sm:px-6 lg:px-[5%]">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#Home" className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
              Radhika Tiwari
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-8">
              {["Home", "About", "Portfolio", "Contact"].map((item) => (
                <a key={item} href={`#${item}`} className="group relative px-1 py-2 text-sm font-medium">
                  <span className="relative z-10 transition-colors duration-300 text-[#e2d3fd] group-hover:text-white">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="relative p-2 text-[#e2d3fd] hover:text-white">
              {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#030014] px-4 py-6 space-y-4">
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-lg font-medium text-[#e2d3fd] hover:text-white">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
