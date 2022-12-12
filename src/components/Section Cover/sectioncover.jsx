import React from 'react';
import './sectioncover.css';
import back from './27.png';

const SectionCover = () => {
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${back})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <h2 className="mt-2 mb-4 banner-title">Rent A House </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;