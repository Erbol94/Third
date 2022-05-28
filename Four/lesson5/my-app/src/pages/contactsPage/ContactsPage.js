import React,{useState} from "react";
import Logo from '../../img/Hero Image.png'

function ContactsPage (){
    const [data, setData] = useState({userName:'', age:'0'});

    function onChangeValue (e) {
        e.preventDefault()
        setData({...data, [e.target.name]: e.target.value})
    }
    function onSubmit (e) {
        e.preventDefault()
        console.log(data)
    }

    return (
        <div>
            <h3>Contact Page</h3>
            <input type="text" value={data.value} onChange={onChangeValue} name='userName'/>
            <input type="text" value={data.age} onChange={onChangeValue} name= 'age'/>
            <button onClick={onSubmit}>Отправить данные</button>
            <img src={Logo} alt=""/>
        </div>
    )
}
export default ContactsPage;