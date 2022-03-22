import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
           
            <nav className='header'>
                <img src={logo} alt="" />
                <div className="menu">
                    <a href="/Home">Home</a>
                    <a href="/Oder">Oder</a>
                    <a href="/Invoice">Invoice</a>
                    <a href="/About">About</a>
                </div>

            </nav>
        </div>
    );
};

export default Header;