import React, {useState} from 'react'
import './ProfileHeader.scss'
import {Modal} from "../../../components/Modal/Modal";
import {PhotoUpload} from "../CoverUpload/PhotoUpload";
import Right from '/src/assets/Right.svg'
import ProfileImg from '/src/assets/author_img.png'

export function ProfileHeader(props) {
    const [modal, setModal] = useState(false)
    return (
        <div className="main__profile-header">
            <Modal isActive={modal} setIsActive={setModal}>
                <PhotoUpload/>
            </Modal>
            <div className="main__cover">
                <p className="profile__name">{props.name}</p>
                <button onClick={() => setModal(true)} className="profile__cover-change">Изменить <span className="btn__arrow"><img src={Right} alt="Стрелка вправо"/></span></button>
            </div>
            <div className="main__profile-stats">
                <img className="profile__img" src={ProfileImg} alt="Аватарка"/>
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