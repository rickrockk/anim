import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Modal} from "./components/Modal/Modal"
import {Home} from "./views/Home/Home";
import './App.scss'
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./views/Profile/Profile";

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

export default App
