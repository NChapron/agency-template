import About from "../../features/about/About";
import Hero from "../../features/hero/Hero";
import Skills from "../../features/skills/Skills";
import Works from "../../features/works/Works";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Works />
    </>
  );
};

export default HomePage;
