import React from 'react';
import './sectioncover.css';
import back from './27.png';

const SectionCover = ({ text }) => {
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${back})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <h2 className="mt-2 mb-4 banner-title"> { text } </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rectangle">
                    <div className="card-body">
                        <div class="row">
                            <div class="col-md-12 col-lg-2 col-xl-2 prop-stat">
                                <span className="stat">123 <br/> Properties Available </span>
                            </div>
                            <div class="col-md-0 col-lg-7 col-xl-7 prop-des">
                                <span className="des">Hermosa Beach is a beachfront city in Los Angeles County in the U.S. state of California, United States. 
                                    Its population was 19,728 at the 2020 U.S. Census. 
                                    The city is located in the South Bay region of the Greater Los Angeles area; it is one of the three Beach Cities.</span>
                            </div>
                            <div class="col-md-12 col-lg-3 col-xl-3 prop-all">
                                <a href="/">
                                    <button className="btn" id="all-btn">VIEW ALL</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;