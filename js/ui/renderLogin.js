import { doLogin } from "../settings/userLogin.js";
import { displayMessage } from "../components/common/displayMessage.js";

const form = document.querySelector("#contactForm");

export function renderLogin() {
  form.innerHTML =`<div id="message-container"></div>
                    <div class="input-content">
                      <label for="username">Username </label>
                      <input id="username" placeholder="Username" />
                    </div>
                    <div class="input-content">
                      <label for="password">Password </label>
                        <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          autocomplete="on"
                        />
                  </div>
                  <button id="submit">Submit</button>`;
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
  const message = document.getElementById("message-container");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage("warning", "Invalid values", "#message-container");
  }

  doLogin(usernameValue, passwordValue);
}
