import Link from "./Link";
import "../styles/Menu.scss";

const Menu = () => {
  return (
    <nav className="menu">
      <Link
        title="click aquí para acceder al blog"
        link="https://adalab.es/blog/"
        text="Blog"
        openInNewTab="_blank"
      />
      <Link
        title="click aquí para acceder al contacto"
        link="https://adalab.es/contacto/"
        text="Contacto"
      />
    </nav>
  );
};

export default Menu;
