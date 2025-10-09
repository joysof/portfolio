import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";


const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
