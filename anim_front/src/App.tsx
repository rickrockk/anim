import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {Modal} from "./components/Modal/Modal"
import {Home} from "./views/Home/Home";
import './App.scss'
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App
