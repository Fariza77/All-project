import { Link, NavLink } from "react-router-dom";
import Heading from "../../common/Heading";
import Authentication from "../../Authentication";
import { useState, useContext } from "react";
import { globalContext } from "../../../store"
import { toast } from "react-toastify";
import { logoutUser } from '../../../store/helpers'
import { useTranslation } from "react-i18next";

import "./style.scss"

function Navbar() {
    const [authModal, setAuthModal] = useState(false);
    const state = useContext(globalContext)
    const { t, i18n: { changeLanguage, language } } = useTranslation();

    function closeModal() {
        setAuthModal(false);
    }

    const handleChangeLanguage = (newLanguage) => {
        state.dispatch({ type: "CHANGE_LANG", currentLanguage: newLanguage })
        changeLanguage(newLanguage)
    }

    function logout() {
        logoutUser()
        state.dispatch({ type: "LOGOUT" })
        toast.success("You have successfully logged out", { theme: "dark" })
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
                    <NavLink to="about" className={({ isActive }) => isActive ? "active" : ""}>
                        {t("about")}
                    </NavLink>
                    <NavLink to="team" className={({ isActive }) => isActive ? "active" : ""}>
                        {t("team")}
                    </NavLink>
                    <NavLink to="blog" className={({ isActive }) => isActive ? "active" : ""}>
                        {t("blog")}
                    </NavLink>
                    <NavLink to="products" className={({ isActive }) => isActive ? "active" : ""}>
                        {t("productrs")}
                    </NavLink>
                    <NavLink to="contacts" className={({ isActive }) => isActive ? "active" : ""}>
                        {t("contacts")}
                    </NavLink>
                </div>

                <div className="auth">
                    {state.user.username ?
                        <div className="logged-in-menu">
                            <h4>{state.user.username}</h4>
                            <div className="content">
                                <button className="warning-btn" onClick={logout}>Выйти</button>
                            </div>
                        </div>
                        :
                        <div className="logged-out-menu">
                            <button className="warning-btn" onClick={() => setAuthModal(!authModal)}>Войти</button>
                            {authModal ?
                                <Authentication closeModal={closeModal} />
                                : null}
                        </div>
                    }
                    <div className="nav-dropdown">
                        <a href="#">{state.currentLanguage.toUpperCase()}</a>
                        <div className="drp-content">
                            <a href="#" 
                                onClick={() => handleChangeLanguage("en")}
                                className={language=="en" ? "selected" : ""}
                            >EN</a>
                            <a href="#" 
                                onClick={() => handleChangeLanguage("ru")}
                                className={language=="ru" ? "selected" : ""}
                            >RU</a>
                            <a href="#" 
                                onClick={() => handleChangeLanguage("uz")}
                                className={language=="uz" ? "selected" : ""}
                            >UZ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;