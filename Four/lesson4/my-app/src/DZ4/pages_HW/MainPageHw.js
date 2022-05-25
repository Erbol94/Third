import React from "react";
import UsersHw from "../components_HW/UsersHw";


class  MainPageHw extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h2>DZ4_Shakeev_Erbol_12-01</h2>
                <UsersHw user={this.props.user} />
            </div>
        );
    }

}
export default MainPageHw;