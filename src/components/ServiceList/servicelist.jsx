import React from 'react';
import './service.css';
import ServiceItem from './serviceitem';

const ServiceList = () => {
    return (
        <section className="section-all-re">
            <div className="container">
                {/* <Title title={title.text} description={title.description} /> */}
                <div className="row">
                    <ServiceItem name="SALE YOUR HOUSE"/>
                    <ServiceItem name="RENT OUT YOUR HOUSE"/>
                    <ServiceItem name="APARTMENT MANAGEMENT SERVICE"/>
                    <ServiceItem name="INTERIOR DESIGN"/>
                </div>
            </div>
        </section>
    
    );
};

export default ServiceList;