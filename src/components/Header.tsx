import React from 'react';
import img from '../assets/Layer1.png'

export const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header-section">
                                <h2>Приветствую!</h2>
                                <h1>Я Дмитрий</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam,<br/>at
                                    consequuntur cupiditate
                                    doloremque doloribus eligendi explicabo facilis ipsum laudantium modi molestiae
                                </p>
                                <div className="header__buttons">
                                    <a href="header" className="btn btn-outline">
                                        Сотрудничать
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-6">
                        <img src={img} alt="header-right" className='image'/>
                    </div>

                </div>
            </div>

        </header>
    );
};

