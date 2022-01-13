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

  for (let index = 0; index < tasks.length; index++) {
    tasks[index].id = `${[index]}`;
  }

  console.log(tasks);

  const handleClick = (event) => {
    const clickedTask = event.currentTarget.id;
    const foundTask = tasks.find((task) => task.id === clickedTask);
    foundTask.completed = !foundTask.completed;
    setTasks([...tasks]);
  };

  const renderList = () => {
    return tasks.map((task, index) => {
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
      <ol>{renderList()}</ol>
    </div>
  );
}

export default App;
