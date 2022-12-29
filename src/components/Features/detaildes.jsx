import React from 'react';
import BedImg from './100-bed.png';
import BathImg from './102-bath.png';
import SqftImg from './101-sqft.png'

const DetailDes = () => {
    return (
        <div className="des-container">
            {/* <div className="dt-body-0">
            </div> */}
            <div className="dt-body upper">
                <div class="row up-part">
                    <div class="col-md-0 col-lg-3 col-xl-3 left-side">
                        <span className="left-text">Photos</span>
                    </div>
                    <div class="col-md-0 col-lg-6 col-xl-6 middle-part">
                    </div>
                    <div class="col-md-12 col-lg-3 col-xl-3 right-side">
                        <div className="txt-ctn">
                            <span className="left-text">Schedule A Visit</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="dt-body">
                <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 dt-price">
                        <h4>For sale</h4> <br/> <p>$1,500,000</p>
                    </div>
                    <div class="col-md-12 col-lg-6 col-xl-6 dt-des">
                        <div class="row">
                            <div className="info"><h3>7983 Valmont Rd, Boulder, CO 80301</h3></div>
                        </div>                            
                        <div class="row">
                            <div className="col-md-4 col-lg-4 col-xl-4 basic-figure">
                                <img src={BedImg} alt=""/>
                                <span>Bed 4</span>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xl-4 basic-figure">
                                <img src={BathImg} alt=""/>
                                <span>Bath 4</span>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xl-4 basic-figure">
                                <img src={SqftImg} alt=""/>
                                <span>Sqft 3122</span>
                            </div>
                        </div>
                        <div className="description">
                        <span>Hermosa Beach is a beachfront city in Los Angeles County in the U.S. state of California, United States. 
                            Its population was 19,728 at the 2020 U.S. Census. 
                            The city is located in the South Bay region of the Greater Los Angeles area; it is one of the three Beach Cities.</span>
                        </div>
                        
                    </div>
                    <div class="col-md-12 col-lg-3 col-xl-3 dt-moreinfo">
                        <div class="row">
                            <div className="col-md-6 col-lg-6 type">
                                <div><h6>Type</h6></div>
                                <div><p>Single Family</p></div>
                            </div>
                            <div className="col-md-6 col-lg-6 type">
                                <div><h6>Park</h6></div>
                                <div><p>2 Spaces</p></div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-md-6 col-lg-6 type">
                                <div><h6>Built in</h6></div>
                                <div><p>2010</p></div>
                            </div>
                            <div className="col-md-6 col-lg-6 type">
                                <div><h6>Lot</h6></div>
                                <div><p>1.36 Acress</p></div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-md-6 col-lg-6 type">
                                <div><h6>Heating</h6></div>
                                <div><p>Ari Cooling</p></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailDes;