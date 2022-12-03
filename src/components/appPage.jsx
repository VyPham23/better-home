import React from 'react';

import './appPage.css';
import CarouselFadeExample from './Header/Carousel/Carousel';
import Navbar from './Header/Navbar/navbar';
import UpperNav from './Header/UpperNav/uppernav';

function AppPage(props) {
    return (
        <div id='apppage'>
            <UpperNav/>
            <Navbar/>
            <CarouselFadeExample/>
        </div>
    );
}

export default AppPage;