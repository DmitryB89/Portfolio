import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Header} from "./components/Header";
import {data} from "./data/data";
import {About} from "./components/About";
import {Projects} from "./components/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Projects/>
            <NavBar/>
            <About/>
        </div>
    );
}

export default App;
