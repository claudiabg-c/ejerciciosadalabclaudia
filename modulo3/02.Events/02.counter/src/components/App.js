import { useState } from "react";
import "../styles/App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter((counter = 0));
  };

  return (
    <div className="App">
      <p>Contador: {counter}</p>
      <button onClick={handleAdd}>Sumar contador</button>
      <button onClick={handleSubtract}>Restar contador</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
