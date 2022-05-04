// 1 спопособ

// const text = 'Привет меня зовут строка, строка строка но вы должны писать Строка';

// const regex = /строка/gi

// text.match(regex)

// let result = text.match(regex)
// console.log(result)


//2 способ

// const regexTwo = new RegExp('шаблон','gi')
// console.log(regex)
// console.log(regexTwo)

// const result = text.replace(regex, '$& Дастан')
// console.log(result)

//Метод тест test()
// const phoneNumber = document.getElementById('numberPhone');
// const regex = /\W/gi
// const textPhoneNumber = phoneNumber.textContent;
// const resultNumber = textPhoneNumber.replace(regex, '')
//
// phoneNumber.setAttribute('href',`tel:${resultNumber}`)
// console.log(resultNumber)


// console.log(textPhoneNumber);
// const number = '+996-555-505-505'
// const result = number.replace(regex,'559666999')
// console.log(number)
// console.log(result)
// const result = regex.test(text);
// console.log(result)


const phoneNumbers = document.querySelectorAll('.numberPhone');
const regex = /\W/gi
phoneNumbers.forEach(phoneNumber =>{
    const textPhoneNumber = phoneNumber.textContent;
    const resultNumber = textPhoneNumber.replace(regex, '');
    phoneNumber.setAttribute('href',`tel:${resultNumber}`);
})
console.log(phoneNumbers)


const user = {
    name: 'Erbol',
    surname: 'Shakeev'
}
const regexUser = /[a-z]/g
console.log(`${user.name.replace(regexUser, '*')}`)
console.log(`${user.surname.replace(regexUser, '*')}`)