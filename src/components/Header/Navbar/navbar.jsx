import React from 'react';
import Logo from './logo.jpg';
import './navbar.css';

function Navbar(props) {
    return (
        
        <header>
          <nav className='left-nav'>
            <a href='/property'>Service For House Owner</a>
            <a href='/property'>Real Estate For Business</a>
          </nav>
          <div className='logo'>
            <a href='/'><img src={Logo} style={{ height: '70px' }} alt='' /></a>
          </div>
          <nav className='right-nav'>
            <a href='/property'>Buy A House</a>
            <a href='/property'>Rent A House</a>
            <a href='/property' className='nav-item-removed'>Service Apartment</a>
          </nav>
        </header>

    );
}

export default Navbar;