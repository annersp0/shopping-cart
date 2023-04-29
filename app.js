// Get the elements
const buyNowBtn = document.getElementById("buy-now-btn");
const checkoutContainer = document.getElementById("checkout-container");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const shippingTo = document.getElementById("shipping-to");
const shippingFee = document.getElementById("shipping-fee");
const quantity = document.getElementById("quantity");
const subtotal = document.getElementById("subtotal");
const qty = document.getElementById("qty");
const total = document.getElementById("total");
const placeOrderBtn = document.getElementById("place-order-btn");
const orderContainer = document.getElementById("order-container");

// Define the product
const product = {
  name: "Blue Dior Oblique Embroidery",
  price: "3,350",
  shippingFee: "10"
};

// Set the product details when the page loads
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

// Show the checkout container when the Buy Now button is clicked
buyNowBtn.addEventListener("click", () => {
  checkoutContainer.style.display = "flex";
  subtotal.textContent = `$${product.price}`;
  shippingFee.textContent = `$${product.shippingFee}`;
  updateTotal();
});

// Update the total when the quantity or shipping destination changes
shippingTo.addEventListener("input", () => {
  updateTotal();
});

quantity.addEventListener("input", () => {
  updateTotal();
});

// Update the total
function updateTotal() {
  const qtyValue = parseInt(quantity.value);
  const priceValue = parseFloat(product.price.replace(/[^0-9.-]+/g,""));
  const shippingFeeValue = parseFloat(product.shippingFee.replace(/[^0-9.-]+/g,""));
  const subtotalValue = priceValue * qtyValue;
  const totalValue = subtotalValue + shippingFeeValue;
  qty.textContent = qtyValue;
  subtotal.textContent = `$${subtotalValue.toFixed(2)}`;
  total.textContent = `$${totalValue.toFixed(2)}`;
}

// Handle the place order button click
placeOrderBtn.addEventListener("click", () => {
  // Create the order item element
  const orderItem = document.createElement("div");
  orderItem.classList.add("order-item");

  // Create the order item details element
  const orderItemDetails = document.createElement("div");
  orderItemDetails.classList.add("order-item-details");

  // Create the order item name element
  const orderItemName = document.createElement("h3");
  orderItemName.textContent = product.name;
  orderItemDetails.appendChild(orderItemName);

  
  // Create the order item quantity element
  const orderItemQuantity = document.createElement("p");
  orderItemQuantity.textContent = `Quantity: ${quantity.value}`;
  orderItemDetails.appendChild(orderItemQuantity);

  // Create the order item shipping fee element
  const orderItemShippingFee = document.createElement("p");
  orderItemShippingFee.textContent = `Shipping Fee: ${shippingFee.textContent}`;
  orderItemDetails.appendChild(orderItemShippingFee);

  // Create the order item total element
  const orderItemTotal = document.createElement("p");
  orderItemTotal.classList.add("order-item-total");
  orderItemTotal.textContent = `Total: ${total.textContent}`;
  orderItemDetails.appendChild(orderItemTotal);

  // Append the order item details to the order item
  orderItem.appendChild(orderItemDetails);

  // Append the order item to the order container and show it
  orderContainer.innerHTML = "";
  orderContainer.appendChild(orderItem);
  orderContainer.style.display = "block";
});
