import { Link, NavLink } from "react-router-dom";
import Heading from "../../common/Heading";
import Authentication from "../../Authentication";
import { useState } from "react";

import "./style.scss"

function Navbar() {
    const [authModal, setAuthModal] = useState(false);

    function closeModal() {
        setAuthModal(false);
    }

    return (
        <div className="nav-wrapper">
            <div className="logo">
                <h2>
                    <Link to={"/"}>
                        <Heading size={1.5}>Fonte</Heading>
                    </Link>
                </h2>
            </div>

            <div className="menu">
                <div className="nav-links">
                    <NavLink to="about" className={({ isActive }) => isActive ? "active" : ""}>О нас</NavLink>
                    <NavLink to="team" className={({ isActive }) => isActive ? "active" : ""}>Команда</NavLink>
                    <NavLink to="blog" className={({ isActive }) => isActive ? "active" : ""}>Блог</NavLink>
                    <NavLink to="products" className={({ isActive }) => isActive ? "active" : ""}>Продукты</NavLink>
                    <NavLink to="contacts" className={({ isActive }) => isActive ? "active" : ""}>Контакты</NavLink>
                </div>

                <div className="auth">
                    <div>
                        <button className="warning-btn" onClick={() => setAuthModal(!authModal)}>Войти</button>
                        {authModal ?
                            <Authentication closeModal={closeModal} />
                        : null}
                    </div>
                    <a href="#">
                        <u>Рус</u>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;