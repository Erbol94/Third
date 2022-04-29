// CRUD это 4 основных
//C- Create создать БД (POST)
//R- Read прочитать с БД(GET)
//U- Update обновить, поменять с БД(PUT,PATCH)
//D- Delete удалить с БД(DELETE)

const URL = 'https://jsonplaceholder.typicode.com/users';
const searchUsername = document.getElementById('searchUsername');
const searchEmail = document.getElementById('searchEmail');
const btn = document.getElementById('btnSearch');

fetch(URL).then(response => response.json()).then(data => console.log(data))


const searchUser = () => {
    if (searchUsername.value === '' || searchEmail.value === ''){
        alert('Введите данные')
    }else {
        fetch(`${URL}?name=${searchUsername.value}&email=${searchEmail.value}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }
}
btn.addEventListener('click', searchUser)

