let key = "shoppingCart";

export function addToCart(id) {
  console.log(`id`, id);
  let cart = getCart();
  if (!cart) {
    cart = {};
  }
  let product = map[id];
  console.log(`product`, product);
  if (cart[id]) {
    cart[id].count++;
  } else {
    cart[id] = {
      product: product,
      count: 1,
    };
  }

  localStorage.setItem(key, JSON.stringify(cart));
  updateCartCount();
}
export function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem(key));

  if (!cart) return;

  let totalCount = 0;
  Object.keys(cart).forEach((id) => (totalCount += cart[id].count));
  document.getElementById("counter").innerHTML = `(${totalCount})`;
}

export function getCart() {
  return JSON.parse(localStorage.getItem(key));
}

export function removeFromCart(id) {
  let cart = getCart();
  delete cart[id];
  localStorage.setItem(key, JSON.stringify(cart));
  location.reload();
}
