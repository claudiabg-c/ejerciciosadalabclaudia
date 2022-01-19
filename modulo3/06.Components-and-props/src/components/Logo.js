import logo from "../images/adalab-logo-155x61.png";
import Link from "./Link";
import "../styles/Logo.scss";

const Logo = () => {
  return (
    <Link
      title="Adalab"
      link="https://adalab.es/"
      className="logo"
      text={<img src={logo} alt="logo adalab" />}
    />
  );
};

export default Logo;
