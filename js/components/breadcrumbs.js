const breadcrumbContainer = document.querySelector(".breadcrumbs");

export function breadcrumbs() {
  breadcrumbContainer.innerHTML = `<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item breadcrumb-product-page" >Products</li>
      <li class="breadcrumb-item breadcrumb-product-detail">Products detail</li>
    </ol>
  </nav>`;
}
