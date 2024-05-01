import React from 'react'
import './LoginForm.scss'
import Logo from '/src/assets/ModalLogo.svg'

export const LoginForm = ({setIsLogin}) => {
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
                        <input className="form__input" id='login' type="text" name='login' placeholder='Логин'/>
                    </label>
                    <label className="form__label" htmlFor="password">
                        <input className="form__input" id='password' type="password" name='password' placeholder='Пароль'/>
                    </label>
                    <button onClick={() => setIsLogin(false)} className="form__switch">
                        Регистрация
                    </button>
                    <button className="form__restore-pass">
                        Забыли пароль?
                    </button>
                    <button className="form__login-btn" type='submit'>
                        Войти
                    </button>
                    <p className="form__terms">Нажимая на кнопку, вы принимаете
                        условия пользовательского соглашения</p>
                </form>
            </div>
        </div>
    );
};