import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [macaroni, setMacaroni] = useState(false);
  const [potatoes, setPotatoes] = useState(false);
  const [walnuts, setWalnuts] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [onion, setOnion] = useState(false);
  const [beer, setBeer] = useState(false);

  const handleIngredient = (event) => {
    const checkboxValue = event.target.name;

    if (checkboxValue === "macaroni") {
      setMacaroni(event.currentTarget.checked);
    } else if (checkboxValue === "potatoes") {
      setPotatoes(event.currentTarget.checked);
    } else if (checkboxValue === "walnuts") {
      setWalnuts(event.currentTarget.checked);
    } else if (checkboxValue === "eggs") {
      setEggs(event.currentTarget.checked);
    } else if (checkboxValue === "onion") {
      setOnion(event.currentTarget.checked);
    } else if (checkboxValue === "beer") {
      setBeer(event.currentTarget.checked);
    }
  };

  const handleCheckAll = () => {
    setMacaroni(true);
    setPotatoes(true);
    setWalnuts(true);
    setEggs(true);
    setOnion(true);
    setBeer(true);
  };

  const handleReset = () => {
    setMacaroni(false);
    setPotatoes(false);
    setWalnuts(false);
    setEggs(false);
    setOnion(false);
    setBeer(false);
  };

  const textOmelet = () => {
    let text;
    if (!macaroni && !potatoes && !walnuts && !eggs && !onion && !beer) {
      text = "";
    } else if (!macaroni && potatoes && !walnuts && eggs && onion && !beer) {
      text = "Eres una persona concebollista";
    } else {
      text = "Eres un robot sin paladar";
    }
    return text;
  };

  return (
    <div className="App">
      <h1>Selecciona los ingredientes de la tortilla de patatas:</h1>
      <form>
        <label htmlFor="macaroni">Macarrones</label>
        <input
          type="checkbox"
          id="macaroni"
          name="macaroni"
          onChange={handleIngredient}
          checked={macaroni}
        />
        <label htmlFor="potatoes">Patatas</label>
        <input
          type="checkbox"
          id="potatoes"
          name="potatoes"
          onChange={handleIngredient}
          checked={potatoes}
        />
        <label htmlFor="walnuts">Nueces</label>
        <input
          type="checkbox"
          id="walnuts"
          name="walnuts"
          onChange={handleIngredient}
          checked={walnuts}
        />
        <label htmlFor="eggs">Huevos</label>
        <input
          type="checkbox"
          id="eggs"
          name="eggs"
          onChange={handleIngredient}
          checked={eggs}
        />
        <label htmlFor="onion">Cebolla</label>
        <input
          type="checkbox"
          id="onion"
          name="onion"
          onChange={handleIngredient}
          checked={onion}
        />
        <label htmlFor="beer">Cerveza</label>
        <input
          type="checkbox"
          id="beer"
          name="beer"
          onChange={handleIngredient}
          checked={beer}
        />
      </form>
      <button onClick={handleCheckAll}>Marcar todos</button>
      <button onClick={handleReset}>Desmarcar todos</button>
      <p>{textOmelet()}</p>
    </div>
  );
}

export default App;
