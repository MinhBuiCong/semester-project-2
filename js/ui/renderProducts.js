import { cardContainer } from "../product-page.js";
import { api } from "../settings/api.js";

export function renderProducts(productsToRender) {
  console.log(`productsToRender`, productsToRender);
  cardContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    cardContainer.innerHTML += `<div class="product-card">
                                <div class="image-container">
                               <img class="image" src="${api}${product.image[0].url}" alt=""${product.name}>
                                </div>
                                <h4 class="product-name">${product.name}</h4>
                                <p class="product-price">$ ${product.price}</p>
                    
                                    
                                      </div>`;
  });
}
