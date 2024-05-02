import React, {useState} from 'react';
import classNames from "classnames";
import './ProfileContentSwitcher.scss'

export const ProfileContentSwitcher = () => {

    const [activeBtn, setActiveBtn] = useState(true)
    return (
        <div className="profile__content-switcher">
            <button className={activeBtn == true ? "content-switcher__btn content-switcher__btn_active" : "content-switcher__btn"} onClick={() => setActiveBtn(true)}>Новые записи</button>
            <button className={activeBtn == false ? "content-switcher__btn content-switcher__btn_active" : "content-switcher__btn"} onClick={() => setActiveBtn(false)}>Популярные записи</button>
        </div>
    );
};