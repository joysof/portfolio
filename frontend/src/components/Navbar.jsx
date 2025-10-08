import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemContext.jsx";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } =useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-100 my-8 rounded-lg  top-0 left-1/2 transform -translate-x-1/2 dark:bg-gray-900 shadow-lg fixed w-[85%] z-50">
      <div className="mx-auto flex justify-between items-center px-6 py-4">
       
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer dark:text-blue-400">Sajib.dev</h1>

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
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

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
        <ul className="md:hidden bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
