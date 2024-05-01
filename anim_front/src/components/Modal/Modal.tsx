import React, {useState} from 'react';
import classNames from "classnames";
import './Modal.scss'

export const Modal = ({children, isActive, setIsActive}) => {
    const modalClass = classNames({
        modal: true,
        'modal_active': isActive
    })
    if (isActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return (
        <div className={modalClass} onClick={() => setIsActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};