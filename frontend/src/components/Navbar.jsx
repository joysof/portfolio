import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navegate = useNavigate()
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header>
      <nav className="bg-gray-100 rounded-3xl fixed top-4 left-1/2 transform -translate-x-1/2 dark:bg-gray-900 shadow-lg w-[85%] z-50 backdrop-blur-md bg-opacity-80">
      <div className="mx-auto flex justify-between items-center px-6 py-4">
       
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer dark:text-blue-400" onClick={()=>navegate('/')}>Sajib.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className=" relative
          text-gray-800 dark:text-gray-200 
          hover:text-blue-500 dark:hover:text-blue-400 
          transition-colors duration-300
          after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full
        "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className=" md:hidden bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-black dark:hover:bg-purple-100 rounded-full  px-5 py-2"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
    </header>
  );
};

export default Navbar;
