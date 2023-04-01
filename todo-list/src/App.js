import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import TaskList from "./components/TaskList/TaskList";
import ButtonAction from "./components/ButtonAction/ButtonAction";

function App() {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filterBy, setFilterBy] = useState("all");

  const [TaskList, setTaskList] = useState([]);

  const handleShow = () => setShow(!show);

  const handleChangeCheck = (event) => {
    setNewTask(event.target.value);
  };
  // 1.Все таски 2.Выполненные 3.Не выполеннные
  const handleAddTask = () => {
    setTasks((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        title: newTask,
        completed: false,
      },
    ]);
    handleShow();
  };

  const handleDelete = (id) => {
    const deleted = tasks.filter((el) => el.id !== id);
    setTasks([...deleted]);
    /// filter
  };

  const handleDone = (id) => {
    // const currentIndex = tasks.findIndex(task => task.id === id )
    tasks.map((task) => {
      if (task.id === id) {
        return (task.completed = !task.completed);
      }
      return task;
    });
    setTasks([...tasks]);
  };
  const handleEdit = (editTodo) => {
    const editList = tasks.map((task) => {
      if (task.id === editTodo.id) {
        return editTodo;
      }
      return task;
    });
    setTasks([...editList]);
  };

  const resultSearch = TaskList.filter((tasks) =>
    tasks.title.toLowerCase().includes(search.toLowerCase())
  );
  const resultFilter =
    filterBy === "all"
      ? resultSearch
      : filterBy === "completed"
      ? resultSearch.filter((tasks) => tasks.completed)
      : filterBy === "notCompleted"
      ? resultSearch.filter((tasks) => !tasks.completed)
      : null;

  useEffect(() => {
    const myLocalList = JSON.parse(localStorage.getItem("tasks"));
    if (myLocalList.length !== 0) {
      setTasks(myLocalList);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);
  useEffect(() => {
    console.log("render 2");
    localStorage.setItem("tasks", JSON.stringify(tasks)); // запись
    return () => {};
  }, [tasks]);

  const filterTasks = ({ target }) => {
    setFilterBy(target.value);
  };

  const clearTask = () => {
    setTaskList([]);
    localStorage.clear();
  };

  return (
    <div className="App">
      <select onChange={filterTasks}>
        <option value="all">Все</option>
        <option value="completed">Завршенные</option>
        <option value="notCompleted">Не завершенные</option>
      </select>
      {show && (
        <Modal
          handleChangeCheck={handleChangeCheck}
          handleAdd={handleAddTask}
          handleShow={handleShow}
        />
      )}

      <Button handleClick={handleShow}>Открыть модалку</Button>

      {/* task list */}
      <TaskList
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleEdit={handleEdit}
        list={resultFilter}
      />
      <Button onClick={clearTask}>Clear Task</Button>
    </div>
  );
}

export default App;
