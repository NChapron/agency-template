import React from "react";
import Button from "../../components/button/Button";

import classes from "./About.module.css";

import aboutImg from "../../assets/about/book.jpg";

const About: React.FC = () => {
  return (
    <section className={`container ${classes.about}`}>
      <div className="flow">
        <h2>We help to boost your digital assets</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. officia consequat duis enim velit
          mollit.
        </p>
        <Button buttonStyle="primary" link="#">
          Learn More
        </Button>
      </div>
      <div className={classes.video}>
        <button />
      </div>
    </section>
  );
};

export default About;
