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
  products.forEach((product) => {
    console.log(`images`, product.image[0].url);

    carousel.innerHTML = `
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img class="d-block w-100" src="${api}${product.image[0].url}" alt="First slide">
                              </div>
                              <div class="carousel-item active">
                          <img class="d-block w-100" src="${api}${product.image[1].url}" alt="First slide">
                        </div>
                        <div class="carousel-item active">
                          <img class="d-block w-100" src="${api}${product.image[2].url}" alt="First slide">
                        </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Next</span>
                                </a>
                              `;
  });
  breadcrumbContainer.innerHTML = `<nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                      <li class="breadcrumb-item breadcrumb-product-page"><a href="product-page.html">Products</a></li>
                                      <li class="breadcrumb-item breadcrumb-product-detail active" aria-current="page">Product detail</li>
                                    </ol>
                                  </nav>`;
}
