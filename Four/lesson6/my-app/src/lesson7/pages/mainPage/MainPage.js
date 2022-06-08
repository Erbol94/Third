import React from "react";
import {useNavigate} from "react-router-dom";
const URL = 'https://jsonplaceholder.typicode.com/users'

function MainPage () {
    const navigate = useNavigate()
    const getUsers = ()=> {
        fetch(URL)
            .then(response => {
                if (response.ok){
                    navigate('/port', {replace:true})
                }
            })
            
    }

    return (
            <div>
                <h2>Main Page</h2>

                <button onClick={getUsers}>get users</button>
            </div>
    )
}
export default MainPage;