import React, {useState} from 'react'
import {Post} from "../../components/Post/Post";
import {Event} from './Event/Event';
import Bro from '../../assets/bro.png';
import {ContentSwitcher} from "./ContentSwitcher/ContentSwitcher";
import './Home.scss'

export function Home() {

    return (
        <main className="main">
            <section className="main__homepage">
                <div className="homepage__container">
                    <div className="homepage__head">
                        <ContentSwitcher/>
                        <h2 className="homepage__header">Свежие события</h2>
                    </div>
                    <div className="homepage__body">
                        <Post/>
                        <Event/>
                        <img className="homepage__bro" src={Bro} alt="Bro"/>
                    </div>
                </div>
            </section>
        </main>
    );
}