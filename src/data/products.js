export const CATEGORIES = ["All", "Home", "Accessories", "Tech"];

export const products = [
  { id: 1, name: "Ceramic Mug", price: 14.5, emoji: "☕", category: "Home", description: "Hand-glazed 350 ml mug." },
  { id: 2, name: "Canvas Tote", price: 22, emoji: "👜", category: "Accessories", description: "Sturdy everyday tote bag." },
  { id: 3, name: "Notebook", price: 9.99, emoji: "📓", category: "Home", description: "A5 dotted, 120 pages." },
  { id: 4, name: "Desk Plant", price: 18, emoji: "🪴", category: "Home", description: "Easy-care plant in a pot." },
  { id: 5, name: "Headphones", price: 59, emoji: "🎧", category: "Tech", description: "Wireless over-ear headphones." },
  { id: 6, name: "Sunglasses", price: 35, emoji: "🕶️", category: "Accessories", description: "UV400 polarized lenses." },
  { id: 7, name: "Phone Stand", price: 12, emoji: "📱", category: "Tech", description: "Adjustable aluminium stand." },
  { id: 8, name: "Wall Clock", price: 27, emoji: "🕰️", category: "Home", description: "Silent quartz movement." },
];

export const formatPrice = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
