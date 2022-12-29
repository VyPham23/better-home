import BedImg from './100-bed.png';
import BathImg from './102-bath.png';
import SqftImg from './101-sqft.png'
import Calendar from './calendar.png'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import apartment from './product1.jpeg';
import './features.css';

const DetailDes = () => {
    return (
        <div className='details_apartment_area'>
            <div className='slider_area'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 cr-img img-fluid"
                            src={apartment}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div class="row in_slider_area">
                    <div className='col-lg-4 col-md-12 col-12 in_slider_display in_slider_display_photo'>
                        <span>Photos</span>
                        <span className='button_pagination_area'>
                            <button className='button_pagination'>&lt;</button>
                            01 / 09
                            <button className='button_pagination'>&gt;</button>
                        </span>
                    </div>

                    <div className='col-lg-4 col-md-12 col-12 not_display'>
                    </div>

                    <div className='col-lg-4 col-md-12 col-12 in_slider_display'>
                        <img className='icon_details' src={Calendar} alt="item" />
                        <span>Schedule A Visit</span>
                    </div>
                </div>
            </div>
            <div class="row in_slider_display_responsive">
                <div className='col-lg-4 col-md-12 col-12 in_slider_display in_slider_display_photo'>
                    <span>Photos</span>
                    <span className='button_pagination_area'>
                        <button className='button_pagination'>&lt;</button>
                        01 / 09
                        <button className='button_pagination'>&gt;</button>
                    </span>
                </div>

                <div className='col-lg-4 col-md-12 col-12 not_display'>
                </div>

                <div className='col-lg-4 col-md-12 col-12 in_slider_display'>
                    <img className='icon_details' src={Calendar} alt="item" />
                    <span>Schedule A Visit</span>
                </div>
            </div>

            <div className="row apart_detail_area">
                <div className="apart_detail_area_left col-lg-3 col-md-12 col-12">
                    <div className="apart_detail_area_left_block">
                        <span>FOR SALE</span>
                        <p>$1,500,000</p>
                    </div>
                </div>
                <div className="apart_detail_area_middle col-lg-6 col-md-12 col-12">
                    <div className='apart_name' style={{ textAlign: "justify" }}>
                        <span>
                            7983 Valmont Rd, Boulder, CO 80301
                        </span>
                    </div>
                    <div className='apart_detail_icon_infor'>
                        <span className='title_icon'>
                            <img className='icon_details' src={BedImg} alt="detail_icon" /> BEDS
                            &nbsp; <span className='number'>4</span>
                        </span>
                        <span className='title_icon'>
                            <img className='icon_details' src={BathImg} alt="detail_icon" /> BATHS
                            &nbsp; <span className='number'>4</span>
                        </span>
                        <span className='title_icon'>
                            <img className='icon_details' src={SqftImg} alt="detail_icon" /> SQFT
                            &nbsp; <span className='number'>3.122</span>
                        </span>
                    </div>
                    <div style={{ textAlign: "justify" }}>
                        <span className='apart_description' >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquam quia iste possimus repudiandae provident quasi,
                            eveniet amet culpa aspernatur dolores facere voluptate excepturi
                            modi? Repellendus earum aliquam praesentium ab accusamus.
                        </span>
                    </div>
                </div>
                <div className="apart_detail_area_right col-lg-3 col-md-12 col-12">
                    <div style={{ textAlign: "justify" }} className="row apart_detail_area_right_1">
                        <div>
                            <span>TYPE</span>
                            <p>Single Family</p>
                        </div>
                        <div>
                            <span>PARKING</span>
                            <p>2 Spaces</p>
                        </div>
                    </div>
                    <div style={{ textAlign: "justify" }} className="row apart_detail_area_right_2">
                        <div>
                            <span>YEAR BUILT</span>
                            <p>2007</p>
                        </div>
                        <div>
                            <span>LOT</span>
                            <p>1.36 Acress</p>
                        </div>
                    </div>
                    <div className="row apart_detail_area_right_3" style={{ textAlign: "justify" }}>
                        <div>
                            <span>HEATING</span>
                            <p>Air Cooling</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="dt-body">
                <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 dt-price">
                        <h4>For sale</h4> <br /> <p>$1,500,000</p>
                    </div>
                    <div class="col-md-12 col-lg-6 col-xl-6 dt-des">
                        <div class="row">
                            <div className="info"><h3>7983 Valmont Rd, Boulder, CO 80301</h3></div>
                        </div>
                        <div class="row">
                            <div className="col-md-4 col-lg-4 col-xl-4 basic-figure">
                                <img src={BedImg} alt="" />
                                <span>Bed 4</span>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xl-4 basic-figure">
                                <img src={BathImg} alt="" />
                                <span>Bath 4</span>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xl-4 basic-figure">
                                <img src={SqftImg} alt="" />
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
                            <div className="col-lg-6 type">
                                <div><h6>Type</h6></div>
                                <div><p>Single Family</p></div>
                            </div>
                            <div className="col-lg-6 type">
                                <div><h6>Park</h6></div>
                                <div><p>2 Spaces</p></div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-lg-6 type">
                                <div><h6>Built in</h6></div>
                                <div><p>2010</p></div>
                            </div>
                            <div className="col-lg-6 type">
                                <div><h6>Lot</h6></div>
                                <div><p>1.36 Acress</p></div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-lg-6 type">
                                <div><h6>Heating</h6></div>
                                <div><p>Ari Cooling</p></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="ft-container">
                <div className="fd-item fd-features">
                    <div className="row ft-row">
                        <div className="col-lg-4">
                            <i className="fa fa-check"></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                    <div className="row ft-row">
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check"></i>
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                    <div className="row ft-row">
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                    <div className="row ft-row">
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                    <div className="row ft-row">
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="col-lg-4">
                            <i className="fa fa-check" ></i>
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default DetailDes;