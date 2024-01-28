const API_URL = "https://striveschool-api.herokuapp.com/api/product/";

export async function addProduct(product) {
  try {
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
  } catch (error) {
    console.error("errore", error);
  }
  // const response = await fetch(API_URL, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
  //   },
  //   body: JSON.stringify(product),
  // });

  // const result = await response.json();
  // console.log("Prodotto aggiunto", result);
}

export async function fetchProductById(productId) {
  try {
    const response = await fetch(`${API_URL}/${productId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
      },
    });
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("errore", error);
  }
  // const response = await fetch(`${API_URL}/${productId}`, {
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
  //   },
  // });
  // const product = await response.json();
  // return product;
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

export async function deleteProduct(productId) {
  try {
    const response = await fetch(API_URL + productId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
      },
    });

    if (!response.ok) {
      throw new Error("Errore durante l'eliminazione del prodotto");
    }

    const deletedProduct = await response.json();
    console.log("Prodotto eliminato:", deletedProduct);
    return deletedProduct;
  } catch (error) {
    console.error("errore", error);
  }
  // const response = await fetch(API_URL + productId, {
  //   method: "DELETE",
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
  //   },
  // });

  // if (!response.ok) {
  //   throw new Error("Errore durante l'eliminazione del prodotto");
  // }

  // const deletedProduct = await response.json();
  // console.log("Prodotto eliminato:", deletedProduct);
  // return deletedProduct;
}

export async function updateProduct(productId, updatedData) {
  try {
    const response = await fetch(API_URL + productId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Errore durante l'aggiornamento del prodotto");
    }

    const responseData = await response.json();
    console.log("Prodotto aggiornato:", responseData);
    return responseData;
  } catch (error) {
    console.error("errore", error);
  }
}
