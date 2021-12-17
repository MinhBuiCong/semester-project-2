import { getUsername } from "../storage/storage.js";

const username = getUsername();
const addContainer = document.querySelector(".add-container");

export function addProducts() {
  if (username) {
    addContainer.innerHTML = `<a href="add-page.html">Add products</a>`;
  }
}
