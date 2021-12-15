import { api } from "./api.js";
import { displayMessage } from "../components/common/displayMessage.js";
import { saveToken, saveUser } from "../storage/storage.js";

export async function doLogin(username, password) {
  const url = api + "/auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(`json`, json);

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "/";
    }

    if (json.error) {
      displayMessage("warning", "Invalid login details", ".message-container");
    }
  } catch (error) {
    console.log(`error`, error);
  }
}
