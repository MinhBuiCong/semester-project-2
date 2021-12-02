import { renderProducts } from "../ui/renderProducts.js";

export function searchProducts(product) {
  const search = document.querySelector(".search");

  search.onkeyup = function () {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.author.toLowerCase().includes(searchValue) ||
        product.summary.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    renderProducts(filteredProducts);
  };
}
