import { api } from "../settings/api.js";
import { searchProducts } from "../components/searchProducts.js";
import { displayMessage } from "../components/common/displayMessage.js";
import { breadcrumbContainer } from "../components/common/breadcrumbs.js";
import { addToCart, updateCartCount, deleteProduct } from "../components/common/addToCart.js";
import { getUsername } from "../storage/storage.js";

export const productsUrl = api + "/" + "products/";
export const cardContainer = document.querySelector(".card-container");


export async function getProductApi() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();
    console.log(`products`, products);
    window.map = {};
    products.forEach((product) => {
      map[product.id] = product;
    });
    renderProducts(products);
    searchProducts(products);
  } catch (error) {
    displayMessage(error, "page not found", ".card-container");
  }
}

window.addToCart = addToCart;
window.deleteProduct = deleteProduct;

export function renderProducts(products) {
  console.log(`products`, products)
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
                                        <img class="image" src="${products[i].image[0].url}" alt="${products[i].name}" >
                                      </div>
                                      <a class="product-link" href="product-detail.html?id=${products[i].id}">
                                        <h4 class="product-name">${products[i].name}</h4>
                                        <p class="product-price">Price: $ ${products[i].price}</p>
                                      <a/>
                                      <div class="btn-container">
                                        <div class="add-to-cart ${getUsername()}">
                                          <button class="btn-add-to-cart btn-primary" onclick='addToCart(${products[i].id})'>Add to cart</button>
                                        </div>
                                        <div class="admin-btn-container ${getUsername()}">
                                          <a href="add-page.html?id=${products[i].id}" class="btn btn-secondary">edit</a>
                                          <button class="btn btn-danger " onclick='deleteProduct(${products[i].id})'>X</button>
                                        </div>
                                      </div>
                                  </div>
                                  `;
  }
  updateCartCount();
}
