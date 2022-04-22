//2 задание
// const parent = document.querySelector('#parent');
// const aElement = document.createElement('a');
// aElement.innerHTML = '0556-680-535';
// parent.appendChild(aElement);
// aElement.setAttribute('href',`tel:0556680535`)
// const regex = /\W/gi
// const textPhoneNumber = aElement.textContent;
// const result = textPhoneNumber.replace(regex, '');
// console.log(result)

//3 задание

// const userName =
//     {
//         id: 1,
//         first_name: 'Erbol',
//         surname: 'Shakeev',
//         phone: '0553125133'
//     }
//
// const usersName =
//     {
//         id: 2,
//         first_name: 'Aleksandr',
//         surname: 'Makedonski',
//         phone: '0999555444'
//     }
//
// const jsonUser = JSON.stringify(userName)
// const jsonUsers = JSON.stringify(usersName)
//
// localStorage.setItem('userName', jsonUser)
// localStorage.setItem('usersName', jsonUsers)
//
// const data = localStorage.getItem('userName');
// console.log(JSON.parse(data));
//
// const deleteBtnAll = document.getElementById('deleteAll')
// deleteBtnAll.addEventListener("click", function (){
//     localStorage.clear()
// })
// const deleteBtn = document.getElementById('delete')
// deleteBtn.addEventListener("click", function (){
//     localStorage.removeItem('usersName')
// })

// 1 задание

// const text = 'Привет меня зовут строка'
// const regex = /строка/gi
// text.match(regex)
// let result = text.match(regex)
// console.log(result);

// const text = ['Erbol', 'Sanjar', 'Jalil', 'Aktan']
// const regex = new RegExp(`${value}`, 'gi')
// text.match(regex)
// let result = text.match(regex);
// alert(result[0]);
//
// const inputInput = document.getElementById('input');
// const btnBtn = document.getElementById('btn');
// btnBtn.addEventListener('click')

const Arr = ["Anna", 'John', 'Joe', 'Dastan'];

const input = document.getElementById('input');
const btn = document.getElementById('btn');

// function Search (){
//     const regex = new RegExp(`${input.value}`, 'gi');
//     const result = regex.test(Arr)
//     if (input.value === ''){
//         console.log('Поле пустое')
//         return result === false
//     }
//     if (result === false){
//         console.log('Не найдено совпадений')
//     }
//     if (result ===  true){
//         alert("Найдены совпадения")
//     }
// }

function Search (e){
    e.preventDefault()
    Arr.forEach(element => {
        const regex = new RegExp(`${input.value}`, 'gi');
        const result = regex.test(regex)
        if (input.value === ''){
            console.log('Поле пустое')
            return result === false
        }
        else if (result === false){
            console.log('Не найдено совпадений')
        }
        else if (result ===  true){
            alert("Найдены совпадения")
        }
    });
}

btn.addEventListener('click', Search)



