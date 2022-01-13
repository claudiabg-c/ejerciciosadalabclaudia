import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ]);

  const [searchedTasks, setSearchedTasks] = useState("");

  let completedTasks = [];
  let pendingTasks = [];

  for (let index = 0; index < tasks.length; index++) {
    tasks[index].id = `${[index]}`;
    if (tasks[index].completed === true) {
      completedTasks.push(tasks[index].completed);
    } else {
      pendingTasks.push(tasks[index].completed);
    }
  }

  const handleClick = (event) => {
    const clickedTask = event.currentTarget.id;
    const foundTask = tasks.find((task) => task.id === clickedTask);
    foundTask.completed = !foundTask.completed;
    setTasks([...tasks]);
  };

  const handleInputSearch = (event) => {
    setSearchedTasks(event.target.value);
  };

  const renderList = () => {
    return tasks
      .filter((task) => {
        return task.task.toLowerCase().includes(searchedTasks.toLowerCase());
      })
      .map((task, index) => {
        return (
          <li
            key={index}
            id={index}
            className={`${task.completed}`}
            onClick={handleClick}
          >
            {task.task}
          </li>
        );
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="busca aquí tu tarea"
        onChange={handleInputSearch}
      />
      <ol>{renderList()}</ol>
      <p>Tareas totales: {tasks.length} </p>
      <p>Tareas completadas: {completedTasks.length} </p>
      <p>Tareas pendientes: {pendingTasks.length} </p>
    </div>
  );
}

export default App;
