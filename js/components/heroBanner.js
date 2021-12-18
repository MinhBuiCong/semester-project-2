import { api } from "../settings/api.js";
import { displayMessage } from "./common/displayMessage.js";

const bannerContainer = document.querySelector(".main-content");

const bannerUrl = api + "/" + "banner/";


export async function getBanner() {
  try {
    const response = await fetch(bannerUrl);
    const banner = await response.json();
    const bannerImg = banner.image[0].url;
    bannerContainer.style.backgroundImage = `url("${api}${bannerImg}")`;
  } catch (error) {
    displayMessage(error, "404 - page not found", ".content");
  }
}
