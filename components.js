const API_URL = "https://striveschool-api.herokuapp.com/api/product/";

export function renderProductsCards(products) {
  const productList = document.getElementById("product-list");
  const card = document.createElement("div");

  products.forEach((product) => {
    card.classList.add("col-");
    card.innerHTML += `<div class="card col-md-4 mb-4">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="./details.html?id=${product._id}" class="btn bg-warning text-black fw-bold">Vai ai dettagli del prodotto</a>
            </div>
        </div>`;
  });
  productList.appendChild(card);
}

export async function handleAddProductForm() {
  const addProductForm = document.getElementById("addProductForm");
  addProductForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productDescription =
      document.getElementById("productDescription").value;
    const productImageURL = document.getElementById("productImageURL").value;

    const newProduct = {
      name: productName,
      description: productDescription,
      imageUrl: productImageURL,
      price: 0,
      brand: "N/A",
    };
    await addProduct(newProduct);
  });
}
export async function addProduct(product) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
    },
    body: JSON.stringify(product),
  });

  const result = await response.json();
  console.log("Prodotto aggiunto", result);

  const updatedProducts = await fetchProducts();
  renderProductCards(updatedProducts);
}
export async function fetchProducts() {
  const response = await fetch(API_URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
    },
  });
  const products = await response.json();
  return products;
}

export function renderProductDetails(product) {
  const productDetails = document.getElementById("product-details");
  productDetails.innerHTML = `
          <div class="card">
              <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
              </div>
          </div>
      `;
}
