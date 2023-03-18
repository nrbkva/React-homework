import classes from "./button.module.css";

const Button = (props) => {
  return <button className={classes.button}>{props.title}</button>;
};

export default Button;
