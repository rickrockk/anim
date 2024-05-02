import React from 'react';
import './CoverUpload.scss'
import Upload from '/src/assets/Upload.svg';

export const CoverUpload = () => {
    return (
        <div className="dragndrop__form">
            <div className="dragndrop__area">
                <img src={Upload} alt="Выгрузка"/>
                <p className="dragndrop__title">Загрузка файлов</p>
                <p className="dragndrop__subtext">Перетащите сюда Ваши файлы</p>
            </div>
        </div>
    );
};