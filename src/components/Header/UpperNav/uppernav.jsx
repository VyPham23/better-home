import React, { Component } from 'react';
import './uppernav.css';

function UpperNav (props) {
    return (
        <header>
            <nav className='left-nav'>
                <a href='/property'>Home</a>
                <a href='/property'>About Us</a>
                <a href='/property'>News</a>
                <a href='/property'>Contact</a>
            </nav>
        </header>
    );
}

export default UpperNav;