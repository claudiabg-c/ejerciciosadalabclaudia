import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <Link to="/overview">Overview</Link>
        <Link to="/repositories">Repositories</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/people">People</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/settings">Setting</Link>
      </nav>
    </div>
  );
}

export default Header;
