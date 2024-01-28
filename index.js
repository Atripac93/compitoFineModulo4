import { fetchProducts, addProduct } from "./fetch.js";
import { renderProductsCards } from "./components.js";

const productsInit = () => {
  const newProducts = [
    {
      name: "Smartphone",
      description: "Powerful smartphone with advanced features.",
      brand: "TechMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 599.99,
    },
    {
      name: "Laptop ",
      description: "High-performance laptop for professionals.",
      brand: "ElectroTech",
      imageUrl: "https://placehold.co/200x320",
      price: 1799.99,
    },
    {
      name: "Coffee Machine",
      description: "State-of-the-art coffee maker for coffee enthusiasts.",
      brand: "BrewMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 140.99,
    },
    {
      name: "Fitness swatch",
      description: "Track your fitness and stay healthy.",
      brand: "ActiveLife",
      imageUrl: "https://placehold.co/200x320",
      price: 80.99,
    },
    {
      name: "Wireless Headphones",
      description: "Immersive sound experience with noise cancellation.",
      brand: "SoundWave",
      imageUrl: "https://placehold.co/200x320",
      price: 135.99,
    },
    {
      name: "Digital Camera",
      description: "Capture your moments with high-quality photos.",
      brand: "PhotoMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 234.99,
    },
  ];

  newProducts.forEach((prod) => {
    addProduct(prod);
  });
};

const getProducts = async () => {
  const products = await fetchProducts();
  console.log(products);
  renderProductsCards(products);
};
getProducts();

const formHandler = async () => {
  const name = document.querySelector("#name").value;
  const description = document.querySelector("#description").value;
  const brand = document.querySelector("#brand").value;
  const imageUrl = document.querySelector("#imageUrl").value;
  const price = document.querySelector("#price").value;
  const newProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };
  await addProduct(newProduct);
};
const add = document.getElementById("addProductForm");
add.addEventListener("submit", formHandler);
