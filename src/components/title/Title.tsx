import React from "react";

import classes from "./Title.module.css";
import dot from "../../assets/title/ellipsis.png";

interface TitleProps {
  align?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = (props) => {
  const { align, children } = props;

  const dataAlign = !align ? "center" : align;

  return (
    <div className={classes.title} data-align={dataAlign}>
      <h2>{children}</h2>
      <span>
        <img src={dot} />
      </span>
    </div>
  );
};

export default Title;
