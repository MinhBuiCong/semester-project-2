import { getUsername } from "../../storage/storage.js";
import logoutButton from "../logOutButton.js";

export function navbar() {
  const navbarContainer = document.querySelector(".navbar-content");
  const username = getUsername();
  const { pathname } = document.location;

  let authLink = `<li class="nav-item">
                    <a class="nav-link ${
                      pathname === "login.html" ? "active" : ""
                    }" href="login.html">
                      <img src="./icon/user.svg" alt="user"/>
                    </a>
                  </li>`;

  if (username) {
    authLink = `<li class="nav-item">
                  <a class="nav-link ${
                    pathname === "login.html" ? "active" : ""
                  }" href="login.html">Hi ${username}</a>
                </li>
                <li class="nav-item">
                  <button id="logout">
                    Logout 
                  </button>
                </li>`;
  }

  navbarContainer.innerHTML = `<nav class="navbar navbar-expand-lg">
                                <div class="container-fluid">
                                  <div class="navbar-top-wrapper">
                                    <div class="navbar-brand-container">
                                      <a class="navbar-brand" href="./index.html">TekShop.com</a>
                                    </div>
                                    <div class="navbar-icon-container">
                                      ${authLink}
                                      <li class="nav-item"">
                                        <a class="nav-link" href="shopping-cart.html">
                                          <img src="./icon/shopping-cart.svg" alt="cart"/>
                                         <span id="counter"></span>
                                        </a>
                                      </li>   
                                    </div>
                                  </div>
                                </div>
                              </nav>`;
  logoutButton();
}
