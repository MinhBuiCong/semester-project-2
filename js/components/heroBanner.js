import { api } from "../settings/api.js";
import { displayMessage } from "./common/displayMessage.js";

const bannerContainer = document.querySelector(".main-content");

const bannerUrl = api + "/" + "banner/";

export async function getBanner() {
  try {
    const response = await fetch(bannerUrl);
    const banner = await response.json();
    console.log(`banner`, banner);
    const bannerImg = banner.banner[0].url;
    bannerContainer.style.backgroundImage = `url("${bannerImg}")`;
  } catch (error) {
    displayMessage(error, "404 - page not found", ".content");
  }
}
