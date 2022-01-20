import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Catalog from "./Catalog";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callToApi().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <Catalog products={products} />
    </div>
  );
};

export default App;
