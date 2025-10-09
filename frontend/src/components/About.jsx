import React from "react";
import about_img from '../assets/about_img.jpg'

const About = () => {
  return (
    <section
      id="about"
      className="mt-20 py-20 flex flex-col-reverse md:flex-row items-center justify-between 
      px-6 md:px-16 bg-gradient-to-b from-gray-50 to-gray-200 
      dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 
      transition-all duration-500 rounded-3xl shadow-lg overflow-hidden"
    >
      {/* ==== LEFT SIDE TEXT ==== */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 text-transparent bg-clip-text uppercase">
          About Me
        </h2>

        <p className="leading-relaxed text-lg">
          Hi, I'm{" "}
          <span className="text-blue-500 font-semibold">Sajib Hossen</span>, a
          passionate{" "}
          <span className="uppercase font-semibold">MERN Stack Developer</span>{" "}
          with a strong focus on building modern, responsive, and scalable web
          applications. I specialize in{" "}
          <span className="text-teal-500 font-semibold">
            MongoDB, Express.js, React, and Node.js
          </span>
          , and I love turning complex problems into elegant digital solutions.
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          With hands-on experience in both frontend and backend development, I
          enjoy crafting seamless user experiences and efficient APIs. I’m
          always exploring new technologies to stay ahead of the curve.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full 
            hover:from-teal-400 hover:to-blue-400 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-teal-500 text-teal-500 rounded-full 
            hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* ==== RIGHT SIDE IMAGE ==== */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full blur-xl opacity-40"></div>
          <img
            src={about_img}
            alt="Profile"
            className="relative rounded-full w-full h-full object-cover hover:border-4 hover:border-teal-400 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
