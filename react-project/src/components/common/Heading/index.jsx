import Vector from '../../../assets/icons/Vector.png';
import './style.scss'


function Heading(props) {
    return (
        <div className="heading-wrapper">
            <h2>
                {props.children}
                <img src={Vector} alt="Vector" />
            </h2>
        </div>
    );
}

export default Heading;