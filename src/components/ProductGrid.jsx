import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ items }) {
  if (!items.length) {
    return <p className="empty" data-testid="no-results">No products match your search.</p>;
  }
  return (
    <section className="grid" data-testid="product-grid">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
