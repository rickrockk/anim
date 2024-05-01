import React from 'react'
import './ProfileHeader.scss'
import Cover from '/src/assets/cover.jpg'
import ProfileImg from '/src/assets/author_img.png'

export function ProfileHeader() {
    return (
        <div className="main__profile-header">
            <div className="main__cover">
                <p className="profile__name">Алина Матросова</p>
            </div>
            <div className="main__profile-stats">
                <img className="profile__img" src={ProfileImg} alt="Аватарка" className="profile__img"/>
                <ul className="stats__list">
                    <li className="stats__item">1 пост</li>
                    <li className="stats__item">1 подписчик</li>
                    <li className="stats__item">2 лайка</li>
                    <li className="stats__item">4 комментария</li>
                </ul>
            </div>
        </div>
    );
}