const menubarContainer = document.querySelector(".menubar");

export function menu() {
  menubarContainer.innerHTML = `
  <ul class="nav nav-tabs">
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">All products</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="./product-page.html">Mobile</a></li>
      <li><a class="dropdown-item" href="./product-page.html">Consoles</a></li>
      <li><a class="dropdown-item" href="./product-page.html">Tablets</a></li>
      <li><a class="dropdown-item" href="./product-page.html">TV</a></li>
      <li><a class="dropdown-item" href="./product-page.html">PC</a></li>
      <li><a class="dropdown-item" href="./product-page.html">Macbook</a></li>
      <li><a class="dropdown-item" href="./product-page.html">PC hardware</a></li>
      <li><a class="dropdown-item" href="./product-page.html">Appliances</a></li>
      <li><a class="dropdown-item" href="./product-page.html">Photo & Video</a></li>
      <li><a class="dropdown-item" href="./product-page.html">Smart watches</a></li>
    </ul>
  </li>

  <li class="nav-item link-1">
    <a class="nav-link" href="./product-page.html">Mobile</a>
  </li>
  <li class="nav-item link-2">
    <a class="nav-link" href="./product-page.html">Consoles</a>
  </li>
  <li class="nav-item link-3">
    <a class="nav-link" href="./product-page.html">Tablets</a>
  </li>
  <li class="nav-item link-4">
    <a class="nav-link " href="./product-page.html">Mac & PC</a>
  </li>
</ul>`;
}
