import React from "react";

interface SkillsProps {
  logo: string;
  title: string;
  description: string;
}

const SkillsItem: React.FC<SkillsProps> = (props) => {
  const { logo, title, description } = props;
  return (
    <li>
      <img src={logo} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default SkillsItem;
