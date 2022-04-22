//Lesson2 DZ5_Shakeev_Erbol_12-01
function project () {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', function (){
        const otvet = setTimeout(function (){
            console.log('Hello')
            setTimeout(function (){
                console.log('How are you?')
                setTimeout(function (){
                    const nDiv = document.getElementById('div')
                    const first = document.createElement('button')
                    const br = document.createElement('br')
                    nDiv.append(br)
                    nDiv.append(first)
                    first.innerText = 'Good and you ?'

                    const first_second = document.createElement('button')
                    nDiv.append(first_second)
                    first_second.innerText = 'Bad, feeling sad'

                    first.addEventListener('click',function (){
                        let good = setTimeout(function (){
                            console.log('Good, happy for you!')
                            setTimeout(function (){
                                const div = document.getElementById('div')
                                const second = document.createElement('button')
                                const br = document.createElement('br')
                                div.append(br)
                                div.append(second)
                                second.innerText = 'Thank you, so whats next?'
                                second.addEventListener( 'click', function (){
                                    let know = setTimeout(function (){
                                        console.log('I dont know, maybe playing game?')
                                        setTimeout(function (){
                                            const div = document.getElementById('div')
                                            const third = document.createElement('button')
                                            const br = document.createElement('br')
                                            div.append(br)
                                            div.append(third)
                                            third.innerText = 'Yes, lets do it'
                                            third.addEventListener('click',function (){
                                                console.log('Lets play, Write names of towns and cities biginning with the last letter of the previous name')
                                                setTimeout(function (){
                                                    const div = document.getElementById('div')
                                                    const four = document.createElement('button')
                                                    const br = document.createElement('br')
                                                    div.append(br)
                                                    div.append(four)
                                                    four.innerText = 'You first'
                                                    four.addEventListener('click',function (){
                                                        let input = document.querySelector('#input')
                                                        let list = document.querySelector('#list')
                                                        input.addEventListener('keypress', function (event){
                                                            // if (event.key == 'Enter'){
                                                            //     let li = document.createElement('li')
                                                            //     li.innerHTML = this.value;
                                                            //     list.appendChild(li);
                                                            //     this.value = '';
                                                            //
                                                            //     let task = document.createElement('span')
                                                            //     task.classList.add('task')
                                                            //     task.innerHTML = this.value
                                                            //     li.appendChild(task)
                                                            //
                                                            //     let remove = document.createElement('span')
                                                            //     remove.classList.add('remove')
                                                            //     remove.innerHTML = 'Удалить'
                                                            //     li.appendChild(remove)
                                                            //     remove.addEventListener('click',function (){
                                                            //         this.parentElement.parentElement.removeChild(this.parentElement)
                                                            //     })
                                                            //
                                                            //     let mark = document.createElement('span')
                                                            //     mark.classList.add('mark')
                                                            //     mark.innerHTML = 'Сделано'
                                                            //     li.appendChild(mark)
                                                            //     mark.addEventListener('click', function (){
                                                            //         this.parentElement.classList.add('done')
                                                            //     })
                                                            //
                                                            // }

                                                            // const input = document.getElementById('input')
                                                            // const playBtn = document.getElementById('playBtn')
                                                            // const resetBtn = document.getElementById('reset')
                                                            // const rules = document.getElementById('rules')
                                                            //
                                                            // let level = 1;
                                                            // let score = 0;
                                                            // let word;
                                                            // let correct = 0;
                                                            //
                                                            // const lvlOneWords = [
                                                            //     "aim",
                                                            //     "ace",
                                                            //     "bed",
                                                            //     "bee",
                                                            //     "buy",
                                                            //     "can",
                                                            //     "cow",
                                                            //     "cod",
                                                            //     "cur",
                                                            //     "did",
                                                            //     "duo",
                                                            //     "die",
                                                            //     "dry",
                                                            //     "dug",
                                                            //     "elf",
                                                            //     "egg",
                                                            //     "elk",
                                                            //     "fat",
                                                            //     "fix",
                                                            //     "fin",
                                                            //     "few",
                                                            //     "gym",
                                                            //     "guy",
                                                            //     "goo",
                                                            // ];
                                                            //
                                                            // function reset () {
                                                            //     level = 1;
                                                            //     score = 0;
                                                            //     word = "";
                                                            //     correct = 0;
                                                            // }
                                                            // function randomWord(lvl) {
                                                            //     word = lvl[Math.floor(Math.random()* lvl.length + 1) - 1];
                                                            //     return word;
                                                            // }
                                                            //
                                                            // playBtn.addEventListener('click', function (e){
                                                            //     rules.classList.toggle("hidden")
                                                            //     gameContainer.classList.remove("hidden")
                                                            // })

                                                        })
                                                    })
                                                },1000)
                                            })

                                        },1000)
                                    }, 1000)
                                })
                            },1000)
                        },1000)
                    })

                    first_second.addEventListener('click',function (){
                        const bad = setTimeout(function (){
                            console.log('What happend?')
                            setTimeout(function (){
                                const div = document.getElementById('div')
                                const second_second = document.createElement('button')
                                const br = document.createElement('br')
                                div.append(br)
                                div.append(second_second)
                                second_second.innerText = 'Im so sad'
                                second_second.addEventListener('click',function (){
                                    const bad_two = setTimeout(function (){
                                        console.log('Dont be sad, how can grow up your mood?')
                                        setTimeout(function (){
                                            const div = document.getElementById('div')
                                            const second_third = document.createElement('button')
                                            const br = document.createElement('br')
                                            div.append(second_third)
                                            second_third.innerText = 'Recommend me good movie'
                                            second_third.addEventListener('click', function (){
                                                console.log('Okay, wait a sec')
                                            })
                                        },1000)
                                    },1000)
                                })
                            }, 1000)
                        },1000)
                    })
                })
            },2000)
        }, 1000)

    })
}
project()

