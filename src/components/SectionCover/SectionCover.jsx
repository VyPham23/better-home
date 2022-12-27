import React from 'react';
import './sectioncover.css';

const SectionCover = ({nameSection, description, numApart, picture}) => {
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${picture})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <h2 className="mt-2 mb-4 banner-title">{nameSection}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rectangle">
                    <div className="card-body">
                        <div class="row">
                            <div class="col-md-2 col-lg-2 col-xl-2 prop-stat">
                                <span className="stat">{numApart}</span> <br/>
                                <span>Properties Available </span>
                            </div>
                            <div class="col-md-7 col-lg-7 col-xl-7 prop-des">
                                <span className="des">{description}</span>
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3 prop-all">
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