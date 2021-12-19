import { api } from "../settings/api.js";
import { breadcrumbContainer } from "../components/common/breadcrumbs.js";
import { getCart, removeFromCart } from "../components/common/addToCart.js";

const cartContainer = document.querySelector(".cart-container");
const total = document.querySelector(".total");

window.removeFromCart = removeFromCart;

export function createCartContent() {
  const breadcrumbProduct = document.querySelector(".active");

  breadcrumbContainer.innerHTML = `<nav aria-label="breadcrumb">
                                      <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item"><a href="product-page.html">Products</a></li>
                                        <li class="breadcrumb-item breadcrumb-product-page active">Shopping cart</li>
                                      </ol>
                                    </nav>`;
  let sum = 0;
  let cart = getCart();
  if (cart) {
    Object.keys(cart).forEach((id) => {
      let item = cart[id];

      cartContainer.innerHTML += `<div class="cart-item">
                                                <div class="section-1">
                                                    <img class="cart-product-image"src="${
        item.product.image[0].url
      }" alt="${item.product.name}"> 
                                                </div>
                                                <div class="section-2">
                                                <a class="product-detail-link"href="product-detail.html?id=${item.product.id}">
                                                <h3 class="cart-item-name">${
                                                  item.product.name
                                                }</h3>
                                                </a>
                                                </div>
                                                <div class="section-3">
                                                    <div class="cart-item-count">${
                                                      item.count
                                                    }</div>   
                                                </div>
                                                <div class="section-4">
                                                    <p class="cart-item-price">$${
                                                      item.product.price *
                                                      item.count
                                                    }</p>                  
                                                </div>
                                                <div class="section-5">
                                                    <button class="cart-item-remove" onclick="removeFromCart(${
                                                      item.product.id
                                                    })">
                                                    X</button>                  
                                                </div>
                                            </div>
                                         `;
      sum += item.product.price * item.count;
      total.innerHTML = `<p>SUM = $ ${sum}</p>`;
    });
  } 
  if(sum === 0){
    cartContainer.innerHTML = `<p class="cart-empty">this cart is empty</p>`

  }
  
}
