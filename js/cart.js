const cardAddArrEls = Array.from(document.querySelectorAll(".card__add"));
const cartNum = document.querySelector("#cart_num");
const cart = document.querySelector("#cart");

const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
const body = document.body;
const popupContainer = document.querySelector("#popup_container");
const popupProductList = document.querySelector("#popup_product_list");
const popupCost = document.querySelector("#popup_cost");

function toNum(str) {
    const num = Number(str.replace(/ /g, ""));
    return num;
}

function toCurrency(num) {
    const format = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
    }).format(num);
    return format;
}
cart.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("popup--open");
    body.classList.add("lock");
});

popupClose.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("popup--open");
    body.classList.remove("lock");
});

class Product {
    imageSrc;
    name;
    price;
    constructor(card) {
        this.imageSrc = card.querySelector(".catalog-item__image").children[0].src;
        this.name = card.querySelector(".catalog-item__description").innerText;
        this.price = card.querySelector(".catalog-item__price").innerText;

    }
}

class Cart {
    products;
    constructor() {
        this.products = [];
    }
    get count() {
        return this.products.length;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(index) {
        this.products.splice(index, 1);
    }
    get cost() {
        const prices = this.products.map((product) => {
            return toNum(product.price);
        });
        const sum = prices.reduce((acc, num) => {
            return acc + num;
        }, 0);
        return sum;
    }

}

const myCart = new Cart();

if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("cart"));
myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

myCart.products = cardAddArrEls.forEach((cardAddEl) => {
    cardAddEl.addEventListener("click", (e) => {
        e.preventDefault();
        const card = e.target.closest(".card");
        const product = new Product(card);
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;
        myCart.addProduct(product);
        localStorage.setItem("cart", JSON.stringify(myCart));
        cartNum.textContent = myCart.count;
    });
});