import Button from "../../components/button/Button";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={`${classes.hero} flow`}>
      <h1>Target Agency</h1>
      <p data-width="wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non risus
        eget arcu rutrum congue. Integer luctus nunc vitae.
      </p>
      <div>
        <Button buttonStyle="primary" link="#">
          Get Started
        </Button>
        <Button buttonStyle="secondary" link="#">
          Learn More
        </Button>
      </div>
    </section>
  );
}

export default Hero;
