import React, {useState} from 'react'
import {Post} from "../../components/Post/Post";
import {Event} from './Event/Event';
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
                    </div>
                </div>
            </section>
        </main>
    );
}