import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page not found!</h1>
      <Link to="/">Go back to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
