import "../styles/App.scss";
import { useState } from "react";

const App = () => {
  const [operation, setOperation] = useState("");
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  const handleOperation = (ev) => {
    setOperation(ev.target.value);
  };

  const getTotal = () => {
    let total = 0;
    if (operation === "add") {
      total = parseInt(numberA) + parseInt(numberB);
    } else if (operation === "subtract") {
      total = parseInt(numberA) - parseInt(numberB);
    } else if (operation === "multiply") {
      total = parseInt(numberA) * parseInt(numberB);
    } else if (operation === "divide") {
      total = parseInt(numberA) / parseInt(numberB);
    }
    return total;
  };

  const getText = () => {
    let text = "";
    if (operation === "add") {
      text = `La suma de ${numberA} y ${numberB} es ${getTotal()}.`;
    } else if (operation === "subtract") {
      text = `La resta de ${numberA} y ${numberB} es ${getTotal()}.`;
    } else if (operation === "multiply") {
      text = `La multiplicación de ${numberA} y ${numberB} es ${getTotal()}.`;
    } else if (operation === "divide") {
      text = `La división de ${numberA} y ${numberB} es ${getTotal()}.`;
    }
    return text;
  };

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <select
          name="operation"
          id="operation"
          defaultValue="select"
          onChange={handleOperation}
        >
          <option value="select" disabled>
            Selecciona una opción
          </option>
          <option value="add">Sumar</option>
          <option value="subtract">Restar</option>
          <option value="multiply">Multiplicar</option>
          <option value="divide">Dividir</option>
        </select>
        <label>
          Escribe un número:
          <input type="number" name="name" onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" name="email" onChange={handleNumberB} />
        </label>
      </form>
      <p>{getText()}</p>
    </div>
  );
};

export default App;
