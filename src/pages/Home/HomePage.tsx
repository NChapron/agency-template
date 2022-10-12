import About from "../../features/about/About";
import Hero from "../../features/hero/Hero";
import Reviews from "../../features/reviews/Reviews";
import Skills from "../../features/skills/Skills";
import Works from "../../features/works/Works";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Works />
      <Reviews />
    </>
  );
};

export default HomePage;
