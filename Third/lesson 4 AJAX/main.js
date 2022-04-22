//AJAX
const url = 'https://jsonplaceholder.typicode.com/users';
const name = document.getElementById('name')
const username = document.getElementById('username')
const email = document.getElementById('email')
const btn = document.getElementById('send')

function setUserInfo (){

    const xhr = new XMLHttpRequest();

    if (!name.value.trim() || !username.value.trim() || !email.value.trim())
        alert('Заполните все поля')
    else {
        const data = {
            name: name.value,
            username: username.value,
            email: email.value
        }


        xhr.open('POST', url)
        xhr.responseType = 'json'
        xhr.onload = function (){
            console.log(xhr.response)
        }

        xhr.setRequestHeader('Content-type','application/json')
        xhr.send(JSON.stringify(data))
    }
}
btn.addEventListener('click',setUserInfo)



// GET - получить <<<< [server]
// POST - отправить >>>> [server]
// PUT - полного изменения данных >>>> [server]
// PATCH - для частичнего измения данных >>>> [server]
// DELETE - удаление всех данных >>>>> [server]



// const xhr =  new XMLHttpRequest()
//
// xhr.open('GET',url);
//
// xhr.responseType = 'json';
//
//
// xhr.onerror = function (){
//     console.log(xhr.status)
// }
//
// xhr.onload = function (){
//     // console.log(xhr.status)
//     if (xhr.status >= 200 % xhr.status <= 204){
//         // alert('Запрос успешен')
//         // console.log(JSON.parse(xhr.response))
//         console.log(xhr.response)
//     }else if (xhr.status >= 400 % xhr.status <= 418){
//         alert('ошибка ' + xhr.status)
//
//     }
//     // console.log(JSON.parse(xhr.response))
// }
// xhr.send()


// const xhr = new XMLHttpRequest();
// xhr.open('GET',url);
// xhr.responseType = 'json';
// xhr.onload = function allUsers () {
//     const list = document.getElementById('list')
//     if (xhr.status >= 200 || xhr.status <=204){
//         console.log(xhr.response)
//         xhr.response.forEach(e =>  {
//             list.innerHTML += `
//             <ul>
//             <p>Name: ${e.name}</p>
//             <li>Id: ${e.id}</li>
//             <li>Username: ${e.username}</li>
//             <li>Email: ${e.email}</li>
//             <li>Phone: ${e.phone}</li>
//             `
//         })
//
//     }else if (xhr.status >= 400 || xhr.status <= 418) {
//         alert('error')
//     }
//
// }
// xhr.send()