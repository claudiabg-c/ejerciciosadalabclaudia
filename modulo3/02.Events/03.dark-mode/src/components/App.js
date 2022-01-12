import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [mode, setMode] = useState("true");

  const handleMode = () => {
    setMode(!mode);
  };

  const handleClass = mode ? "light" : "dark";
  const renderDarkModeText = mode ? null : "Tienes activado el dark mode";
  const renderBtnText = mode ? "Activar" : "Desactivar";

  return (
    <div className={handleClass}>
      <button onClick={handleMode}>{renderBtnText} el dark mode</button>
      <p>{renderDarkModeText}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        accusantium molestiae inventore dignissimos quibusdam nisi doloremque
        sed vitae dolor minima officia iste, sit eaque quisquam excepturi natus
        esse voluptate voluptatibus.
      </p>
    </div>
  );
}

export default App;
