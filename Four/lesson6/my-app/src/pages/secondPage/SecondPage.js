import React, {useEffect, useState} from "react";
import Users from "../../components/users/Users";
const URL = 'https://jsonplaceholder.typicode.com/users';

function SecondPage () {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch(URL)
            .then(response => response.json())
            .then(data => setUsers(data))
    },[])

    return (
        <div>
            <h2>Second Page</h2>
            <Users propUser={users}/>
        </div>
    )
}
export default SecondPage;