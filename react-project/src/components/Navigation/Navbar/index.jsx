import { Link } from "react-router-dom";
import Heading from "../../common/Heading";
import "./style.scss"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <Heading>Fonte</Heading>
            </div>
            <div className="middle">
                <a href="#">О нас</a>
                <a href="#">Команда</a>
                <a href="#">Блог</a>
                <a href="#">Продукты</a>
                <a href="#">Контакты</a>
            </div>
            <div className="right">
                <button className="warning-btn">Войти</button>
                <a href="#">
                    <u>Рус</u>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;