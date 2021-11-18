const navbarContainer = document.querySelector(".navbar-content");

export function navbar() {
  navbarContainer.innerHTML = `<nav class="navbar navbar-expand-lg">
<div class="container-fluid">
  <a class="navbar-brand" href="./index.html">TekShop</a>
  <div class="search-container">
  <input type="search" placeholder="Search for products">
  <button>Search</button>
  
  </div>
</div>
</nav>`;
}
