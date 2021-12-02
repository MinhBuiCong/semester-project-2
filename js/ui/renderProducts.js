import { api } from "../settings/api.js";
import { searchProducts } from "../components/searchProducts.js";
import { displayMessage } from "../components/displayMessage.js";

export const productsUrl = api + "/" + "products/";
export const cardContainer = document.querySelector(".card-container");

export async function getProductApi() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();
    renderProducts(products);
    searchProducts(products);
  } catch (error) {
    displayMessage(error, "page not found", ".card-container");
  }
}

export function renderProducts(products) {
  console.log(`products`, products);
  cardContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    cardContainer.innerHTML += `<div class="product-card">
                                  <a href="product-detail.html?id=${products[i].id}"
                                  <div class="image-container">
                                    <img class="image" src="${api}${products[i].image[0].url}" alt="${products[i].name}">
                                  </div>
                                    <h4 class="product-name">${products[i].name}</h4>
                                    <p class="product-price">Price: $ ${products[i].price}</p>
                                    <a/>
                                </div>`;
  }
}
