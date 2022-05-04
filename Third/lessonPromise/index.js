const url = 'http://localhost:3333/products/';
const ul = document.getElementById('products')


function getProducts() {
    fetch(url).then(response => response.json()).then(data => showProducts(data));
}

function showProducts (products) {
    ul.innerHTML = "";
    products.forEach(product => {
        ul.innerHTML += `<tr>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                        <td class="delBtn"><button>редактировать</button>
                            <button  data-id=${product.id}>удалить</button>
                        </td>
                    </tr>`
    })
    const delBtns = document.querySelectorAll(".delBtn");
    delBtns.forEach(el => {
        el.addEventListener('click', deleteProduct)
    })
}
getProducts();


function deleteProduct(e) {
    e.preventDefault();
    const id = e.target.dataset.id
    const deleteUrl = `${url}${id}`
    const option = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(deleteUrl, option).then(response => response.ok && getProducts());
}
const name = document.getElementById('name')
const price = document.getElementById('price')
const createBtn = document.getElementById('createProduct')
function createProducts(e){
    e.preventDefault();
    const data = {
        name: name.value,
        price: +price.value,
    }
    const option = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url, option).then(response => {
        if (response.ok){
            getProducts()
        }else if (response.error()){
            alert('ошибка')
        }
    })

}

createBtn.addEventListener('click', createProducts)