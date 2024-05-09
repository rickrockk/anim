import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {PostsList} from "../../components/PostsList/PostsList";
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
                        <PostsList/>
                        <Event/>
                        <img className="homepage__bro" src={Bro} alt="Bro"/>
                    </div>
                </div>
            </section>
        </main>
    );
}