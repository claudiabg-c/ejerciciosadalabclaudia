import logo from "../images/adalab-logo-155x61.png";
import "../styles/Logo.scss";

const Logo = () => {
  return (
    <a title="Adalab" href="https://adalab.es/" className="logo">
      <img src={logo} alt="logo adalab" />
    </a>
  );
};

export default Logo;
