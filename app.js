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

const product = {
  name: "Blue Dior Oblique Embroidery",
  price: "3,350",
  shippingFee: "10"
};

productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

buyNowBtn.addEventListener("click", () => {
  checkoutContainer.style.display = "flex";
  subtotal.textContent = `$${product.price}`;
  shippingFee.textContent = `$${product.shippingFee}`;
  updateTotal();
});

shippingTo.addEventListener("input", () => {
  updateTotal();
});

quantity.addEventListener("input", () => {
  updateTotal();
});

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

placeOrderBtn.addEventListener("click", () => {

  const orderItem = document.createElement("div");
  orderItem.classList.add("order-item");

  const orderItemDetails = document.createElement("div");
  orderItemDetails.classList.add("order-item-details");

  const orderItemTitle = document.createElement("h3");
  orderItemTitle.textContent = "Your Order";
  orderItemDetails.appendChild(orderItemTitle);

  const orderItemImage = document.createElement("img");
  orderItemImage.src = "diorbag.JPG";
  orderItemImage.alt = "Product image";
  orderItemDetails.appendChild(orderItemImage);

  const orderItemName = document.createElement("p");
  orderItemName.textContent = product.name;
  orderItemDetails.appendChild(orderItemName);

  const orderItemPrice = document.createElement("p");
  orderItemPrice.textContent = `Price: ${product.price}`;
  orderItemDetails.appendChild(orderItemPrice);

  const orderItemQuantity = document.createElement("p");
  orderItemQuantity.textContent = `Quantity: ${quantity.value}`;
  orderItemDetails.appendChild(orderItemQuantity);

  const orderItemShippingFee = document.createElement("p");
  orderItemShippingFee.textContent = `Shipping Fee: ${shippingFee.textContent}`;
  orderItemDetails.appendChild(orderItemShippingFee);

  const orderItemTotal = document.createElement("p");
  orderItemTotal.classList.add("order-item-total");
  orderItemTotal.textContent = `Total: ${total.textContent}`;
  orderItemDetails.appendChild(orderItemTotal);

  orderItem.appendChild(orderItemDetails);

  orderContainer.innerHTML = "";
  orderContainer.appendChild(orderItem);
  orderContainer.style.display = "block";
});
