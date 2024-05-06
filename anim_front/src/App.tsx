import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import {Modal} from "./components/Modal/Modal"
import {Home} from "./views/Home/Home";
import './App.scss'
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./views/Profile/Profile";
import userService from "./services/UserService";
import {RequireAuth} from "./services/RequireAuth";
import {observer} from "mobx-react-lite";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default observer(App);
