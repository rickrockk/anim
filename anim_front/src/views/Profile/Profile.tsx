import React, {useEffect, useState} from 'react';
import './Profile.scss'
import {Modal} from "../../components/Modal/Modal";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfileContentSwitcher} from "./ProfileContentSwitcher/ProfileContentSwitcher";
import {ProfileAchievments} from "./ProfileAchievments/ProfileAchievments";
import {Post} from "../../components/PostsList/Post/Post";
import CardImg from '/src/assets/card_img.svg'
import userService from "../../services/UserService";
import axios from "axios";
import {PhotoUpload} from "./CoverUpload/PhotoUpload";

export function Profile(props) {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        if (localStorage.getItem(("token"))) {
            userService.fetchUser(localStorage.getItem(("token")));
        }
    }, [])
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/image/');
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts();
    }, []);

    const REQUEST_LINK = 'http://localhost:8000/api/image/'
    return (
        <main className="main__profile">
            <Modal isActive={modal} setIsActive={setModal}>
                <PhotoUpload requestLink={REQUEST_LINK} setModal={setModal}/>
            </Modal>
            <ProfileHeader name={userService.user?.first_name}/>
            <section className="profile__body">
                <div className="profile__container">
                    <div className="profile__block">
                        <p className="block__title">Поделитесь своими работами!</p>
                        <button onClick={() => setModal(true)}>
                            <img src={CardImg} alt=""/>
                        </button>
                    </div>
                    <div className="profile__content">
                        <ProfileContentSwitcher/>
                        <div className="content__inner">
                            <div className="profile__posts">
                                {posts.map((post) => <Post photo={post.photo} postid={post.id} desc={post.desc} authorid={post.user} key={post.id}/>)}
                            </div>
                            <ProfileAchievments/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}