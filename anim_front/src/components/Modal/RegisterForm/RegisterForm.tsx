import React from 'react';
import './RegisterForm.scss'
import Logo from "../../../assets/ModalLogo.svg";

export const RegisterForm = ({setIsLogin}) => {
    return (
        <div className="modal__inner">
            <div className="modal__head">
                <img className="modal__logo" src={Logo} alt="Логотип"/>
                <h3 className="modal__header">Добро пожаловать в AnIm</h3>
            </div>
            <div className="modal__body">
                <form action="" className="modal__form">
                    <h3 className="form__header">Регистрация</h3>
                    <label className="form__label" htmlFor="login">
                        <input className="form__input" id='login' type="text" name='login' placeholder='Логин'/>
                    </label>
                    <label className="form__label" htmlFor="name">
                        <input className="form__input" id='name' type="name" name='name' placeholder='Имя'/>
                    </label>
                    <label className="form__label" htmlFor="password">
                        <input className="form__input" id='password' type="password" name='password' placeholder='Пароль'/>
                    </label>
                    <label className="form__label" htmlFor="confirm_password">
                        <input className="form__input" id='confirm_password' type="password" name='confirm_password' placeholder='Подтвердите ароль'/>
                    </label>
                    <button className="form__login-btn" type='submit'>
                        Зарегистрироваться
                    </button>
                    <button onClick={() => setIsLogin(true)} className="form__registered">
                        Уже зарегистрированы?
                    </button>
                    <p className="form__terms">Нажимая на кнопку, вы принимаете
                        условия пользовательского соглашения</p>
                </form>
            </div>
        </div>
    );
};