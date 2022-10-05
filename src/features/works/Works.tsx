import React from "react";
import WorkItem from "./WorkItem";

import classes from "./Works.module.css";

import image from "../../assets/about/book.jpg";
import Title from "../../components/title/Title";

const DUMMY_WORKS = [
  {
    id: "1",
    title: "Work 1",
    link: "#",
  },
  {
    id: "2",
    title: "Work 2",
    link: "#",
  },
  {
    id: "3",
    title: "Work 3",
    link: "#",
  },
  {
    id: "4",
    title: "Work 4",
    link: "#",
  },
  {
    id: "5",
    title: "Work 5",
    link: "#",
  },
  {
    id: "6",
    title: "Work 6",
    link: "#",
  },
];

const Works: React.FC = () => {
  return (
    <section className={classes.works}>
      <Title>Our Works</Title>
      <ul>
        {DUMMY_WORKS.map((item) => (
          <WorkItem
            key={item.id}
            image={image}
            title={item.title}
            link={item.link}
          />
        ))}
      </ul>
    </section>
  );
};

export default Works;
