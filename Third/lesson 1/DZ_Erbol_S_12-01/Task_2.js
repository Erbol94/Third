const btnNumber = document.getElementById('btnNumber')
const inputNumber = document.getElementById('phoneNumber')
function addNumber (){
    const regex = new RegExp(`\\W`, 'g')
    const div = document.getElementById('task_2')
    const aElement = document.createElement('a')
    div.append(aElement)
    aElement.innerText = inputNumber.value.replace(regex,'')
    aElement.setAttribute('href', `tel:${inputNumber.value.replace(regex,'')}`)
}
btnNumber.addEventListener('click', addNumber)