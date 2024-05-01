import React from "react";
import './Event.scss'
import EventImg from '/src/assets/event_img.jpg'
import Calendar from '/src/assets/Calendar.svg'

export const Event = () => {
    return (
        <div className="event">
            <div className="event__photo">
                <img src={EventImg} alt="Обложка события"/>
            </div>
            <div className="event__info">
                <p className="event__desc">Прекрасное событие! Пожалуйста, участвуйте и выиграйте приз!</p>
                <p className="event__date"><span className="event__icon"><img src={Calendar} alt="Календарь"/></span>21.01.2024 - 21.03.2024</p>
            </div>
        </div>
    );
};