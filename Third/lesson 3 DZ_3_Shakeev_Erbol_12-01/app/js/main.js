const products = [
    {
        id: 1,
        name: "Apple",
        price: 12000,
        imgUrl: "img/ap.png"
    },
    {
        id: 2,
        name: "Nokia",
        price: 20000,
        imgUrl: "img/ap2.png"
    },
    {
        id: 3,
        name: "Apple 2",
        price: 10000,
        imgUrl: "img/ap3.png"
    },
    {
        id: 4,
        name: "Samsung",
        price: 5000,
        imgUrl: "img/ap.png"
    },
    {
        id: 4,
        name: "Samsung",
        price: 5000,
        imgUrl: "img/ap.png"
    }
]

const productsId = document.getElementById('products');
const ad = document.getElementById('ad');
const basketTotal = document.getElementById('total');
const searchBtn = document.getElementById('search__btn');
const searchInput = document.getElementById('search__input')

products.forEach(product => {
    productsId.innerHTML += `
            <div class="col-lg-3 mb-3">
                <div class="product">
                    <img src=${product.imgUrl} alt="#">
                    <h5>${product.name}</h5>
                    <h6>${product.price} сом</h6>
                    <button class="product__basket-btn" data-id=${product.id} data-name=${product.name} data-price=${product.price}>Добавить в корзину</button>
                    <button class="product__basket-btn-remove" data-id=${product.id} data-name=${product.name} data-price=${product.price}>Удалить из корзины</button>
                </div
            </div>
`
})

//прочесть дома Dataset
//добавление рекламы
const handleAd = {
    counter: document.getElementById('ad__counter-count'),
    closeBtn: document.getElementById('closeBtn'),
    handleShow: function (){
        setTimeout(() => {
            ad.classList.add('active');
            handleAd.interval();
        },1000)
    },
    interval: function (){
        let count = 2;
        handleAd.idInterval = setInterval(function (){
            count-- ;
            handleAd.counter.textContent = count;
            if (count == 0) {
                clearInterval(handleAd.idInterval)
                handleAd.closeBtn.disabled = false;
            }
        }.bind(this),1000)
    },
    hideAdd: function (){
        ad.classList.remove('active')
    }

}

//добавление товара в корзину

let cart = {};



function showTotalSum (){
    const totalSum = JSON.parse(localStorage.getItem('totalSum'))
    basketTotal.textContent = totalSum;
}

function setTotalSum () {
    let totalSum = 0;
    const cartLocalStorage = localStorage.getItem('cart');
    const cartPlace = JSON.parse(cartLocalStorage)
    for (let i in cartPlace) {
        totalSum += cartPlace[i].productSum

        console.log(totalSum)

    }
    localStorage.setItem('totalSum', totalSum)
    showTotalSum ()

}

function setToLocalStorage (){
    localStorage.setItem('cart', JSON.stringify(cart))
}

const addBasketBtns = document.querySelectorAll('.product__basket-btn');
addBasketBtns.forEach( btn => btn.addEventListener('click',addToBasket))
function addToBasket (e){
    e.preventDefault()
    const dataset = e.target.dataset
    const data = {
        id: dataset.id,
        name: dataset.name,
        price: +dataset.price
    }
    const cartLocalStorage = localStorage.getItem('cart')
    const cartObj = JSON.parse(cartLocalStorage)

    cart = {...cartObj}
    if (cart[data.id]){
        cart[data.id].count ++
        cart[data.id].productSum = cart[data.id].count * data.price
    }else {
        cart[data.id] = {
            count: 1,
            price: +data.price,
            productSum: +data.price
        }
    }
    setToLocalStorage()
    setTotalSum ()
    showTotalSum ()
}

const deleteBtn = document.querySelectorAll('.product__basket-btn-remove')
deleteBtn.forEach( btn => btn.addEventListener('click', removeToCart))
function removeToCart(e){
    const dataset = e.target.dataset;
    const  data = {
        id: dataset.id,
        name: dataset.name,
        price: +dataset.price
    }

    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart[data.id]){
        if(cart[data.id].count > 1){
            cart[data.id].count--
            cart[data.id].productSum = cart[data.id].count * data.price
        }else {
            delete cart[data.id]
        }
    }else {
        alert('Корзина пуста')
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    setTotalSum()

}

// handleAd.handleShow();
handleAd.closeBtn.addEventListener('click', handleAd.hideAdd);














