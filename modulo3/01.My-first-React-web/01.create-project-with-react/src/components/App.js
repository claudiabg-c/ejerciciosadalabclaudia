import "../styles/App.scss";
import "../styles/media.scss";
import logo from "../images/adalab-logo-155x61.png";

function App() {
  return (
    <div id="home">
      <header className="header">
        <a title="home" href="#home" className="logo">
          <img src={logo} alt="logo adalab" />
        </a>
        <nav className="menu">
          <a title="clic para ir a blog" href="#home">
            Blog
          </a>
          <a title="clic para ir a contacto" href="#home">
            Contacto
          </a>
        </nav>
      </header>
      <main className="main">
        <h1 className="text">Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
