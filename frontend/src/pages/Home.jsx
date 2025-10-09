import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";


const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
};

export default Home;
