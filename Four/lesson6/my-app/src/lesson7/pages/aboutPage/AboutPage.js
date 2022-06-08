import React from "react";
import {useNavigate} from "react-router-dom";


function AboutPage () {
    const navigate = useNavigate()
    const backTo = () => {
        navigate('/port', {replace:true, state:{
            id:1
            }})
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>back</button>
            <h2>About Page</h2>
        </div>

    )
}
export default AboutPage;