const navbarContainer = document.querySelector(".navbar-content");

export function navbar() {
  navbarContainer.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">TekShop</a>
  <div class="search-container">
  <input type="search">
  <button>Search</button>
  
  </div>
</div>
</nav>`;
}
