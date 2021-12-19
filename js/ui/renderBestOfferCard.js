import { api } from "../settings/api.js";
import { displayMessage } from "../components/common/displayMessage.js";
import { addToCart, updateCartCount } from "../components/common/addToCart.js";
import { productsUrl } from "./renderProducts.js";

export const productsContainer = document.querySelector(".container-1");

export async function getBestOfferApi() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();
    console.log(products)
    window.map = {};
    products.forEach((product) => {
      map[product.id] = product;
    });
    renderBestOfferCard(products);
  } catch (error) {
    displayMessage(error, "page not found", ".container-1");
  }
}

window.addToCart = addToCart;

export function renderBestOfferCard(products) {
  productsContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].feature !== "FEATURED_OFFER") {
      continue;
    }
    productsContainer.innerHTML += `<div class="card">
                                      <a href="product-detail.html?id=${products[i].id}">
                                        <div class="image-container">
                                          <img class="image" src="${(products[i].image[0] || {}).url || ''}" alt=""${products[i].name}>
                                        </div>
                                          <h4 class="product-name">${products[i].name}</h4>
                                          <p class="product-price">Price: $ ${products[i].price}</p>
                                      </a>
                                      <button class="add-to-cart" onclick='addToCart(${products[i].id})'>Add to cart</button>
                                    </div>`;
  }
  updateCartCount();
}
