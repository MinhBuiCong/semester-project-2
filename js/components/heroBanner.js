import { api } from "../settings/api.js";
import { displayMessage } from "./displayMessage.js";

const bannerContainer = document.querySelector(".main-content");

const bannerUrl = api + "/" + "banners/";

export async function getBanner() {
  try {
    const response = await fetch(bannerUrl);
    const banner = await response.json();
    console.log(`banner`, banner);
    const bannerImg = banner[0].banner[0].url;
    const bannerLink = api + bannerImg;
    bannerContainer.innerHTML = ` <h1>Do you love Tek?</h1>
    <h2>You can find it at TekShop.com</h2>`;
    bannerContainer.style.backgroundImage = `url("${bannerLink}")`;
  } catch (error) {
    displayMessage(error, "404 - page not found", ".content");
  }
}
