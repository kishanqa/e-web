import { useCallback, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Filters from "./components/Filters.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import { products } from "./data/products.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    );
  }, [query, category]);

  const closeCart = useCallback(() => setCartOpen(false), []);

  return (
    <>
      <Header onOpenCart={() => setCartOpen(true)} />
      <main className="container">
        <section className="hero">
          <h2>Small shop, good stuff.</h2>
          <p>Everyday essentials for your home, desk and bag.</p>
        </section>
        <Filters query={query} onQuery={setQuery} category={category} onCategory={setCategory} />
        <ProductGrid items={visible} />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Mini Shop · Demo store, no real payments.</footer>
      <CartDrawer open={cartOpen} onClose={closeCart} />
    </>
  );
}
