import { Link } from "react-router-dom";
import Heading from "../../common/Heading";
import "./style.scss"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <Link to="/">
                    <Heading size={1}>Fonte</Heading>
                </Link>
            </div>
            <div className="middle">
                <Link to="about">О нас</Link>
                <Link to="team">Команда</Link>
                <Link to="blog">Блог</Link>
                <Link to="products">Продукты</Link>
                <Link to="contacts">Контакты</Link>
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