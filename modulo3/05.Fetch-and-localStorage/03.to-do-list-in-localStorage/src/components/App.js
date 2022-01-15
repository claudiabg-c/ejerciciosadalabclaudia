import { useEffect, useState } from "react";
import "../styles/App.scss";
import ls from "../services/localStorage";

function App() {
  const [tasks, setTasks] = useState([
    {
      task: "Comprar harina, jamón y pan rallado",
      completed: true,
    },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ]);

  const [searchedTasks, setSearchedTasks] = useState("");
  const [newTaskInput, setNewTaskInput] = useState("");
  const [newTasks, setNewTasks] = useState(ls.get("tasks", tasks));

  let completedTasks = [];
  let pendingTasks = [];

  const addId = newTasks.map((task, index) => {
    return (task.id = `${index}`);
  });

  const isCompleted = newTasks.map((task) => {
    if (task.completed) {
      return completedTasks.push(task);
    } else {
      return pendingTasks.push(task);
    }
  });

  const handleClickFav = (event) => {
    const clickedTask = event.target.id;
    const foundTask = newTasks.find((task) => task.id === clickedTask);
    foundTask.completed = !foundTask.completed;
    setTasks([...newTasks]);
  };

  const handleInputSearch = (event) => {
    setSearchedTasks(event.target.value);
  };

  const handleAddInput = (event) => {
    setNewTaskInput(event.target.value);
  };

  const handleAddBtn = () => {
    if (newTaskInput !== "") {
      const newTask = {
        task: newTaskInput.charAt(0).toUpperCase() + newTaskInput.slice(1),
        completed: false,
      };
      setNewTasks([...newTasks, newTask]);
    }
    setNewTaskInput("");
  };

  const handleDeleteBtn = (event) => {
    const clickedTask = event.currentTarget.id;
    const taskToDelete = newTasks.find((task) => task.id === clickedTask);
    const findClickedTask = newTasks.indexOf(taskToDelete);
    const notDeletedTasks = newTasks.splice(findClickedTask, 1);
    setNewTasks([...newTasks]);
  };

  useEffect(() => {
    ls.get("tasks", tasks);
    ls.set("tasks", newTasks);
  }, [tasks, newTasks]);

  const renderList = () => {
    return newTasks
      .filter((task) => {
        return task.task.toLowerCase().includes(searchedTasks.toLowerCase());
      })
      .map((task, index) => {
        return (
          <li key={index}>
            <p
              id={index}
              className={task.completed ? "completed" : null}
              onClick={handleClickFav}
            >
              {task.task}
            </p>

            <button onClick={handleDeleteBtn} id={index}>
              Borrar
            </button>
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
      <input
        type="text"
        placeholder="añadir nueva tarea"
        value={newTaskInput}
        onChange={handleAddInput}
      />
      <button onClick={handleAddBtn}>Crear nueva tarea</button>
      <ol>{renderList()}</ol>
      <p>Tareas totales: {newTasks.length} </p>
      <p>Tareas completadas: {completedTasks.length} </p>
      <p>Tareas pendientes: {pendingTasks.length} </p>
    </div>
  );
}

export default App;
