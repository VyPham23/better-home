import React from 'react';
import './flatlist.css';
import './flatitem.css';
import product from "./product1.jpeg";

const FlatForSell = () => {
    return (
        <section className="section-all-re">
            <div className="container">
                <div className="row">
                    <div className="text-center col-lg-4 col-12 col-md-6">
                        <div className="item">
                            <div className="item-image">
                                <img className="img-fluid" src={product} alt="flat" />
                                <div className="item-price">
                                    <span>$3,950,000</span>
                                </div>
                                <div className="item-date">
                                    <span>12.12.2022</span>
                                </div>
                            </div>
                            <div className="item-description">
                                <div className="mb-3">
                                    <h4><a href="/">404 20th street, Manhattan Beach, CA</a></h4>
                                    <span >Residential, Condominium</span><br />
                                </div>
                                <div className="align-items-center item-detail">
                                    <div className="detail bed">1<br />bed</div>
                                    <div className="detail bath">2<br />baths</div>
                                    <div className="detail sqrt">1000<br />SQM</div>
                                    <div className="detail dom">2<br />doms</div>
                                </div>
                                <div className="align-items-center">
                                    <a href="/" className="item-title">
                                        <button className="btn" id="btn-detail">VIEW</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlatForSell;