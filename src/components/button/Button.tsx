import React from "react";

import classes from "./Button.module.css";

interface Props {
  className: string;
  link: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  const { className, link, children } = props;

  let buttonClasses;

  if (className === "primary") {
    buttonClasses = classes.primary;
  } else if (className === "secondary") {
    buttonClasses = classes.secondary;
  } else {
    buttonClasses = "";
  }

  return (
    <button className={buttonClasses}>
      <a href={link}>{children}</a>
    </button>
  );
};

export default Button;
