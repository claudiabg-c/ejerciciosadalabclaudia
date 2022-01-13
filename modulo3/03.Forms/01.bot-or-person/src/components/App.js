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
        />
        <label htmlFor="potatoes">Patatas</label>
        <input
          type="checkbox"
          id="potatoes"
          name="potatoes"
          onChange={handleIngredient}
        />
        <label htmlFor="walnuts">Nueces</label>
        <input
          type="checkbox"
          id="walnuts"
          name="walnuts"
          onChange={handleIngredient}
        />
        <label htmlFor="eggs">Huevos</label>
        <input
          type="checkbox"
          id="eggs"
          name="eggs"
          onChange={handleIngredient}
        />
        <label htmlFor="onion">Cebolla</label>
        <input
          type="checkbox"
          id="onion"
          name="onion"
          onChange={handleIngredient}
        />
        <label htmlFor="beer">Cerveza</label>
        <input
          type="checkbox"
          id="beer"
          name="beer"
          onChange={handleIngredient}
        />
      </form>
      <p>{textOmelet()}</p>
    </div>
  );
}

export default App;
