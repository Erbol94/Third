import {useNavigate} from "react-router-dom";

function  Discription () {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, sunt?
            </p>
        </div>

    )
}
export default Discription;