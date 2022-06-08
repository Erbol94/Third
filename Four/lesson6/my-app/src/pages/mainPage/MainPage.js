import React, {useState} from "react";
import Users from "../../components/users/Users";
const URL = 'https://jsonplaceholder.typicode.com/users';

function MainPage () {
    const [data, setData] = useState([])

    const getData = (e) => {
        e.preventDefault()
        fetch(URL)
           .then(response => response.json())
           .then(data => setData(data))
   }

    return (
        <div>
            <h2>Main Page</h2>
            <button onClick={getData}>Get users</button>
            <Users propUser={data}/>

        </div>
    )
}

export default MainPage;