import React from "react";

function Users (props){
    return (
        <div>
            <h2>Users table</h2>
            <table border='1'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Username</td>
                    </tr>
                </thead>
                <tbody>
                {props.propUser.map((user, key) => {
                    return (
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
        </div>
    )
}
export default Users;