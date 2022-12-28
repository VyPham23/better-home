import React from 'react';
import './service.css';

const ServiceItem = ({name, picture}) => {
    return (
        <div className="text-center col-lg-3 col-12 col-md-6">
            <div className="sv">
                <div className="sv-image">
                    <img className="img-fluid" src={picture} alt="flat" />
                </div>
                <div className="sv-description">
                    <div className="mb-3 sv-text">
                        <p><a href="/"> {name} </a></p>
                        {/* className="item-title" */}
                        {/* className="item-price" */}
                    </div>
                    <div className="align-items-center">
                        {/* d-flex alig-items-center justify-content-between */}
                        <a href="/" className="item-title">
                            <button className="btn" id="btn-detail">REGISTER</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;