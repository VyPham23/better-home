import React from 'react';
import './service.css';
import ServiceItem from './serviceitem';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';

const ServiceList = () => {
    return (
        <section className="section-all-re">
            <div className="container">
                <div className='row'>
                    <ServiceItem name="SALE YOUR HOUSE" picture={pic1} />
                    <ServiceItem name="RENT OUT YOUR HOUSE" picture={pic2} />
                    <ServiceItem name="APARTMENT MANAGEMENT SERVICE" picture={pic3} />
                    <ServiceItem name="INTERIOR DESIGN" picture={pic4} />
                </div>
            </div>
        </section>

    );
};

export default ServiceList;