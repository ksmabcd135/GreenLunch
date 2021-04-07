import React from "react";
import classes from "./Title.css";

const title = () => {
  let title = "Test Title";
  return <h1 className={classes.Header}>{title}</h1>;
};

export default title;
