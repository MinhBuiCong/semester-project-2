import { cardContainer } from "../script.js";

export function renderProducts(productsToRender) {
  console.log(`productsToRender`, productsToRender);
  cardContainer.innerHTML = "";

  productsToRender.forEach(function (products) {
    cardContainer.innerHTML += `<div class="product-card">
                                <h4>${product.name}</h4>
                    
                                    
                                      </div>`;
  });
}
