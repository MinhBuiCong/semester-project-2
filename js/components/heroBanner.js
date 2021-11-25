import { api } from "..settings/api.js";
import { displayMessage } from "./displayMessage.js";

const bannerUrl = api + "/" + "banner/";

export async function getApi() {
  try {
    const response = await fetch(bannerUrl);
    const banner = await response.json();
  } catch (error) {
    displayMessage(error, "404 - page not found", ".content");
  }
}
