import React, { useState } from "react";
import classes from "./todocard.module.css";
const TodoCard = ({
  task,
  handleDelete,
  handleDone,
  handleEdit,
  handleSelectCurrent,
  iEdit,
}) => {
  const [newTitle, setNewTitle] = useState(task.title);
  if (iEdit) {
    return (
      <div>
        <input
          name="edit"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button
          onClick={() =>
            handleEdit({
              id: task.id,
              title: newTitle,
              completed: task.completed,
            })
          }
        >
          Save
        </button>
        <button
          onClick={() =>
            handleEdit({
              id: task.id,
              title: task.title,
              completed: task.completed,
            })
          }
        >
          cancel
        </button>
      </div>
    );
  }
  return (
    <div className={classes.todoCard}>
      <h5>{task.title}</h5>
      <button onClick={() => handleSelectCurrent(task.id)}>Edit</button>
      <button onClick={() => handleDone(task.id)}>Done</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;
