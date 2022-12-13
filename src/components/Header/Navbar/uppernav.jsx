import React from 'react';
import './navbar.css';


function UpperNav (props) {    
    return (
        <header>
            <nav className='upper-nav'>
                <div className='left-nav'>
                    <a href='/'>Home</a>
                    <a href='/about'>About Us</a>
                </div>
                <div className='left-nav'>
                    <a href='/news'>News</a>
                    <a href='/contact'>Contact</a>
                </div>
                
            </nav>
        </header>
        
    );
}

export default UpperNav;