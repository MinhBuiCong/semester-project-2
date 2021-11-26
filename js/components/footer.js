const footerContainer = document.querySelector(".footer");

export function footer() {
  footerContainer.innerHTML = `      
  <div class="footer-wrapper">
    <div class="footer-section">
      <h3>SHORTSCUTS</h3>
      <hr />
      <p>My profile</p>
      <a href="#">Order overview</a>
      <p>Giftcard</p>
      <a href="product-page.html">Sales</a>
      <p>Personal info</p>
    </div>
    <div class="footer-section">
      <h3>INFORMATION</h3>
      <hr />
      <a href="product-page.html">New products</a>
      <a href="product-page.html">New in store</a>
      <a href="product-page.html">New recommedations</a>
      <a href="product-page.html">Brand/producer</a>
      <p>Articles</p>
    </div>
    <div class="footer-section">
      <h3>SUPPORT</h3>
      <hr />
      <p>Contact us</p>
      <p>Questions and answers</p>
      <p>Warranty</p>
      <p>About us</p>
    </div>
    <div class="footer-section">
      <h3>Logo</h3>
      <hr />
      <a href="index.html">
        <h2>TekShop.com</h2>
      </a>
    </div>
  </div>`;
}
