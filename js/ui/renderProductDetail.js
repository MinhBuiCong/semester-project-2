import { api } from "../settings/api.js";
import { displayMessage } from "../components/displayMessage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productDetail = api + "/products?id=" + id;
console.log(`productDetail`, productDetail);
const mainContainer = document.querySelector(".main-container");

export async function getProductDetail() {
  try {
    const response = await fetch(productDetail);
    const product = await response.json();
    renderProductDetail(product);
  } catch (error) {
    displayMessage(error, "page not found", ".card-container");
  }
}

export function renderProductDetail(product) {
  console.log(`product`, product);
  mainContainer.innerHTML = `<h1>${product[0].name}</h1>
                                <div class="image-detail-container">
                                    <img class="image" src="${api}${product[0].image[0].url}" alt="${product[0].name}">
                                </div>
                                <div>
                                    <p>Price: $ ${product[0].price}</p>
                                </div>`;
}
