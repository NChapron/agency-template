import About from "../../features/about/About";
import Hero from "../../features/hero/Hero";
import Skills from "../../features/skills/Skills";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
    </>
  );
};

export default HomePage;
