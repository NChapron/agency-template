import React from "react";

import classes from "./Title.module.css";
import dot from "../../assets/title/ellipsis.png";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = (props) => {
  const { children } = props;

  return (
    <div className={classes.title}>
      <h2>{children}</h2>
      <span>
        <img src={dot} />
      </span>
    </div>
  );
};

export default Title;
