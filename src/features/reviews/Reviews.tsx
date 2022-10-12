import React from "react";
import Button from "../../components/button/Button";
import Title from "../../components/title/Title";

import classes from "./Reviews.module.css";

import design from "../../assets/skills/design.png";
import ReviewItem from "./ReviewItem";

const DUMMY_REVIEWS = [
  {
    id: "1",
    image: design,
    review:
      "Amet minim mollit non deserunt ullamco est sit dolor do sint. Velit officia consequat duis.",
    author: "John Doe",
    position: "CEO",
  },
  {
    id: "2",
    image: design,
    review:
      "Amet minim mollit non deserunt ullamco est sit dolor do sint. Velit officia consequat duis.",
    author: "John Doe",
    position: "CEO",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className={classes.reviews}>
      <div className="container">
        <div className={classes.ourClients}>
          <Title align="left">Our Clients</Title>
          <p>
            Amet minim mollit non deserunt ullamco est sit dolor do sint. Velit
            officia consequat duis. Amet minim mollit non deserunt ullamco.
            <br /> <br /> Amet minim mollit non deserunt ullamco est sit dolor
            do sint. Velit officia consequat duis. Amet minim mollit non
            deserunt ullamco.
          </p>
        </div>
        <ul>
          {DUMMY_REVIEWS.map((item) => (
            <ReviewItem
              key={item.id}
              image={item.image}
              review={item.review}
              author={item.author}
              position={item.position}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;
