import { api } from "./settings/api.js";
import { navbar } from "./components/navbar.js";
import { menu } from "./components/menu.js";
import { renderProductCard } from "./ui/renderProductCard.js";
import { displayMessage } from "./components/displayMessage.js";

export const productsUrl = api + "/" + "best-offers/";
export const productsContainer = document.querySelector(".products-container");
const contentContainer = document.querySelector(".content");

export async function getApi() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();
    renderProductCard(products);
  } catch (error) {
    displayMessage(error, "404 - page not found", ".content");
  }
}

getApi();
navbar();
menu();
