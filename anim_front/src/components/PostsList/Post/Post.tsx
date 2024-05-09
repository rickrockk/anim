import React, {useEffect, useState} from 'react';
import './Post.scss'
import userService from "../../../services/UserService";
import AuthorImg from '/src/assets/author_img.png'
import PostLike from '/src/assets/post_like.svg'
import PostComment from '/src/assets/post_comment.svg'
import axios from "axios";

export const Post = ({desc, photo, authorid, postid}) => {
    const [isStaff, setIsStaff] = useState(false);
    const [userInfo, setUserInfo] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/user/${authorid}`);
                setUserInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUser();
    }, []);

    const token = localStorage.getItem('token')

    const removePost = async (post) => {
        const response = await axios.delete(`http://localhost:8000/api/image/${postid}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        location.reload();
    }

    return (
        <div className="post">
            <div className="post__head">
                <button onClick={removePost}
                        className={((userService.user?.id === authorid) || (userService.user?.is_superuser || userService.user?.is_staff)) ? "post__delete-btn_show" : "post__delete-btn"}>×
                </button>
                <div className="post__author">
                    <img src={AuthorImg} alt="Аватар" className="author__img"/>
                    <div className="author__info">
                        <p className="author__name">{userInfo.first_name}</p>
                        <p className="author__desc">Очень приятно Бог</p>
                    </div>
                </div>
                <button className={isSubscribed == false ? "post__subscribe" : "post__subscribe post__subscribe_active"}
                        onClick={() => setIsSubscribed(!isSubscribed)}>
                    {isSubscribed == false ? 'Подписаться' : 'Вы подписаны'}
                </button>
            </div>
            <div className="post__body">
                <img src={photo} alt="Изображение поста" className="post__image"/>
                <p className="post__desc">{desc}</p>
            </div>
            <div className="post__footer">
                <div className="post__controls">
                    <div className="post__tags">
                        <p className="post__tag"># Аниме</p>
                    </div>
                    <div className="post__activity">
                        <div className="post__comments">
                            <img className="comments__icon" src={PostComment} alt="Комментарии"/>
                            <p className="comments__count">0</p>
                        </div>
                        <div className="post__likes">
                            <img className="likes__icon" src={PostLike} alt="Лайки"/>
                            <p className="likes__count">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};