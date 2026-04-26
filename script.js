let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
  openCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const totalBox = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>${item.price} R.O</span>
      </div>
    `;
  });
  cartCount.innerText = cart.length;
  totalBox.innerText = total;
}

function openCart() {
  document.getElementById("cart-overlay").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart-overlay").style.display = "none";
}
