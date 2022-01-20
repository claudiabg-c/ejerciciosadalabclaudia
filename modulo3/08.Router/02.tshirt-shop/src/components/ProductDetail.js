import { useParams, Link } from "react-router-dom";

function ProductDetail(props) {
  const routeParams = useParams();

  return (
    <article>
      <img
        src={props.products[routeParams.productId].img}
        alt={`Producto: ${props.products[routeParams.productId].name}`}
      />
      <h3>{props.products[routeParams.productId].name}</h3>
      <p>${props.products[routeParams.productId].price} €</p>
      <Link to="/">Volver al listado de productos</Link>
    </article>
  );
}

export default ProductDetail;
