function NewsDZ(props){
    return(
        <ul>
            <h2>News</h2>
            {
            props.propNews.length > 0
                ?
                props.propNews.map((news, key) =>{
                    return(
                        <li key={key}>{news}</li>
                    )
                })
                :
                <li>no news here</li>
        }
            <li>
                <button onClick={props.getNewsProps}>get news</button>
            </li>
        </ul>
    )
}

export default NewsDZ;