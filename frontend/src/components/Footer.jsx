import React from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-200 rounded-3xl dark:bg-gray-800 text-center py-6 mt-5 md:mt-10">
      <p className="text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Sajib.dev | All Rights Reserved.
      </p>
      <div className="flex justify-center gap-6 mt-3 text-xl">
        <a href="https://www.facebook.com/mdsajib.sikther" className="hover:text-blue-600 dark:bg-white dark:hover:text-blue-400 transition">
          <FaFacebook />
        </a>
        <a href="https://github.com/joysof" className="hover:text-blue-600 dark:bg-white dark:hover:text-blue-400 transition">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/md-sajib-hossen-abab46385" className="hover:text-blue-600 dark:bg-white dark:hover:text-blue-400 transition">
           <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
