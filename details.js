import { fetchProductById, deleteProduct, updateProduct } from "./fetch";
import { renderProductDetails } from "./components";
document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    const product = await fetchProductById(productId);
    renderProductDetails(product);

    const deletedProductBtn = document.querySelector("#deleteProductBtn");
    deletedProductBtn.addEventListener("click", async () => {
      await deleteProduct(productId);
      window.location.href = "./index.html";
    });
    const editProductBtn = document.getElementById("editProductBtn");
    editProductBtn.addEventListener("click", async () => {
      const updatedDescription = prompt("Inserisci la nuova descrizione:");
      if (updatedDescription !== null) {
        await updateProduct(productId, { description: updatedDescription });

        window.location.reload();
      }
    });
  }
});
