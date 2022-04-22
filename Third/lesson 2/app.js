//Асинхроннность
// console.log('Start')
//
// const someFunc = () =>{
//     console.log('Start1')
// }
//
// const someFunc2 = () => {
//     console.log('Start2')
//
//     // throw Error()
// }
//
// setTimeout(function (){
//     console.log('Start3')
// }, 1000) //Ассинхронная функция
//
//  setTimeout(function (){
//     console.log('Start4')
// }, 2000) //Ассинхронная функция
//
// someFunc()
// someFunc2()
// console.log('end')
//
// const someFunc3 = () =>{
//     console.log('fuck')
// }
// setTimeout(someFunc3, 5000)

// const time = () => {
//     console.log('Hello world')
// }
// setTimeout(time, 1000)
//
// setTimeout(function button(){
//     console.log('How are you?')
// },2000)
//
// setTimeout(function (){
//     console.log('Good, very weel!')
// },3000)
//
// const btn1 = document.getElementById('btn1')
// btn1.addEventListener

// const someFunc = () => {
//     console.log('Begin')
// }
// const btn1 = document.getElementById('btn1')
// btn1.addEventListener('click', someFunc);


const btn = document.getElementById('start')
const countPlace = document.getElementById('count')

let count = 0;
btn.addEventListener('click',function (){
    // const id = setTimeout(function (){console.log('hello')},1000)
    // const id2 = setTimeout(function (){console.log('hello')},1000)
    //
    // console.log(id)
    // console.log(id2)


  const id = setInterval(function (){
        count += 1;
        console.log(count)
        countPlace.textContent = count
      if (count === 3){
          console.log('hello')

      }

    }, 1000)

})


//setTimeOut

// const test = () => {
//     console.log('Hello Erbol, how are you?')
// }
// setTimeout(test,1000)

// const btn = document.getElementById('btn')
// btn.addEventListener('click', function (){
//     const otvet = setTimeout(function (){
//         alert('Very well, good for you')
//     },1000)
// })

// const btn1 = document.getElementById('btn1')
// btn1.addEventListener('click', function (){
//     const otvet2 = setTimeout(function (){
//         console.log('Chating with you')
//     },2000)
// })
//
// const last = document.getElementById('btn2')
// last.addEventListener('click', function (){
//     const otvet3 = setTimeout(function (){
//         console.log('Good bye, see you later Erbol ;)')
//     },2000)
// })