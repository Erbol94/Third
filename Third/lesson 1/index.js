///формат Json


// const product = {
//     id: 1,
//     price: 2000,
//     name:'samsung'
// }
//
// const jsonproduct = JSON.stringify(product)
//
// console.log(product)
// console.log(jsonproduct)
//
// localStorage.setItem('products',jsonproduct)
//
// const data = localStorage.getItem('products')
// console.log(JSON.parse(data));


const users = {
    id: 1,
    name: "Erbol",
    surname: "Shakeev",
    tel: +996555444666
}

const jsonUsers = JSON.stringify(users)
// localStorage.setItem('user', jsonUsers)
// const data = jsonUsers.getItem('')
console.log(JSON.parse(jsonUsers))