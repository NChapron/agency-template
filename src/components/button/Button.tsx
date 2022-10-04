import React from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  link: string;
  children?: React.ReactNode;
  onClick?: () => void;
  buttonStyle: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { link, buttonStyle, children } = props;

  return (
    <button className={classes.button} data-style={buttonStyle}>
      <a href={link}>{children}</a>
    </button>
  );
};

export default Button;
