
export const Services = (props) => {
    return (
        <div>
            <ul>
                {props.services.map((el, key)=> {
                    return <li key={key}>{el}</li>
                })}
            </ul>
        </div>
    )
}