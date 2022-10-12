import React from "react";

import classes from "./ReviewItem.module.css";

interface ReviewProps {
  image: string;
  review: string;
  author: string;
  position: string;
}

const ReviewItem: React.FC<ReviewProps> = (props) => {
  const { image, review, author, position } = props;

  return (
    <li className={`flow ${classes.reviewItem}`}>
      <img src={image} />
      <p>{review}</p>
      <h3>{author}</h3>
      <p>{position}</p>
    </li>
  );
};

export default ReviewItem;
