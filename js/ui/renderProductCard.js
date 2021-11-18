import { productsContainer } from "../script.js";
import { api } from "../settings/api.js";

export function renderProductCard(products) {
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
