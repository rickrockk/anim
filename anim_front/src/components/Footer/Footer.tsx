import React from 'react';
import './Footer.scss'
import FooterLogo from '/src/assets/FooterLogo.svg';
import Insta from '/src/assets/Inst.svg';
import Twitter from '/src/assets/Twitter.svg'
import YouTube from '/src/assets/YouTube.svg'
import {EmailInput} from './EmailInput/EmailInput';

export function Footer() {
    return (
        <footer className='footer'>
            <nav className="footer__nav">
                <div className="footer__copyrights">
                    <img src={FooterLogo} className="footer__logo" alt="Логотип"/>
                    <p className="footer__copyright">
                        Anim © 2024 <br/> Все права защищены
                    </p>
                    <div className="footer__socials">
                        <img className="footer__social" src={Insta} alt="Инстаграм"/>
                        <img className="footer__social" src={Twitter} alt="Твиттер"/>
                        <img className="footer__social" src={YouTube} alt="YouTube"/>
                    </div>
                </div>
                <ul className="footer__list">
                    <li className="footer__item">
                        <h3 className="footer__title">
                            Компания
                        </h3>
                        <a href="#" className="footer__link">
                            О нас
                        </a>
                        <a href="#" className="footer__link">
                            Связаться с нами
                        </a>
                    </li>
                    <li className="footer__item">
                        <h3 className="footer__title">
                            Поддержка
                        </h3>
                        <a href="#" className="footer__link">
                            Тех. поддержка
                        </a>
                        <a href="#" className="footer__link">
                            Условия обслуживания
                        </a>
                        <a href="#" className="footer__link">
                            Политика конфиденциальности
                        </a>
                    </li>
                    <li className="footer__item">
                        <h3 className="footer__title">
                            Будь в курсе событий
                        </h3>
                        <EmailInput/>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}