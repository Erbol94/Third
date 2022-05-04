//Async/wait

// let age = 28;
// const result = prompt('Сколько вам лет?')
// async function getSome (param)  {
//     if (result == age){
//         return Promise.resolve('Молодец брашке угадаал')
//     }else {
//         return Promise.reject('Ой ошибся брашке!')
//     }
//
// }
// getSome().then(txt => alert(txt + ' ура ты прогер!')).catch(txt => alert(txt))
//--------

// async function someGet(){
//     const response = new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             return resolve('Ху ар ю?')
//         },1000)
//     })
//     const answer = await response;
//
//     const answerTwo = await answer
//
//     console.log(answerTwo)
//     return answer
// }
// someGet()
//
//---------

// const usersBtn = document.getElementById('btn')
// const url = 'https://jsonplaceholder.typicode.com/users'
// async function getUsers (){
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }
// fetch(url).then(response => response.json()).then(data => console.log(data))
// usersBtn.addEventListener('click', getUsers)

//----
// второе задание
// const btn = document.getElementById('btn')
// const url = 'https://jsonplaceholder.typicode.com/users'
//
// async function getResponse (){
//     const response = await fetch(url)
//     const data = await response.json()
//     const div = document.getElementById('div')
//     console.log(data)
//     data.forEach(e => {
//         div.innerHTML += `
//         <ul>
//         <p>Name:${e.name}</p>
//         <li>Id: ${e.id}</li>
//         <li>Username: ${e.username}</li>
//         <li>Email: ${e.email}</li>
//         <li>Username: ${e.phone}</li>
//         </ul>
//         `
//     })
// }
// btn.addEventListener('click', getResponse)
//третье задание

const input = document.getElementById('input')
const btn = document.getElementById('btn')
async function ageOld (){
    if (input.value == 28){
        return Promise.resolve('Успех')
    }else if (input.value != 28) {
        return Promise.reject('Ошибка')
    }

}


btn.addEventListener('click', () => {
    ageOld().then(txt => console.log(txt))
})