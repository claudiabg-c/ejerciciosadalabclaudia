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
    if (data.operation === "add") {
      return (
        <p>
          La suma de <strong>{data.numberA}</strong> y{" "}
          <strong>{data.numberB}</strong> es <strong>{getTotal()}</strong>.
        </p>
      );
    } else if (data.operation === "subtract") {
      return (
        <p>
          La resta de <strong>{data.numberA}</strong> y{" "}
          <strong>{data.numberB}</strong> es <strong>{getTotal()}</strong>.
        </p>
      );
    } else if (data.operation === "multiply") {
      return (
        <p>
          La multiplicación de <strong>{data.numberA}</strong> y{" "}
          <strong>{data.numberB}</strong> es <strong>{getTotal()}</strong>.
        </p>
      );
    } else if (data.operation === "divide") {
      if (isNaN(getTotal())) {
        return (
          <p>
            La división de <strong>{data.numberA}</strong> y{" "}
            <strong>{data.numberB}</strong> no se puede hacer.
          </p>
        );
      } else if (getTotal() === Infinity) {
        return (
          <p>
            La división de <strong>{data.numberA}</strong> y{" "}
            <strong>{data.numberB}</strong> da infinito.
          </p>
        );
      } else {
        return (
          <p>
            La división de <strong>{data.numberA}</strong> y{" "}
            <strong>{data.numberB}</strong> es <strong>{getTotal()}</strong>.
          </p>
        );
      }
    }
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
      {getText()}
    </div>
  );
};

export default App;
