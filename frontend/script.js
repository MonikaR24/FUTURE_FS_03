const productsDiv = document.getElementById("products");
const cartCount = document.getElementById("cartCount");

let cart = 0;

// TEMP PRODUCTS (until backend)
const products = [
  {
    name: "iPhone 15",
    description: "Apple flagship smartphone",
    price: 79999,
    class: "iphone"
  },
  {
    name: "iPhone 13 Pro Max",
    description: "Premium Apple phone",
    price: 84999,
    class: "samsung"
  },
  {
    name: "MacBook Pro",
    description: "Powerful laptop for creators",
    price: 189999,
    class: "macbook"
  },
  {
    name: "iPhone 17 Pro Max",
    description: "Next-gen Apple smartphone",
    price: 119999,
    class: "sony"
  },
  {
    name: "iPhone XR",
    description: "Ultra slim design with powerful features",
    price: 149999,
    class: "dell"
  }
];

// RENDER PRODUCTS
products.forEach(product => {
  const card = document.createElement("div");
  card.className = `card ${product.class}`;

  card.innerHTML = `
    <div class="img-box"></div>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p class="price">₹${product.price}</p>

    <div class="actions">
      <button class="add-cart">Add to Cart</button>
      <button class="buy-now">Buy Now</button>
    </div>
  `;

  card.querySelector(".add-cart").onclick = () => {
    cart++;
    cartCount.innerText = cart;
  };

  card.querySelector(".buy-now").onclick = () => {
    alert("Proceeding to checkout for " + product.name);
  };

  productsDiv.appendChild(card);
});
