import React from 'react';
import { Col, Row } from 'antd';
import './WhyChooseUs.css'
import WhyChoose_img1 from './WhyChoose_img1.png'


const WhyChooseUs = () => {
    return (
        <section className='ChooseUs'>
            <h1 className='title_chooseUs'>
                Why Choose <span style={{ color: '#00908E' }}>Us</span>
            </h1>
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={10} md={10} lg={10} className='list_chooseUs'>
                    <div className='block_why_choose_us'>
                        <li>Experience And Passion About Real Estate</li>
                        <li>Individual and Creative Approach</li>
                        <li>The Lastest Technologies </li>
                    </div>
                </Col>
                <Col xs={24} sm={10} md={10} lg={10}>
                    <img src={WhyChoose_img1} alt='WhyChoose_img' className='WhyChoose_img1 img-fluid'></img>
                </Col>
            </Row>


        </section>
    )
}

export default WhyChooseUs



