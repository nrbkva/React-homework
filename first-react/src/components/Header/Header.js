import classes from "./header.module.css";

// const HeaderTitle = "Header Title";
const Header = (props) => {
  return (
    <div className={classes.header}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Header;
