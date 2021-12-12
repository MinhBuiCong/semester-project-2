import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;
  const nav = document.querySelector(".navbar-content");
  const username = getUsername();

  let authLink = `<li class="nav-item">
  <a class="nav-link ${
    pathname === "login.html" ? "active" : ""
  }" href="login.html">Login</a>
</li>`;

  if (username) {
    authLink = `<li class="nav-item">
    <a class="nav-link ${
      pathname === "login.html" ? "active" : ""
    }" href="login.html">Hi ${username}</a>
  </li>
    <li class="nav-item">
    <button id="logout">Logout ${username}</button>
  </li>`;
  }

  nav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Strapi test API</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link ${
            pathname === "index.html" ? "active" : ""
          }" aria-current="page" href="index.html">Home</a>
        </li>
        ${authLink}
      </ul>
    </div>
  </div>
</nav>`;

  logoutButton();
}
