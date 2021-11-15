import { cardContainer } from "../script.js";
import { api } from "../settings/api.js";

export function renderProducts(productsToRender) {
  console.log(`productsToRender`, productsToRender);
  cardContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    cardContainer.innerHTML += `<div class="product-card">
                                <div class="image-container">
                               <img class="image" src="${api}${product.image[0].url}" alt=""${product.name}>
                                </div>
                                <h4>${product.name}</h4>
                    
                                    
                                      </div>`;
  });
}
