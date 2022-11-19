import React from 'react';
import Logo from './logo.svg';
import './navbar.css';

function Navbar(props) {
    return (
        <nav className='nav'>
            {/* eslint-disable */}
            <a href="#" className='brand'>
                <img src= {Logo} alt="better-home" />
            </a>
            
            <ul className="nav__menu">
                <li className="nav__item">
                    {/* eslint-disable */}
                    <a href="#" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Buy</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Rent</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Service</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Assign</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">News</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Contact</a>
                </li>
            </ul>
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;