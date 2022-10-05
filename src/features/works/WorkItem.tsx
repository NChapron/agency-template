import React from "react";
import Button from "../../components/button/Button";

import classes from "./WorkItem.module.css";

interface WorksProps {
  image: string;
  title: string;
  link: string;
}

const WorkItem: React.FC<WorksProps> = (props) => {
  const { image, title, link } = props;

  return (
    <li>
      <figure>
        <img src={image} />
        <figcaption className={classes.caption}>
          <h3>{title}</h3>
          <Button buttonStyle="primary" link={link}>
            See more
          </Button>
        </figcaption>
      </figure>
    </li>
  );
};

export default WorkItem;
