import React,{useState} from "react";
import classes from './mainpage.module.css'
import Users from "../../components/users/Users";


function MainPage (){

    const [title, setTitle] = useState({title:'old title'});
    const [count, setCount] = useState(0);

    const [users, setUsers] = useState(['Dastan','Abai','Ilim'])

    function changeTitle (e){
        e.preventDefault();
        setTitle({title: 'new title'})
    }
    const upCount = (e) => {
        e.preventDefault();
        setCount(count + 1)
    }
    function upReset (e){
        e.preventDefault(e)
        setCount(0)
    }
    function upDown (e) {
        e.preventDefault()
        setCount(count - 1);
        // console.log(count)
    }

    function getNewUsers (e) {
        e.preventDefault()
        setUsers([])
    }


    return (
        <div>
            {/*Main Page - {title.title}*/}
            {/*<button onClick={changeTitle}>change</button>*/}
            {/*<div className={classes.countWrapper}>*/}
            {/*    <p>Вы нажали на кнопку {count} раз</p>*/}
            {/*    <button onClick={upCount}>+</button>*/}
            {/*    <button onClick={upReset}>reset</button>*/}
            {/*    <button onClick={upDown}>-</button>*/}
            {/*</div>*/}

            {/*<Users propUsers = {users} getUsersProp = {getNewUsers}/>*/}
            {/*<button onClick={getNewUsers}>change</button>*/}
        </div>
    )
}
export default MainPage;