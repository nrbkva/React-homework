import React from "react";
import classes from "./button.module.css";

const Button = ({ children, handleClick }) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
