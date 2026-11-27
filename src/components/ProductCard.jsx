import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../data/products.js";

export default function ProductCard({ product }) {
  const { add } = useCart();
  return (
    <article className="card" data-testid={`product-${product.id}`}>
      <div className="emoji" aria-hidden="true">{product.emoji}</div>
      <span className="tag">{product.category}</span>
      <h2 className="name">{product.name}</h2>
      <p className="desc">{product.description}</p>
      <div className="card-foot">
        <span className="price">{formatPrice(product.price)}</span>
        <button className="btn" data-testid={`add-${product.id}`} onClick={() => add(product.id)}>
          Add to cart
        </button>
      </div>
    </article>
  );
}
