import { api } from "../settings/api.js";
import { displayMessage } from "../components/common/displayMessage.js";
import { addToCart, updateCartCount } from "../components/common/addToCart.js";

export const bestOfferUrl = api + "/" + "best-offers/";
export const productsContainer = document.querySelector(".container-1");

export async function getBestOfferApi() {
  try {
    const response = await fetch(bestOfferUrl);
    const products = await response.json();
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
    console.log(`products`, products[i].id);
    productsContainer.innerHTML += `<div class="card">
                                      <a href="product-detail.html?id=4">
                                        <div class="image-container">
                                          <img class="image" src="${api}${products[i].image[i].url}" alt=""${products[i].name}>
                                        </div>
                                          <h4 class="product-name">${products[i].name}</h4>
                                          <p class="product-price">Price: $ ${products[i].price}</p>
                                      </a>
                                      <button class="add-to-cart" onclick='addToCart(${products[i].id})'>Add to cart</button>
                                    </div>
                           `;
  }
  updateCartCount();
}
