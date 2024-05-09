import React, {useState} from 'react';
import './PhotoUpload.scss'
import axios from "axios";
import Upload from '/src/assets/Upload.svg';

export const PhotoUpload = ({requestLink, setModal}) => {
    const [drag, setDrag] = useState(false)
    const [desc, setDesc] = useState('')
    const token = localStorage.getItem('token');

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
        const formData = new FormData()
        formData.append('photo', files[0])
        formData.append('desc', desc)
        axios.post(requestLink, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setDrag(false);
        setModal(false);
    }

    return (
        <form className="dragndrop__form">
            <div onDragStart={e => dragStartHandler(e)} onDragLeave={e => dragLeaveHandler(e)}
                 onDragOver={e => dragStartHandler(e)} onDrop={e => onDropHandler(e)} className="dragndrop__area">
                <img src={Upload} alt="Выгрузка"/>
                <p className="dragndrop__title">Загрузка файлов</p>
                {drag ? <p className="dragndrop__subtext">Отпустите Ваши файлы</p> :
                    <p onDragStart={e => dragStartHandler(e)} onDragLeave={e => dragLeaveHandler(e)}
                       onDragOver={e => dragStartHandler(e)} className="dragndrop__subtext">Перетащите сюда Ваши
                        файлы</p>}
            </div>
            <label className="form__label" htmlFor="login">
                <input
                    className="form__input"
                    onChange={e => setDesc(e.target.value)}
                    value={desc}
                    id='desc'
                    type="text"
                    name='desc'
                    placeholder='Описание'/>
            </label>
        </form>
    );
};