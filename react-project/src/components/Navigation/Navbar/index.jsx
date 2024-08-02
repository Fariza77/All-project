import { Link } from "react-router-dom";
import Heading from "../../common/Heading";
import "./style.scss"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <Heading>Fonte</Heading>
            </div>
            <div className="middle"></div>
            <div className="right"></div>
        </nav>
    );
}

export default Navbar;