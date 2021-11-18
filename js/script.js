import { navbar } from "./components/navbar.js";
import { menu } from "./components/menu.js";
import { getBestOfferApi } from "./ui/renderBestOfferCard.js";
import { getBestSellerApi } from "./ui/renderBestSellerCard.js";

export const contentContainer = document.querySelector(".content");

navbar();
menu();
getBestOfferApi();
getBestSellerApi();
