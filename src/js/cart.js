import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = new Array(getLocalStorage("so-cart"));
  console.log("Cart Items:", cartItems); // Add this line for debugging
  // A check if cartItems array is empty and if it is, return to exit the function
  if (cartItems.length === 0) {
    // Display a message or take some action when there are no items
    const noItemsMessage = "<p>No items in the cart.</p>";
    document.querySelector(".product-list").innerHTML = noItemsMessage;
    return; // Exit the function, as there are no items to render
  }
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  console.log(htmlItems); // Log the contents of htmlItems
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
