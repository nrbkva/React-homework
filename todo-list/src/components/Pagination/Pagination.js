import React from "react";
import classes from "./pagination.module.css";

const Pagination = ({ page, handleNext, handlePrev }) => {
  return (
    <div className={classes.pagination}>
      {(page = 1 && <button onClick={handlePrev}>Prev</button>)}
      <p>{page}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
