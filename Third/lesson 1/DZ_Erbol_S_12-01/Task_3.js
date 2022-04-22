const object = {
    id: 1,
    name: 'Erbol',
    surname: 'Shakeev',
    age: '28'
}
const JsonUser = JSON.stringify(object)
localStorage.setItem('object', JsonUser);
const data = localStorage.getItem('object');
console.log(JSON.parse(data));

function delAll (){
    localStorage.clear()
}
function del (){
    localStorage.removeItem(`${document.getElementById('keyStg').value}`, JsonUser)
}
function set (){
    localStorage.setItem(`${document.getElementById('locStg').value}`, JsonUser)
}
document.getElementById('del_all').addEventListener('click', delAll)
document.getElementById('delKey').addEventListener('click', del)
document.getElementById('btnStg').addEventListener('click',set)

