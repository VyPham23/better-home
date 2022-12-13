import React from 'react';
import './flatitem.css';
import {Link} from "react-router-dom";
import product from "./product1.jpeg";

const FlatItem = () => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src={product} alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                        <span className="item-price">$1000</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>Lorem ipsum dolor</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> Lorem </span>
                        </div>
                        <Link className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
                // <div className="best-estate-content">
                //     <h4><Link to="/">Lorem Ipsum</Link></h4>
                //     <span><Link to="/">Lorem Ipsum</Link></span>
                // </div>
                // <div className="best-estate-features">
                //     <div className="d-flex">
                //         <div className="best-estate-feature">
                //             <i className="fas fa-check-circle"></i>
                //             <span>3 Beds</span>
                //         </div>
                //         <div className="best-estate-feature">
                //             <i className="fas fa-check-circle"></i>
                //             <span>2 Bathrooms</span>
                //         </div>
                //     </div>
                //     <h5 className="best-estate-price">$650</h5>
                // </div>
            

export default FlatItem;