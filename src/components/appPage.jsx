import React from 'react';
import Navbar from './navbar';
import './appPage.css';

function AppPage(props) {
    return (
        <div id='apppage'>
            <Navbar/>
            <div id='opentext'>
                <span>Real Estate<br/>
                &nbsp;&nbsp; Without<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Hassle</span>
            </div>
        </div>
    );
}

export default AppPage;