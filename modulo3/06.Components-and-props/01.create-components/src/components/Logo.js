import logo from "../images/adalab-logo-155x61.png";

const Logo = () => {
  return (
    <div>
      <a title="home" href="#home" className="logo">
        <img src={logo} alt="logo adalab" />
      </a>
    </div>
  );
};

export default Logo;
