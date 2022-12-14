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
                            <div class="col-md-12 col-lg-3 col-xl-3">
                            </div>
                            <div class="col-md-0 col-lg-6 col-xl-6">
                            </div>
                            <div class="col-md-12 col-lg-3 col-xl-3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;