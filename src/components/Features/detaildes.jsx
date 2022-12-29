import BedImg from './100-bed.png';
import BathImg from './102-bath.png';
import SqftImg from './101-sqft.png'
import Calendar from './calendar.png'

/*ICON AREA*/
import internet from './Icon_Features/internet.png'
import television from './Icon_Features/television.png'
import telephone from './Icon_Features/phone.png'

import refrigerator from './Icon_Features/refrigerator.png'
import air_condition from './Icon_Features/air_condition.png'
import water from './Icon_Features/water.png'

import balcony from './Icon_Features/balcony.png'
import power from './Icon_Features/power.png'
import security from './Icon_Features/security.png'

import parking from './Icon_Features/parking.png'
import store from './Icon_Features/store.png'
import garden from './Icon_Features/garden.png'

import pool from './Icon_Features/pool.png'
import furnishture from './Icon_Features/house.png'
import gym from './Icon_Features/gym.png'

/*---------*/
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import apartment from './product1.jpeg';
import './features.css';

const DetailDes = () => {
    return (
        <div className='details_apartment_area pb-5'>
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

            <div className='features_area'>
                <div className='row feature_title'>
                    <span>FEATURES</span>
                </div>
                <div className="row features_item pb-4">
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={internet} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Internet</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={television} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Cable Television</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={telephone} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Telephone</span>
                    </div>

                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={refrigerator} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Refrigerator</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={air_condition} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Air Condition</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={water} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Water Heater</span>
                    </div>

                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={balcony} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Balcony</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={power} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>General Power</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={security} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Security 24/24</span>
                    </div>

                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={parking} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Parking</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={store} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Convenient Store 24/24</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={garden} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Garden</span>
                    </div>

                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={pool} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Swimming Pool</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={furnishture} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>Fully Furnished</span>
                    </div>
                    <div className='col-4 col-lg-4 col-md-4'>
                        <img className='icon_details' src={gym} alt="feature-item" />
                        &nbsp; <span className='feature_item_name'>GYM</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailDes;