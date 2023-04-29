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

// Update the total when the quantity changes
quantity.addEventListener("change", () => {
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
  // Create an order details element
  const orderDetails = {
    productName: product.name,
    productPrice: product.price,
    shippingTo: shippingTo.value,
    shippingFee: product.shippingFee,
    qty: parseInt(quantity.value),
    subtotal: parseFloat(subtotal.textContent.replace("$", "")),
    total: parseFloat(total.textContent.replace("$", ""))
  };
  const orderDetailsHtml = `
    <div>
      <h2>Order Details</h2>
      <p><strong>Product:</strong> ${orderDetails.productName}</p>
      <p><strong>Price:</strong> ${orderDetails.productPrice}</p>
      <p><strong>Quantity:</strong> ${orderDetails.qty}</p>
      <p><strong>Shipping to:</strong> ${orderDetails.shippingTo}</p>
      <p><strong>Shipping fee:</strong> ${orderDetails.shippingFee}</p>
      <p><strong>Subtotal:</strong> $${orderDetails.subtotal.toFixed(2)}</p>
      <p><strong>Total:</strong> $${orderDetails.total.toFixed(2)}</p>
    </div>
  `;
  // Append the order details element to the order container and show it
  orderContainer.innerHTML = orderDetailsHtml;
  orderContainer.style.display = "block";

  
  // show the order-container div
  orderContainer.style.display = "block";
});
