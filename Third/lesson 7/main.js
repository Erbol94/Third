// let age = 25;
//
// const userAge = prompt("сколько вам лет?")
//
// const promise = new Promise((resolve, reject) => {
//     if(userAge == age) {
//         resolve('Вы угадали мой возраст')
//     }else {
//         reject("Ха ха вы не угадали")
//     }
// })
//
// const  onFulFilled = (txt) => console.log('успех ' + txt);
//
// const onRejected = (txt) => console.log('ошибка ' + txt);
//
//
// promise.then(onFulFilled, onRejected);


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Вы угадали мой возраст')
//     },1000)
//
//     // setTimeout(() => {
//     //     reject("Ха ха вы не угадали")
//     // },2000)
// })
//
// const  onFulFilled = (txt) => console.log('успех ' + txt);
//
// const onRejected = (txt) => console.log('ошибка ' + txt);
//
// const onFinally = () => console.log('Я все равно отработаю')
//
// promise.then(onFulFilled).catch(onRejected).finally(onFinally);

//1- then - успех(resolve)
//2- catch - ошибка(reject)
//3- finally - отработает в любом случае
const btn = document.getElementById('btn')
const url = 'https://jsonplaceholder.typicode.com/users';
const myFetch = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = function (){
            if (xhr.status == 200){
                resolve(xhr.response)
            }else if (xhr.status == 404){
                reject(xhr.status)
            }
        }
        xhr.send()

    })
}
btn.addEventListener('click', () => {
    myFetch('GET', url)
        .then(response => JSON.parse(response))
        .then(data => console.log(data))
        .catch(error => console.log(error))


    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})