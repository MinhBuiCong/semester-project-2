import { renderProducts } from "../ui/renderProducts.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function () {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (product.name.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    renderProducts(filteredProducts);
  };
}
