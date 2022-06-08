import React from 'react';
import {useNavigate} from "react-router-dom";

const Back = (props) => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return  (
        <div>
            {/*<button >back</button>*/}
        </div>
    )
};

export default Back;