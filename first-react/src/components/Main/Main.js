import React from "react";
import classes from "./main.module.css";

const Main = (props) => {
  return <div className={classes.main}>{props.text}</div>;
};

export default Main;
