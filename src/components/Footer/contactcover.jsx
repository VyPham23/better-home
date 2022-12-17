import React from 'react';
import back from './27.png';
import './footer.css';

const ContactCover = () => {
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${back})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h2 className="mt-2 mb-4 banner-title">Need for IT Solution Service</h2>
                            </div>
                            <div>
                                <button className="contact-btn">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCover;