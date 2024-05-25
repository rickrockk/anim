import React from "react";
import './Cards.scss'
import Event2 from '/src/assets/card2.png'
import Calendar from '/src/assets/Calendar.svg'

export const Card2 = () => {
    return (
        <div className="events">
            <div className="event__photo">
                <img className="img" src={Event2} alt="Обложка события"/>
            </div>
            <div className="event__info">
                <p className="event__desc">Прекрасное событие! Пожалуйста, участвуйте и выиграйте приз!</p>
                <p className="event__date"><span className="event__icon"><img src={Calendar} alt="Календарь"/></span>21.01.2024 - 21.03.2024</p>
            </div>
        </div>
    );
};