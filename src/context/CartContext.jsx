import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { products } from "../data/products.js";

const CartContext = createContext(null);
const STORAGE_KEY = "mini-shop-cart";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, [action.id]: (state[action.id] || 0) + 1 };
    case "decrease": {
      const qty = (state[action.id] || 0) - 1;
      const next = { ...state };
      if (qty <= 0) delete next[action.id];
      else next[action.id] = qty;
      return next;
    }
    case "remove": {
      const next = { ...state };
      delete next[action.id];
      return next;
    }
    case "clear":
      return {};
    default:
      return state;
  }
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable, cart just won't persist */
    }
  }, [items]);

  const value = useMemo(() => {
    const lines = Object.entries(items)
      .map(([id, qty]) => ({ product: products.find((p) => p.id === Number(id)), qty }))
      .filter((l) => l.product);
    const count = lines.reduce((s, l) => s + l.qty, 0);
    const total = lines.reduce((s, l) => s + l.qty * l.product.price, 0);
    return {
      lines,
      count,
      total,
      add: (id) => dispatch({ type: "add", id }),
      decrease: (id) => dispatch({ type: "decrease", id }),
      remove: (id) => dispatch({ type: "remove", id }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
