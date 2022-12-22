import React from 'react';
import './flatitem.css';
import product from "./product1.jpeg";

const FlatItem = () => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src={product} alt="flat" />
                    <div className="item-price">
                        <span>$3,950,000</span>
                    </div>
                </div>
                <div className="item-description">
                    <div className="mb-3">
                        <h4><a href="/">404 20th street, Manhattan Beach, CA</a></h4>
                        <span >Residential, Condominium</span><br/>
                        {/* className="item-title" */}
                        {/* className="item-price" */}
                    </div>
                    <div className="align-items-center item-detail">
                        <div className="detail bed">1<br/>bed</div>
                        <div className="detail bath">2<br/>baths</div>
                        <div className="detail sqrt">1000<br/>SQM</div>
                        <div className="detail dom">2<br/>doms</div>
                    </div>
                    <div className="align-items-center">
                        {/* d-flex alig-items-center justify-content-between */}
                        <a href="/" className="item-title">
                            <button className="btn" id="btn-detail">VIEW</button>
                        </a>
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