import React, {useState} from 'react'
import './ContentSwitcher.scss'


export const ContentSwitcher = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="homepage__switcher">
            <button className={isActive == false ? "homepage__btn homepage__btn_active" : "homepage__btn"} onClick={() => setIsActive(false)}>Рекомендации</button>
            <button className={isActive == true ? "homepage__btn homepage__btn_active" : "homepage__btn"} onClick={() => setIsActive(true)}>Новые</button>
        </div>
    );
};