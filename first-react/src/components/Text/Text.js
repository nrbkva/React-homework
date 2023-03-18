import classes from "./text.module.css";

const Text = (props) => {
  return <h1 className={classes.title}>{props.title}</h1>;
};

export default Text;
