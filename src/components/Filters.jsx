import { CATEGORIES } from "../data/products.js";

export default function Filters({ query, onQuery, category, onCategory }) {
  return (
    <div className="filters">
      <input
        className="search"
        type="search"
        placeholder="Search products…"
        aria-label="Search products"
        data-testid="search"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
      <div className="chips" role="group" aria-label="Categories">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={"chip" + (c === category ? " active" : "")}
            data-testid={`category-${c.toLowerCase()}`}
            aria-pressed={c === category}
            onClick={() => onCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
