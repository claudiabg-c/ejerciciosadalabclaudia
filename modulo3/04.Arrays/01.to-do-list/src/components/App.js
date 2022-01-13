import "../styles/App.scss";

function App() {
  const tasks = [
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ];

  const renderList = () => {
    return tasks.map((task, index) => {
      return (
        <li key={index} className={`${task.completed}`}>
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
