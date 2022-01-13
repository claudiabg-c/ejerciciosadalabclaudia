import "../styles/App.scss";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    operation: "",
    numberA: 0,
    numberB: 0,
  });

  const handleDataInput = (ev) => {
    const propertyData = ev.target.name;
    setData({
      ...data,
      [propertyData]: ev.target.value,
    });
  };

  const getTotal = () => {
    let total = 0;
    if (data.operation === "add") {
      total = parseInt(data.numberA) + parseInt(data.numberB);
    } else if (data.operation === "subtract") {
      total = parseInt(data.numberA) - parseInt(data.numberB);
    } else if (data.operation === "multiply") {
      total = parseInt(data.numberA) * parseInt(data.numberB);
    } else if (data.operation === "divide") {
      total = parseInt(data.numberA) / parseInt(data.numberB);
    }
    return total;
  };

  const getText = () => {
    let text = "";
    if (data.operation === "add") {
      text = `La suma de ${data.numberA} y ${data.numberB} es ${getTotal()}.`;
    } else if (data.operation === "subtract") {
      text = `La resta de ${data.numberA} y ${data.numberB} es ${getTotal()}.`;
    } else if (data.operation === "multiply") {
      text = `La multiplicación de ${data.numberA} y ${
        data.numberB
      } es ${getTotal()}.`;
    } else if (data.operation === "divide") {
      if (isNaN(getTotal())) {
        text = "La división de 0 y 0 no se puede hacer.";
      } else if (getTotal() === Infinity) {
        text = `La división de ${data.numberA} y ${data.numberB} da infinito.`;
      } else {
        text = `La división de ${data.numberA} y ${
          data.numberB
        } es ${getTotal()}.`;
      }
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
          onChange={handleDataInput}
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
          <input type="number" name="numberA" onChange={handleDataInput} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" name="numberB" onChange={handleDataInput} />
        </label>
        <button>Reset</button>
      </form>
      <p>{getText()}</p>
    </div>
  );
};

export default App;
