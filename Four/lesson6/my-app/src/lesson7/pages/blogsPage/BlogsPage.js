import React from "react";
import {Link} from "react-router-dom";

function BlogsPage (props) {
    return (
        <div>
            <h2>Blogs page</h2>
            <ul>
                <li>
                    <Link to="/Blogs/news1" state={{name: 'news1'}}> news 1 </Link>
                </li>
                <li>
                    <Link to="/Blogs/news2" > news 2 </Link>
                </li>
            </ul>
        </div>
    )
}
export default BlogsPage;