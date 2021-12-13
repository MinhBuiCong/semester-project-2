import { api } from "../settings/api.js";
import { displayMessage } from "../components/common/displayMessage.js";
import { breadcrumbContainer } from "../components/common/breadcrumbs.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productDetail = api + "/products?id=" + id;
const mainContainer = document.querySelector(".main-container");
const productInfo = document.querySelector(".product-info");
const carouselSliderContent = document.querySelector(".carousel-slider");

export async function getProductDetail() {
  try {
    const response = await fetch(productDetail);
    const product = await response.json();
    renderProductDetail(product);
  } catch (error) {
    displayMessage(error, "page not found", ".main-container");
  }
}

export function renderProductDetail(product) {
  breadcrumbContainer.innerHTML = `<nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                      <li class="breadcrumb-item breadcrumb-product-page"><a href="product-page.html">Products</a></li>
                                      <li class="breadcrumb-item breadcrumb-product-detail active" aria-current="page">Product detail</li>
                                    </ol>
                                  </nav>`;

  productInfo.innerHTML = `<h1>${product[0].name}</h1>
                              <div class="image-detail-container">
                              <img class="image" src="${api}${product[0].image[0].url}" alt="${product[0].name}">
                              </div> 
                                <div>
                                    <p>Price: $ ${product[0].price}</p>
                                </div>
                                <button>Add to Cart</button`;
}
