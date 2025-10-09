import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemContext.jsx";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0">
      <nav className="w-[85%] mx-auto flex justify-between items-center py-4 px-6 rounded-3xl backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 shadow-lg transition-colors duration-500 mt-4">
        
        {/* Logo */}
        <h1
          className="text-2xl font-bold  text-blue-600 dark:text-blue-400 cursor-pointer  transition-transform duration-300"
          onClick={() => navigate("/")}
        >
          Sajib.dev
           
        </h1>
      

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                 className="px-6 py-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-800 hover:text-blue-600 dark:hover:text-blue-200 transition-all duration-300"
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
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  fixed top-20 left-1/7 rounded-4xl w-[70%] justify-center items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col mx-auto items-center justify-center space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                 className="px-6 py-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
