import React, {FC, useContext, useState} from 'react'
import './LoginForm.scss'
import { useNavigate, Navigate } from "react-router-dom";
import Logo from '/src/assets/ModalLogo.svg'
import {Context} from "../../../main";
import { Redirect } from 'react-router-dom';
import { useHistory } from 'mobx-react-lite';
import userService from "../../../services/UserService";
import {observer} from "mobx-react-lite";

export const LoginForm: FC = function({setIsLogin, setModal}) {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        store.login(email, password);
        setModal(false);
        const token = localStorage.getItem("token");
        if (token) {
            userService.fetchUser(token);
        }
        navigate('/profile')
    };

    return (
        <div className="modal__inner">
            <div className="modal__head">
                <img className="modal__logo" src={Logo} alt="Логотип"/>
                <h3 className="modal__header">Добро пожаловать в AnIm</h3>
            </div>
            <div className="modal__body">
                <form action="" className="modal__form">
                    <h3 className="form__header">Авторизация</h3>
                    <label className="form__label" htmlFor="login">
                        <input
                            className="form__input"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            id='login'
                            type="text"
                            name='login'
                            placeholder='Логин'/>
                    </label>
                    <label className="form__label" htmlFor="password">
                        <input
                            className="form__input"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            id='password'
                            type="password"
                            name='password'
                            placeholder='Пароль'/>
                    </label>
                    <button onClick={() => setIsLogin(false)} className="form__switch">
                        Регистрация
                    </button>
                    <button className="form__restore-pass">
                        Забыли пароль?
                    </button>
                    <button
                        onClick={handleLogin}
                        className="form__login-btn"
                        type='submit'
                    >
                        Войти
                    </button>
                    <p className="form__terms">Нажимая на кнопку, вы принимаете
                        условия пользовательского соглашения</p>
                </form>
            </div>
        </div>
    );
};