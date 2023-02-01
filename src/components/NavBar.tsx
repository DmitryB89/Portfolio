import React, {useState} from 'react';
import {FaAlignJustify} from "react-icons/fa";
import logo from "../assets/logo.png"

export const NavBar = () => {
    const [state, setState] = useState(true)
    return (

        <nav className='navbar'>
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className='navbar__left-logo'>
                            <img src={logo} alt="logo"/>
                        </div>
                    </ul>
                    {state ? (
                        <ul className='navbar__right'>
                            <li><a href="">Обо мне</a></li>
                            <li><a href="">Портфолио</a></li>
                            <li><a href="">Новыки</a></li>
                            <li><a href="">Контакты</a></li>
                        </ul>
                    ) : (
                        ''
                    )}
                </div>
                <div className="toggle" onClick={() => setState(!state)}>
                    <FaAlignJustify/>
                </div>
            </div>
        </nav>

    );
};
