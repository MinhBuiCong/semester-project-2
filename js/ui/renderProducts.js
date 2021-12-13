import { api } from "../settings/api.js";
import { searchProducts } from "../components/searchProducts.js";
import { displayMessage } from "../components/common/displayMessage.js";
import { breadcrumbContainer } from "../components/common/breadcrumbs.js";

export const productsUrl = api + "/" + "products/";
export const cardContainer = document.querySelector(".card-container");

export async function getProductApi() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();
    renderProducts(products);
    searchProducts(products);
  } catch (error) {
    displayMessage(error, "page not found", ".card-container");
  }
}

export function renderProducts(products) {
  const breadcrumbProduct = document.querySelector(".active");
  cardContainer.innerHTML = "";
  breadcrumbContainer.innerHTML = `<nav aria-label="breadcrumb">
                                      <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item breadcrumb-product-page active">Products</li>
                                      </ol>
                                    </nav>`;

  for (let i = 0; i < products.length; i++) {
    cardContainer.innerHTML += `<div class="product-card">
                                      <div class="image-container">
                                        <img class="image" src="${api}${products[i].image[0].url}" alt="${products[i].name}">
                                      </div>
                                      <a class="product-link" href="product-detail.html?id=${products[i].id}">
                                        <h4 class="product-name">${products[i].name}</h4>
                                        <p class="product-price">Price: $ ${products[i].price}</p>
                                      <a/>
                                      <button class="add-to-cart">Add to cart</button>
                                  </div>
                                  `;
  }
}
