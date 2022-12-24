import React from 'react';
import './intro.css';

function Intro(props) {
    return (
        <div className="intro">
            <div className="intro_container">
                <h2 id="title">Real Estate for Business</h2>
                <div className="intro_button">
                    <button className="navbutton">Shop House or <br/>Business Location</button>
                    <button className="navbutton">Office for Rent</button>
                    <button className="navbutton">Co-working Space</button>
                </div>
            </div>
        </div>
    );
}

export default Intro