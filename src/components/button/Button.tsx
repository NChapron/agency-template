import React from "react";

import classes from "./Button.module.css";

interface Props {
  link: string;
  children?: React.ReactNode;
  onClick?: () => void;
  buttonStyle: string;
}

const Button: React.FC<Props> = (props) => {
  const { link, buttonStyle, children } = props;

  return (
    <button className={classes.button} data-style={buttonStyle}>
      <a href={link}>{children}</a>
    </button>
  );
};

export default Button;
