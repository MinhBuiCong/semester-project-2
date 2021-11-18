import { api } from "../settings/api.js";
import { displayMessage } from "../components/displayMessage.js";
import { contentContainer } from "../script.js";

export const bestOfferUrl = api + "/" + "best-offers/";
export const productsContainer = document.querySelector(".container-1");

export async function getBestOfferApi() {
  try {
    const response = await fetch(bestOfferUrl);
    const products = await response.json();
    renderBestOfferCard(products);
  } catch (error) {
    displayMessage(error, "404 - page not found", ".container-1");
  }
}

export function renderBestOfferCard(products) {
  productsContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML = `<div class="card">
                                               <div class="image-container">
                                              <img class="image" src="${api}${products[0].image[0].url}" alt=""${products[0].name}>
                                                </div>
                                               <h4 class="product-name">${products[0].name}</h4>
                                                <p class="product-price">$ ${products[0].price}</p>
                                            </div>
                                    <div class="card">
                                               <div class="image-container">
                                              <img class="image" src="${api}${products[1].image[0].url}" alt=""${products[1].name}>
                                                </div>
                                               <h4 class="product-name">${products[1].name}</h4>
                                                <p class="product-price">$ ${products[1].price}</p>
                                            </div>`;
  }
}
