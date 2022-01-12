import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [menuMode, setMode] = useState("true");

  const openMenu = () => {
    setMode(!menuMode);
  };
  const closeMenu = () => {
    setMode(!menuMode);
  };

  const handleHiddenClass = menuMode ? "hidden" : "nothidden";
  const handleMainClass = menuMode ? "nomenu" : "withmenu";

  return (
    <div className="pageandmenu">
      <div className={handleHiddenClass} onClick={closeMenu}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className={handleMainClass}>
        <i onClick={openMenu} className="fas fa-hamburger"></i>
      </div>
    </div>
  );
}

export default App;
