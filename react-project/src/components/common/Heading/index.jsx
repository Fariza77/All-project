import Vector from '../../../assets/icons/Vector.png';
import './style.scss'


function Heading(props) {
    const fontSize = props.size 
                         ? (40/props.size)+"px" 
                         : '40px';

    return (
        <div className={props.gray ? "heading-wrapper gray" : "heading-wrapper"}>
            <h1 style={{fontSize}}>
                {props.children}
                <img src={Vector} alt="Vector" />
            </h1>
        </div>
    );
}

export default Heading;