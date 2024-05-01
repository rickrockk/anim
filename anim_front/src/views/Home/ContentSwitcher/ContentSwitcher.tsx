import React from 'react'
import './ContentSwitcher.scss'


export const ContentSwitcher = () => {
    return (
        <div className="homepage__switcher">
            <button className="homepage__btn">Рекомендации</button>
            <button className="homepage__btn">Новые</button>
        </div>
    );
};