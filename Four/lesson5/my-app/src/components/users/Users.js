

function Users (props){
    return (
        <div>
            <ul>

                {   props.propUsers.length > 0
                        ?
                    props.propUsers.map((user, key)=> {
                    return (
                        <li key={key}>{user}</li>
                    )
                })
                    :
                    <li>данные пустые</li>
                }
            </ul>
            <div>
                <button onClick={props.getUsersProp}>change</button>
            </div>
        </div>
    )
}
export default Users;