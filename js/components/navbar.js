const navbarContainer = document.querySelector(".navbar-content");

export function navbar() {
  navbarContainer.innerHTML = `<nav class="navbar navbar-expand-lg">
<div class="container-fluid">
  <div class="navbar-top-wrapper">
    <div class="navbar-brand-container">
      <a class="navbar-brand" href="./index.html">TekShop.com</a>
    </div>
    <div class="navbar-icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    </div>
  </div>
  <div class="search-container">
    <input type="search" placeholder="Search for products">
    <button>Search</button>
  </div>
</div>
</nav>`;
}
