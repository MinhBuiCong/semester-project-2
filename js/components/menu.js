const menubarContainer = document.querySelector(".menubar");

export function menu() {
  menubarContainer.innerHTML = `
  <ul class="nav nav-tabs">
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">All products</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Mobile</a></li>
      <li><a class="dropdown-item" href="#">Consoles</a></li>
      <li><a class="dropdown-item" href="#">Tablets</a></li>
      <li><a class="dropdown-item" href="#">TV</a></li>
      <li><a class="dropdown-item" href="#">PC</a></li>
      <li><a class="dropdown-item" href="#">Macbook</a></li>
      <li><a class="dropdown-item" href="#">PC hardware</a></li>
      <li><a class="dropdown-item" href="#">Appliances</a></li>
      <li><a class="dropdown-item" href="#">Photo & Video</a></li>
      <li><a class="dropdown-item" href="#">Smart watches</a></li>
    </ul>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#">Mobile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Consoles</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Tablets</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Mac & PC</a>
  </li>
</ul>`;
}
