import React from "react";
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { useProjects } from "../context/Project.context.jsx";
// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Website",
//     desc: "A full-featured MERN e-commerce platform with product management, cart, and admin panel.",
//     tech: ["React", "Node.js", "MongoDB", "Express.js"],
//     link: "https://yourlink.com",
//     github: "https://github.com/yourgithub/ecommerce",
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     desc: "A personal portfolio showcasing skills and projects, built with React and Tailwind CSS.",
//     tech: ["React", "Tailwind", "Vite"],
//     link: "#",
//     github: "https://github.com/joysof/portfolio",
//   },
//   {
//     id: 3,
//     title: "Task Manager App",
//     desc: "A simple task management app with user authentication and real-time updates.",
//     tech: ["React", "Node.js", "MongoDB" ,"Express.js"],
//     link: "https://bd-calling-assessment-frontend.onrender.com",
//     github: "https://github.com/joysof/bd_Calling_assessment",
//   },
// ];



const Projects = () => {
  const { projects, loading } = useProjects();
  console.log("teechStack" ,projects.techStack)
   if (loading) return <p>Loading projects...</p>;
  return (
    <section
      id="projects"
      className="mt-5 py-10 md:py-20 md:mt-10 rounded-3xl shadow-lg  bg-gradient-to-b from-gray-50 to-gray-200 
      dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 text-center transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
        My Projects
      </h2>

      <div className=" md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8 px-6 md:px-16">
        {projects.map((project ,) => (
          <div
            key={project._id}
            className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 
            dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 
            transition-all duration-500 my-10"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm  md:text-[16px] mb-4">{project.desc}</p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {project.techStack.map((t, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 
                  rounded-full text-xs md:text-[16px] font-medium shadow-md"
                >
                  {t}
                </span>
              ))}
            </div>

            
            <div className="flex gap-4 justify-center items-center mt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 sm:px-5 lg:px-8  md:py-3 bg-gradient-to-r from-teal-500 to-blue-500 
                text-white rounded-full hover:from-teal-400 hover:to-blue-400 shadow-md hover:shadow-lg 
                transition-all duration-300"
              >
                <BsGlobe className="text-xl md:text-2xl" />
                <span className="hidden sm:inline">Live</span>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex  items-center justify-center px-3 py-2 gap-2 sm:px-5 lg:px-8 sm:py-3 border-2 border-teal-500 
                text-teal-500 rounded-full hover:bg-teal-500 hover:text-white 
                transition-all duration-300"
              >
                <FaGithub className="text-xl md:text-2xl" />
                <span className="hidden sm:inline">Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
