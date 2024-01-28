import { fetchProductById, deleteProduct, updateProduct } from "./fetch.js";
import { renderProductDetails } from "./components.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  if (productId) {
    const product = await fetchProductById(productId);
    // renderProductDetails(product);
    document.querySelector("#name").value = product.name;
    document.querySelector("#description").value = product.description;
    document.querySelector("#brand").value = product.brand;
    document.querySelector("#imageUrl").value = product.umageUrl;
    document.querySelector("#price").value = product.price;
  }
});
const upDateHandler = async () => {
  const name = document.querySelector("#name").value;
  const description = document.querySelector("#description").value;
  const brand = document.querySelector("#brand").value;
  const imageUrl = document.querySelector("#imageUrl").value;
  const price = document.querySelector("#price").value;
  const product = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };
  await updateProduct(productId, product);
  window.location.href = `./details.html?id=${productId}`;
};

const update = document.querySelector("#upDate");
update.addEventListener("submit", upDateHandler);
