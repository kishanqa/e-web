# Mini Shop (React)

A small e-commerce storefront built with React 18 and Vite.

## Features
- Product grid with category filters and live search
- Slide-in cart drawer with quantity controls, remove, and running total
- Cart persists in `localStorage`
- Demo checkout with a confirmation screen (no real payments)
- `data-testid` attributes on all key elements for UI test tools such as ContextQA or Playwright

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Project structure
```
src/
  main.jsx            entry point
  App.jsx             page layout, search and filter state
  data/products.js    product catalog and price formatter
  context/CartContext.jsx   cart state (useReducer + localStorage)
  components/         Header, Filters, ProductGrid, ProductCard, CartDrawer
  styles.css
```

## Deploy to GitHub Pages
`vite.config.js` uses `base: "./"`, so the contents of `dist/` work under any repo name.
Build, then publish `dist/` with GitHub Pages (or a `gh-pages` branch / Actions workflow).
