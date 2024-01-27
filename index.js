import { fetchProducts } from "./fetch.js";
import { renderProductCards, handleAddProductForm } from "./components.js";

document.addEventListener("DOMContentLoaded", async () => {
  const products = await fetchProducts();
  renderProductCards(products);
  handleAddProductForm();
});
