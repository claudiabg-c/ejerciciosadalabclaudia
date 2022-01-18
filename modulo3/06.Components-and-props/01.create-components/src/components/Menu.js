import Link from "./Link";

const Menu = () => {
  return (
    <nav className="menu">
      <Link
        title="click aquí para acceder al blog"
        link="https://adalab.es/blog/"
        text="Blog"
        type="_blank"
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
