
function UsersHw (props){
    const user = props.user.map((user, key)=> {
        return (
            <li key={key}>
                <div>name:{user.name}</div>
                <div>age:{user.age}</div>
                <div>position:{user.position}</div>
            </li>
        )
    })

    return (
        <div>
            {user}
        </div>
    )
}

export default UsersHw;