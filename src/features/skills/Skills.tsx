import React from "react";

import classes from "./Skills.module.css";
import skills from "../../assets/skills/design.png";
import SkillsItem from "./SkillsItem";

const DUMMY_SKILLS = [
  {
    id: "1",
    logo: skills,
    title: "Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non risus eget arcu rutrum.",
  },
  {
    id: "2",
    logo: skills,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non risus eget arcu rutrum.",
  },
  {
    id: "3",
    logo: skills,
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non risus eget arcu rutrum.",
  },
];

const Skills: React.FC = () => {
  return (
    <section className={classes.skills}>
      <ul>
        {DUMMY_SKILLS.map((item) => (
          <SkillsItem
            key={item.id}
            logo={item.logo}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
