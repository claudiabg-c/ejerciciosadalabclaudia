import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [translation, setTranslation] = useState("");
  // function handleText(str) {
  //   return str.replaceAll(/[aeou]/gi, "i");
  // }

  const handleText = (event) => {
    const text = event.target.value;
    setTranslation(text.replace(/[aeouáéóúü]/gi, "i"));
  };

  return (
    <div className="App">
      <textarea cols="30" rows="10" onChange={handleText}></textarea>
      <p>{translation}</p>
    </div>
  );
}

export default App;
