// const URL = 'https://jsonplaceholder.typicode.com/users';
// const xhr = new XMLHttpRequest()
// const xhr.open('GET', URL)
// xhr.send()


// const user = {
//     name: 'Dastan',
//     username: 'Bekeshov',
//     email: 'dastanbekeshov@gmail.com'
// }


// fetch(URL) // по умолчанию вызывает GET запрос
//     // .then(response => response.json())
//     // .then(response => console.log(response))
//     // .then(data => console.log(data))
//
//     .then(response => {
//         if (response.ok === true){
//             return response.json()
//         }else if (response.ok === false){
//             return 'Ошибка' + response.status
//         }
//     })
// .then(data =>console.log(data))

// fetch(URL, {
//     method: 'POST',
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify(user)
// })
//     .then(response => {
//         if (response.ok === true){
//             return response.status
//         }else if (response.ok === false){
//             return 'Ошибка' + response.status
//         }
//     })
//     .then(data => console.log(data))

// let options = {
//     method: 'POST',
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify(user)
// }
// fetch(URL, options)
//     .then(response => {
//         if (response.ok === true){
//             return response.status
//         }else if (response.ok === false){
//             return 'Ошибка' + response.status
//         }
//     })
//     .then(data => console.log(data))

// const newURL = 'https://jsonplaceholder.typicode.com/users/5'

//PATCH частичное изменение данных сервера
// let options = {
//     method: 'PATCH',
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify(user)
// }
// fetch(newURL, options)
//     .then(response => {
//         if (response.ok === true){
//             return response.status
//         }else if (response.ok === false){
//             return 'Ошибка' + response.status
//         }
//     })
//     .then(data => console.log(data))


//PUT полное измение удаляя остальные данные с сервера
// let options = {
//     method: 'PUT',
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify(user)
// }
// fetch(newURL, options)
//     .then(response => {
//         if (response.ok === true){
//             return response.status
//         }else if (response.ok === false){
//             return 'Ошибка' + response.status
//         }
//     })
//     .then(data => console.log(data))

// let options = {
//     method: 'GET',
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify(user)
// }
// fetch(newURL, options)
//     .then(response => {
//         if (response.ok === true){
//             return response.status
//         }else if (response.ok === false){
//             return 'Ошибка' + response.status
//         }
//     })
//     .then(data => console.log(data))


// const URL = 'https://jsonplaceholder.typicode.com/users';
// const userId = document.getElementById('userID')
// const getBtn = document.getElementById('getUser')
// function getUserHandle(){
//     const id = userId.value;
//     console.log(`${URL}/${id}`)
//     fetch(`${URL}/${id}`)
//         .then(response => {
//             if (response.ok){
//                 return response.json()
//             }else {
//                 return `Error ${response.status}`
//             }
//         }).then(data => console.log(data))
// }
// getBtn.addEventListener('click',getUserHandle)

const URL = 'https://jsonplaceholder.typicode.com/users'
let get = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
}
let user = {
    title: 'new',
    section: 'sport'
}
let post = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
}


const errorURL = 'https://jsonplaceholder.typicode.com/userssss'
    fetch(URL, post)
        .then(response => {
            if (response.ok === true){
                return response.status
            }else if (response.ok === false){
                return 'Error' + response.status
            }
        })
        .then(data => console.log(data))