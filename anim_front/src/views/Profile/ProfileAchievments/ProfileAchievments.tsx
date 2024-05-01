import React from 'react';
import './ProfileAchievments.scss'
import AchievmentImg from '/src/assets/achievment__img.png'


export const ProfileAchievments = () => {
    return (
        <div className="profile__achievments">
            <h3 className="achievments__header">Ваши достижения!</h3>
            <ul className="achievments__list">
                <li className="achievment__item"><img src={AchievmentImg} alt="Иконка достижений"/></li>
                <li className="achievment__item"><img src={AchievmentImg} alt="Иконка достижений"/></li>
                <li className="achievment__item"><img src={AchievmentImg} alt="Иконка достижений"/></li>
                <li className="achievment__item"><img src={AchievmentImg} alt="Иконка достижений"/></li>
                <li className="achievment__item"><img src={AchievmentImg} alt="Иконка достижений"/></li>
                <li className="achievment__item"><img src={AchievmentImg} alt="Иконка достижений"/></li>
                <li className="achievment__item"><img src={AchievmentImg} alt="Иконка достижений"/></li>
                <li className="achievment__item"><img src={AchievmentImg} alt="Иконка достижений"/></li>
                <li className="achievment__item"><img src={AchievmentImg} alt="Иконка достижений"/></li>
            </ul>
        </div>
    );
};