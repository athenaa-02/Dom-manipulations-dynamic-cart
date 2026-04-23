const productsElement = document.querySelector(".products");
const cartElement = document.querySelector(".cart");
const quantity = document.querySelector('.quantity')

const products = [
  {
    laptop: "lenovo",
    price: 3000,
    year: "2024",
  },
  {
    laptop: "lenovo i7",
    price: 7500,
    year: "2025",
  },
  {
    laptop: "acer 22",
    price: 5660,
    year: "2027",
  },
  {
    laptop: "acer",
    price: 2999,
    year: "2024",
  },
  {
    laptop: "acer",
    price: 2999,
    year: "2024",
  },
  {
    laptop: "acer",
    price: 2999,
    year: "2024",
  },
  {
    laptop: "acer",
    price: 2999,
    year: "2024",
  },
];

products.forEach((element) => {
  //   console.log(element);

  //   const card = document.createElement("div");
  //   card.innerHTML = `
  //          <h3>მოდელი: ${element.laptop}</h3>
  //          <p class="price">${element.price} ლარი</p>
  //          <p class="year">${element.year} წლის მოდელი</p>
  //          <button class="add_cart">Add to Cart</button>
  // `;

  // productsElement.append(card)

  productsElement.innerHTML += `
          <div class="card">
              <h3>მოდელი: ${element.laptop}</h3>
               <p class="price">${element.price} ლარი</p>
<p class="year">${element.year} წლის მოდელი</p>
<button class="add_cart">Add to Cart</button> 
          </div>
  `;
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    let chosen = e.target.textContent;
    addToCart(chosen);
  });
});

let cartProducts = [];

function addToCart(product) {
  // console.log(product)
  cartProducts.push(product);
  render();
}

function render() {
  cartElement.innerHTML = "";
  cartProducts.forEach((product) => {
    cartElement.innerHTML += `<h3>მოდელი: ${product}</h3>`;
  });

  quantity.textContent = cartProducts.length

}
