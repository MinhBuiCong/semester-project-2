import { api } from "../settings/api.js";
import { displayMessage } from "../components/displayMessage.js";

export const bestOfferUrl = api + "/" + "best-offers/";
export const productsContainer = document.querySelector(".container-1");

export async function getBestOfferApi() {
  try {
    const response = await fetch(bestOfferUrl);
    const products = await response.json();
    renderBestOfferCard(products);
  } catch (error) {
    displayMessage(error, "page not found", ".container-1");
  }
}

export function renderBestOfferCard(products) {
  productsContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML = `<div class="card">
                                      <a href="product-page.html">
                                        <div class="image-container">
                                          <img class="image" src="${api}${products[0].image[0].url}" alt=""${products[0].product}>
                                        </div>
                                          <h4 class="product-name">${products[0].product}</h4>
                                          <p class="product-price">Price: $ ${products[0].price}</p>
                                      </a>
                                      <button class="add-to-cart">Add to cart</button>
                                    </div>
                                    <div class="card">
                                      <a href="product-page.html">
                                        <div class="image-container">
                                          <img class="image" src="${api}${products[1].image[0].url}" alt=""${products[1].product}>
                                        </div>
                                        <h4 class="product-name">${products[1].product}</h4>
                                        <p class="product-price">Price: $ ${products[1].price}</p>
                                      </a>
                                      <button class="add-to-cart">Add to cart</button>
                                    </div>`;
  }
}
