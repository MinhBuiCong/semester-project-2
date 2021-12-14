import { api } from "../settings/api.js";
import { displayMessage } from "../components/common/displayMessage.js";
import { addToCart, updateCartCount } from "../components/common/addToCart.js";

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

window.addToCart = addToCart;

export function renderBestSellerCard(products) {
  productsContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML += `<div class="card">
                                            <a href="product-detail.html?id=2">
                                               <div class="image-container">
                                              <img class="image" src="${api}${products[i].image[i].url}" alt="${products[i].name}">
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
