import React from 'react';
import back from './27.png';
import './footer.css';

const ContactCover = () => {
    return (
        <div className="banner_footer d-flex align-items-center" style={{ backgroundImage: `url(${back})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>We supply the best apartment service for human</p>
                                <h2 className="contact-title mt-2 mb-4">Need For Apartment Service</h2>
                            </div>
                            <div>
                                <button className="contact-btn">
                                    <a className='button_nav_home' href="/contact">Contact Us</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCover;