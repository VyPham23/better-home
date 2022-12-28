import React from 'react';
import './blacksection.css';
import Pic1 from './46.png';
import Pic2 from './47.png';

const BlackSection = () => {
    return (
        <div className="black">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 agn">
                    <div className="black-pic">
                        <i class="bi bi-calendar-check"></i>
                    </div>
                    <div className="txt-area">
                        <h4>Our Agent</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, labore.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 cpn">
                    <div className="black-pic">
                        <i class="bi bi-house-door"></i>
                    </div>
                    <div className="txt-area">
                        <h4>Our Company</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, labore.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlackSection;