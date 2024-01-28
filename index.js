import { fetchProducts, addProduct } from "./fetch.js";
import { renderProductsCards } from "./components.js";
// import { renderProductCards, handleAddProductForm } from "./components.js";

// document.addEventListener("DOMContentLoaded", async () => {
//   const products = await fetchProducts();
//   renderProductCards(products);
//   handleAddProductForm();
// });

const productsInit = () => {
  const newProducts = [
    {
      name: "Smartphone XYZ",
      description: "Powerful smartphone with advanced features.",
      brand: "TechMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 599.99,
    },
    {
      name: "Laptop Pro",
      description: "High-performance laptop for professionals.",
      brand: "ElectroTech",
      imageUrl: "https://placehold.co/200x320",
      price: 1299.99,
    },
    {
      name: "Coffee Maker Deluxe",
      description: "State-of-the-art coffee maker for coffee enthusiasts.",
      brand: "BrewMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 149.99,
    },
    {
      name: "Fitness Tracker",
      description: "Track your fitness and stay healthy.",
      brand: "ActiveLife",
      imageUrl: "https://placehold.co/200x320",
      price: 79.99,
    },
    {
      name: "Wireless Headphones",
      description: "Immersive sound experience with noise cancellation.",
      brand: "SoundWave",
      imageUrl: "https://placehold.co/200x320",
      price: 129.99,
    },
    {
      name: "Digital Camera",
      description: "Capture your moments with high-quality photos.",
      brand: "PhotoMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 449.99,
    },
    {
      name: "Smart Home Hub",
      description: "Control your smart devices with ease.",
      brand: "HomeTech",
      imageUrl: "https://placehold.co/200x320",
      price: 199.99,
    },
    {
      name: "Gaming Console",
      description: "Next-gen gaming console for ultimate gaming experience.",
      brand: "GameMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 399.99,
    },
    {
      name: "Electric Toothbrush",
      description: "Keep your teeth clean and healthy.",
      brand: "DentalCare",
      imageUrl: "https://placehold.co/200x320",
      price: 59.99,
    },
    {
      name: "Smart Thermostat",
      description: "Efficiently manage your home's temperature.",
      brand: "EcoTech",
      imageUrl: "https://placehold.co/200x320",
      price: 129.99,
    },
  ];

  newProducts.forEach((prod) => {
    addProduct(prod);
  });
};

// productsInit();
const getProducts = async () => {
  const products = await fetchProducts();
  console.log(products);
  renderProductsCards(products);
};
getProducts();
