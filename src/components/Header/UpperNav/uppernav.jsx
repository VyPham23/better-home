import React from 'react';
import './uppernav.css';


function UpperNav (props) {    
    return (
        <header>
            <nav className='left-nav'>
                <a href='/'>Home</a>
                <a href='/about'>About Us</a>
                <a href='/news'>News</a>
                <a href='/contact'>Contact</a>
            </nav>
        </header>
        
    );
}

export default UpperNav;