import React from 'react';
import Logo from './logo.jpg';
import './navbar.css';

function Navbar(props) {
    return (
        
        <header className='main-nav'>
          <div className='left-nav'>
            <a href='/serviceForHouseOwner'>Service For House Owner</a>
            <a href='/property'>Real Estate For Business</a>
          </div>
          <div className='logo'>
            <a href='/'><img src={Logo} alt='' /></a>
          </div>
          <div className='right-nav'>
            <a href='/buy_a_house'>Buy A House</a>
            <a href='/rent_a_house'>Rent A House</a>
            <a href='/service_apartment' className='nav-item-removed'>Service Apartment</a>
          </div>
        </header>

    );
}

export default Navbar;