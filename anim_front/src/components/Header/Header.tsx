import React, {useState, useEffect, useContext} from 'react'
import './Header.scss'
import {Link, useLocation} from "react-router-dom";
import {Modal} from "../Modal/Modal";
import Logo from '/src/assets/Logo.svg';
import Avatar from '/src/assets/author_img.png'
import Bell from '/src/assets/Bell.svg';
import {LoginForm} from "../Modal/LoginForm/LoginForm";
import {RegisterForm} from "../Modal/RegisterForm/RegisterForm";
import { useNavigate } from "react-router-dom";
import {Context} from "../../main"
import {observer} from "mobx-react-lite";

const Header = function() {
    const [modal, setModal] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const {store} = useContext(Context)
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault()
        store.logout();
        navigate('/')
    };

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);
    return (
        <header className="header">
            <Modal isActive={modal} setIsActive={setModal}>
                {isLogin ? <LoginForm setIsLogin={setIsLogin} setModal={setModal}/> : <RegisterForm setIsLogin={setIsLogin}/>}
            </Modal>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <span className="burger__menu"></span>
                    </li>
                    <li className="nav__item">
                        <img src={Logo} alt="Логотип"/>
                    </li>
                    <li className={currentPath === "/" ? "nav__item nav__item_active" : "nav__item"}>
                        <Link to="/">
                            Главная
                        </Link>
                    </li>
                    <li className="nav__item">
                        Все события
                    </li>
                    <li className="nav__item">
                        Подписки
                    </li>
                    <li className="nav__item">
                        Категории
                    </li>
                    <li className="nav__item">
                        Помощь
                    </li>
                    <li className="nav__item_block">
                        <div className="nav__block">
                            <span className="nav__notifications"><img src={Bell} alt="Уведомления"/></span>
                            {
                                (store.isAuth || localStorage.token)
                                    ?
                                <div className="profile__block">
                                    <Link to='/profile'>
                                        <img src={Avatar} alt="Аватарка"/>
                                    </Link>
                                    <button onClick={handleLogout}>Выйти</button>
                                </div>
                                    :
                                <div className="buttons__block">
                                    <button onClick={() => {setModal(true), setIsLogin(false)}} className="nav__link nav__link_register">Зарегистрироваться</button>
                                    <button onClick={() => {setModal(true), setIsLogin(true)}} className="nav__link nav__link_login">Войти</button>
                                </div>
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default observer(Header)