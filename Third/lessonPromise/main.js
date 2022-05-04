
const promise = new Promise((resolve, reject) => {
        resolve('Вы угадали мой возраст')
})
const  onFulFilled = (txt) => console.log('успех ' + txt);

const onRejected = (txt) => console.log('ошибка ' + txt);

const onFinally = () => console.log("я все равно отработаю")

promise.then(onFulFilled).catch(onRejected).finally(onFinally);

// 1-then - успех (resolve)
// 2-catch - ошибка (reject)
// 3-finally - отработает в любом случае
const btn = document.getElementById('getUser')
const url = 'https://jsonplaceholder.typicode.com/users';

const myFetch = (method,url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = function () {
            if(xhr.status == 200) {
                resolve(xhr.response)
            }else if(xhr.status == 404) {
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
})