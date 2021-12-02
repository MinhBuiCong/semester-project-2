import { api } from "./settings/api.js";
import { renderProducts } from "./ui/renderProducts.js";
import { displayMessage } from "./components/displayMessage.js";
import { navbar } from "./components/navbar.js";
import { menu } from "./components/menu.js";
import { breadcrumbs } from "./components/breadcrumbs.js";
import { footer } from "./components/footer.js";

export const productsUrl = api + "/" + "products/";
export const cardContainer = document.querySelector(".card-container");
const contentContainer = document.querySelector(".content");

export async function getApi() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    displayMessage(error, "404 - page not found", ".content");
  }
}

getApi();
navbar();
menu();
breadcrumbs();
footer();
