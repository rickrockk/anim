import React, {FC, useContext, useState} from 'react'
import './LoginForm.scss'
import {changeloggedIn} from "../../../actions/user.actions";
import {history} from "../../../helpers/history";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import userService from "../../../services/login/user.service";

import Logo from '/src/assets/ModalLogo.svg'
const LoginForm: FC = function({setIsLogin, setModal, setLoggedIn}) {
    // const [email, setEmail] = useState<string>('')
    // const [password, setPassword] = useState<string>('')
    // const [loginSubmitted, setLoginSubmitted] = useState<boolean>(false)

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        loginSubmitted: false
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const doLogin = async (event) => {
        event.preventDefault();
        setLoginData({ ...loginData, loginSubmitted: true });
        const { email, password } = loginData;

        userService.login(email, password)
            .then((res) => {
                if (res.success) {
                    if (res.data.id === 0) {
                        localStorage.removeItem('userDetails');
                        clearLoginForm();
                    } else {
                        localStorage.setItem('userDetails', JSON.stringify(res.data));
                        setLoggedIn(true, res.data);
                        clearLoginForm();
                        history.push('/profile');
                    }
                } else {
                    localStorage.removeItem('userDetails');
                    clearLoginForm();
                }
            })
            .catch((error) => {
                localStorage.removeItem('userDetails');
                clearLoginForm();
            });
    };

    const clearLoginForm = () => {
        setLoginData({ email: '', password: '', loginSubmitted: false });
    };

    const { email, password } = loginData;

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
                            onChange={handleChange}
                            value={email}
                            id='login'
                            type="text"
                            name='login'
                            placeholder='Логин'/>
                    </label>
                    <label className="form__label" htmlFor="password">
                        <input
                            className="form__input"
                            onChange={handleChange}
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
                        className="form__login-btn"
                        type='submit'
                        onClick={doLogin}
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

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: (isLoggedIn, user) => {
            dispatch(changeloggedIn(isLoggedIn, user));
        }
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);