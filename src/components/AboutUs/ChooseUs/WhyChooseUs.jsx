import React from 'react';
import { Col, Row } from 'antd';
import './WhyChooseUs.css'
import NumberChooseUs from './NumberChooseUs';
import WhyChoose_img1 from './WhyChoose_img1.png'


const WhyChooseUs = () => {
  return (
    <section className='ChooseUs'>
        <NumberChooseUs/>
        <h1 className='title_chooseUs'>
            Why Choose <span style={{color:'#00908E'}}>Us</span> 
        </h1>
        <Row justify="center">
            <Col span={10} className='list_chooseUs'>
                <ul>
                    <li>Experience And Passion About Real Estate</li>
                    <li>Individual and Creative Approach</li>
                    <li>The Lastest Technologies </li>
                </ul>
            </Col>
            <Col span={10}>
                <img src={WhyChoose_img1} alt='WhyChoose_img' className='WhyChoose_img1 img-fluid'></img>
            </Col>
        </Row>  


    </section>
  )
}

export default WhyChooseUs



