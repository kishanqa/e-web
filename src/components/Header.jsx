import { useCart } from "../context/CartContext.jsx";

export default function Header({ onOpenCart }) {
  const { count } = useCart();
  return (
    <header className="header">
      <h1 className="logo">🛍️ Mini Shop</h1>
      <button className="btn" data-testid="open-cart" onClick={onOpenCart}>
        Cart (<span data-testid="cart-count">{count}</span>)
      </button>
    </header>
  );
}
