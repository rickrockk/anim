import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import {Modal} from "./components/Modal/Modal"
import {Home} from "./views/Home/Home";
import './App.scss'
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./views/Profile/Profile";
import userService from "./services/UserService";
import {observer} from "mobx-react-lite";
import {PrivateRoute} from "./privateRoute/privateRoute";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/profile' element={<Profile/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default observer(App);
