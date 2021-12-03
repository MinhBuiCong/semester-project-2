import { api } from "../settings/api.js";
import { displayMessage } from "../components/displayMessage.js";

export const bestSellerUrl = api + "/" + "best-sellers/";
export const productsContainer = document.querySelector(".container-2");

export async function getBestSellerApi() {
  try {
    const response = await fetch(bestSellerUrl);
    const products = await response.json();
    renderBestSellerCard(products);
  } catch (error) {
    displayMessage(error, "page not found", ".container-2");
  }
}

export function renderBestSellerCard(products) {
  productsContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML = `<div class="card">
                                            <a href="product-page.html">
                                               <div class="image-container">
                                              <img class="image" src="${api}${products[0].image[0].url}" alt="${products[0].product}">
                                                </div>
                                               <h4 class="product-name">${products[0].product}</h4>
                                                <p class="product-price">Price: $ ${products[0].price}</p>
                                                </a>
                                                <button class="add-to-cart">Add to cart</button>
                                            </div>
                                           <div class="card">
                                           <a href="product-page.html">
                                               <div class="image-container">
                                              <img class="image" src="${api}${products[1].image[0].url}" alt="${products[1].product}">
                                                </div>
                                               <h4 class="product-name">${products[1].product}</h4>
                                                <p class="product-price">Price: $ ${products[1].price}</p>
                                                </a>
                                                <button class="add-to-cart">Add to cart</button>
                                            </div>`;
  }
}
