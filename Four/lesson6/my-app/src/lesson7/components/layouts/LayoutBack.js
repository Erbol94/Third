import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
import Back from "../back/Back";

function LayoutBack () {

    return (
        <div>
            <h2>LayoutBack</h2>
            <Back/>
            <Outlet/>
        </div>
    )
}
export default LayoutBack;