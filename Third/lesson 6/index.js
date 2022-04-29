const URL = 'http://localhost:3333/users/4'

const name = document.getElementById('searchName')
const userName = document.getElementById('searchUsername')
const email = document.getElementById('searchEmail')
const btn = document.getElementById('btnSearch')

const createUser = () => {
    const data = {
        name: name.value,
        surname: userName.value,
        email: email.value
    }

    // let options = {
    //     method:"POST",
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }
    // let options = {
    //     method:"PATCH",
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }
    // fetch(URL, options).then(response => response.json())
    let options = {
        method:"DELETE",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(URL, options).then(response => response.json())
}
btn.addEventListener('click', createUser)