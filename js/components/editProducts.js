import { getUsername } from "../storage/storage.js";

const username = getUsername();
const editContainer = document.querySelector(".edit-container");

export function editProducts() {
  if (username) {
    editContainer.innerHTML = `<a href="edit.html">Edit/Add products</a>`;
  }
}
