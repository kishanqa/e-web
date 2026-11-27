import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../data/products.js";

export default function CartDrawer({ open, onClose }) {
  const { lines, total, count, add, decrease, remove, clear } = useCart();
  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const checkout = () => {
    clear();
    setOrdered(true);
  };

  const close = () => {
    setOrdered(false);
    onClose();
  };

  return (
    <>
      <div className={"overlay" + (open ? " show" : "")} onClick={close} />
      <aside
        className={"drawer" + (open ? " open" : "")}
        aria-hidden={!open}
        aria-label="Shopping cart"
        data-testid="cart-drawer"
      >
        <div className="drawer-head">
          <h2>Your cart</h2>
          <button className="btn ghost" data-testid="close-cart" onClick={close}>Close</button>
        </div>

        {ordered ? (
          <div className="thanks" data-testid="order-success">
            <p className="big">🎉</p>
            <p>Thanks for your order!</p>
            <p className="muted">This is a demo, so no payment was taken.</p>
          </div>
        ) : (
          <>
            <div className="lines">
              {lines.length === 0 && <p className="muted" data-testid="cart-empty">Your cart is empty.</p>}
              {lines.map(({ product, qty }) => (
                <div className="line" key={product.id} data-testid={`cart-line-${product.id}`}>
                  <div className="line-info">
                    <span>{product.emoji} {product.name}</span>
                    <span className="muted">{formatPrice(product.price * qty)}</span>
                  </div>
                  <div className="qty">
                    <button className="btn ghost sm" aria-label={`Decrease ${product.name}`} data-testid={`dec-${product.id}`} onClick={() => decrease(product.id)}>−</button>
                    <span data-testid={`qty-${product.id}`}>{qty}</span>
                    <button className="btn ghost sm" aria-label={`Increase ${product.name}`} data-testid={`inc-${product.id}`} onClick={() => add(product.id)}>+</button>
                    <button className="link" data-testid={`remove-${product.id}`} onClick={() => remove(product.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="drawer-foot">
              <div className="total">
                <span>Total</span>
                <strong data-testid="cart-total">{formatPrice(total)}</strong>
              </div>
              <button className="btn block" data-testid="checkout" disabled={count === 0} onClick={checkout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
