const input = document.getElementById('inp');
const buttonBtn = document.getElementById('btn');

const mass = ['Erbol','Sanjar','Ilim','Aktan','Abdul']

function Search(e){
    e.preventDefault()
    mass.forEach( string => {
        const regex = new RegExp(`${input.value}`, 'gi')
        // const result = regex.test(mass)
        const result = string.match(regex)


        if (!input.value.trim()){
            console.log('Пустое поле')
            return result === false
        } else if (result === false){
            console.log('Совпадение не найдено')
        }else if (result === true){
            console.log(result, '====')
            alert('Совпадение найдено')
        }

    });
}
buttonBtn.addEventListener('click', Search)
