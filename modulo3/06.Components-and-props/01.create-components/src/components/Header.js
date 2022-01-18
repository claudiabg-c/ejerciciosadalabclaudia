import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <div>
      <header className="header">
        <Logo />
        <Menu />
      </header>
    </div>
  );
};

export default Header;
