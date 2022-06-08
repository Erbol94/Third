import {useLocation} from "react-router-dom";

function PortfolPage () {
    const location = useLocation()
    console.log(location)

    return (
        <div>
            <h2>Port Page</h2>

        </div>
    )
}
export default PortfolPage;