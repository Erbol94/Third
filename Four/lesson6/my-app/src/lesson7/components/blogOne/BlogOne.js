import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function BlogOne (props) {
    const navigate = useNavigate()
    const params = useParams()
    console.log(useLocation)


    return (
        <div>
            <h2>{params.news}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi delectus eligendi explicabo fugit labore nam perspiciatis quisquam ullam velit?</p>
            <button onClick={()=> navigate('/Blogs')}>back</button>
        </div>
    )
}
export default BlogOne;

