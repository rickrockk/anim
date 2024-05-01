import React from 'react';
import './Profile.scss'
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfileContentSwitcher} from "./ProfileContentSwitcher/ProfileContentSwitcher";
import {ProfileAchievments} from "./ProfileAchievments/ProfileAchievments";
import {Post} from "../../components/Post/Post";
import CardImg from '/src/assets/card_img.svg'

export function Profile() {
    return (
        <main className="main__profile">
            <ProfileHeader/>
            <section className="profile__body">
                <div className="profile__container">
                    <div className="profile__block">
                        <p className="block__title">Поделитесь своими работами!</p>
                        <img src={CardImg} alt=""/>
                    </div>
                    <div className="profile__content">
                        <ProfileContentSwitcher/>
                        <div className="content__inner">
                            <Post/>
                            <ProfileAchievments/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}