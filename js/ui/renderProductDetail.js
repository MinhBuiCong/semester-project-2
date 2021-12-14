import { api } from "../settings/api.js";
import { displayMessage } from "../components/common/displayMessage.js";
import { breadcrumbContainer } from "../components/common/breadcrumbs.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productDetail = api + "/products?id=" + id;
const mainContainer = document.querySelector(".main-container");
const productInfo = document.querySelector(".product-info");
const carousel = document.querySelector(".carousel");

export async function getProductDetail() {
  try {
    const response = await fetch(productDetail);
    const product = await response.json();
    renderProductDetail(product);
  } catch (error) {
    displayMessage(error, "page not found", ".main-container");
  }
}

export function renderProductDetail(products) {
  breadcrumbContainer.innerHTML = `<nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                      <li class="breadcrumb-item breadcrumb-product-page"><a href="product-page.html">Products</a></li>
                                      <li class="breadcrumb-item breadcrumb-product-detail active" aria-current="page">Product detail</li>
                                    </ol>
                                  </nav>`;
  productInfo.innerHTML = `<div class="column-one">
                            <h1 class="product-title">${products[0].name}</h1>
                            <img class="main-image"src="${api}${products[0].image[0].url}" alt="image">
                          </div>
                          <div class="column-two">
                          <p class="price">Price: $${products[0].price}</p>
                          <p class="description">${products[0].description}</p>
                          <button class="add-to-cart">Add to cart</button>
                          </div>
                          `;
}
