// Initial cart item quantities
let cartItems = {
  product1: 2,
  product2: 3,
};

// Prices of items
let itemPrices = {
  product1: 10,
  product2: 15,
};

// Like status of items
let likedItems = {
  product1: false,
  product2: false,
};

// Function to update the cart and total price
function updateCart() {
  let totalPrice = 0;

  for (let item in cartItems) {
    let quantity = cartItems[item];
    let itemPrice = itemPrices[item];
    totalPrice += quantity * itemPrice;

    // Update the quantity display
    document.getElementById(`quantity${item}`).textContent = quantity;

    // Update the like button display
    let heartElement = document.querySelector(`#${item} .heart-icon`);
    if (likedItems[item]) {
      heartElement.classList.add("active");
    } else {
      heartElement.classList.remove("active");
    }
  }

  // Update the total price display
  document.getElementById("totalPrice").textContent = `$${totalPrice}`;
}

// Function to increase the quantity of an item in the cart
function increaseQuantity(item) {
  cartItems[item]++;
  updateCart();
}

// Function to decrease the quantity of an item in the cart
function decreaseQuantity(item) {
  if (cartItems[item] > 1) {
    cartItems[item]--;
    updateCart();
  }
}

// Function to remove an item from the cart
function removeItem(item) {
  delete cartItems[item];
  delete likedItems[item];
  updateCart();
}

// Function to toggle the like status of an item
function toggleLike(item) {
  likedItems[item] = !likedItems[item];
  updateCart();
}

// Initial update of the cart and total price
updateCart();
