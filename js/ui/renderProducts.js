import { api } from "../settings/api.js";
import { displayMessage } from "../components/displayMessage.js";

export const productsUrl = api + "/" + "products/";
export const cardContainer = document.querySelector(".card-container");

export async function getProductApi() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    displayMessage(error, "page not found", ".card-container");
  }
}

export function renderProducts(product) {
  cardContainer.innerHTML = "";

  for (let i = 0; i < product.length; i++) {
    console.log(`products`, product.length);
    cardContainer.innerHTML += `<div class="product-card">
                                  <div class="image-container">
                                    <img class="image" src="${api}${product[i].image[0].url}" alt=""${product[i].name}>
                                  </div>
                                    <h4 class="product-name">${product[i].name}</h4>
                                    <p class="product-price">Price: $ ${product[i].price}</p>
                                </div>`;
  }
}

getProductApi();
