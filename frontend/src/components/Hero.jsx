
import profile from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section className="h-screen mt-25 md:mt-30 justify-center rounded-4xl flex flex-col md:flex-row md:justify-between items-center text-center md:text-left bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 md:px-20 transition-colors duration-500 overflow-hidden">
      
      {/* Left Side - Profile Image */}
      <div className="mb-8 md:mb-0">
        <img
          className="w-56 h-56 rounded-full border-4 border-transparent hover:border-teal-400 shadow-lg hover:shadow-teal-400/50 transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer object-cover"
            src={profile}
            alt="Sajib Hossen"
        />
      </div>

      {/* Right Side - Text */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">

        <h2 className="uppercase text-lg md:text-xl tracking-widest text-gray-600 dark:text-gray-400 animate-fade-in">
          Full Stack Developer
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 animate-slide-in">
          Hi, I’m Sajib Hossen
        </h1>
        <p className="mt-2 md:mt-4 text-md md:text-lg max-w-md text-gray-700 dark:text-gray-300 animate-fade-in">
          I'm a MERN Stack Developer passionate about building modern, responsive web applications and delivering seamless user experiences.
        </p>
        
        
        
        <div className="mt-4 flex space-x-4">
          <a
            href="#portfolio"
            className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-300 transition-all duration-300"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
