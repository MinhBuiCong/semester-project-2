export const breadcrumbContainer = document.querySelector(".breadcrumbs");

export function breadcrumbs() {
  breadcrumbContainer.innerHTML = `<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
    </ol>
  </nav>`;
}
