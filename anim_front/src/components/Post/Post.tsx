import React, {useState} from 'react';
import './Post.scss'
import userService from "../../services/UserService";
import AuthorImg from '/src/assets/author_img.png'
import PostImg from '/src/assets/post_img.jpg'
import PostLike from '/src/assets/post_like.svg'
import PostComment from '/src/assets/post_comment.svg'

export const Post = () => {
    const [isStaff, setIsStaff] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)
    return (
        <div className="post">
            <div className="post__head">
                <button className={isStaff ? "post__delete-btn_show" : "post__delete-btn"}>×</button>
                <div className="post__author">
                    <img src={AuthorImg} alt="Аватар" className="author__img"/>
                    <div className="author__info">
                        <p className="author__name">AlinaMatrosova</p>
                        <p className="author__desc">Очень приятно Бог</p>
                    </div>
                </div>
                <button className={isSubscribed == false ? "post__subscribe" : "post__subscribe post__subscribe_active"} onClick={() => setIsSubscribed(!isSubscribed)}>
                    {isSubscribed == false ? 'Подписаться' : 'Вы подписаны'}
                </button>
            </div>
            <div className="post__body">
                <img src={PostImg} alt="Изображение поста" className="post__image"/>
                <p className="post__desc">Мой рисунок, оцените</p>
            </div>
            <div className="post__footer">
                <div className="post__controls">
                    <div className="post__tags">
                        <p className="post__tag"># Аниме</p>
                    </div>
                    <div className="post__activity">
                        <div className="post__comments">
                            <img className="comments__icon" src={PostComment} alt="Комментарии"/>
                            <p className="comments__count">17</p>
                        </div>
                        <div className="post__likes">
                            <img className="likes__icon"src={PostLike} alt="Лайки"/>
                            <p className="likes__count">1900</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};