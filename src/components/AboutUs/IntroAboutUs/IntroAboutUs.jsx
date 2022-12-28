import React from 'react';
import { Col, Row } from 'antd';
import './IntroAboutUs.css';
import aboutUs_1 from './aboutUs_1.jpg';
import aboutUs_2 from './aboutUs_2.jpg';

const IntroAboutUs = () =>{
    return(
        <main style={{padding:'0px', margin:'0px'}}>
            {/* ABOUT us 1 */}
            <Row className='aboutUs_main' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={4} sm={4} md={2} lg={2} xl={2} className="aboutText">
                    <h1 className='title_aboutus'>ABOUT US</h1>
                </Col>

                <Col xs={19} sm={19} md={10} lg={11} xl={8} className='aboutTextP'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </Col>
                
                <Col xs={24} sm={24} md={12} lg={11} xl={14} className='aboutImage'>
                    <img className='img-fluid' src={aboutUs_1} alt='aboutUsImg1'></img>
                </Col>
            </Row>


            {/* intro 2 */}
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='aboutUs_main'>
                <Col xs={24} sm={24} md={12} lg={11} xl={14} className='aboutImage'>
                    <img className='img-fluid' src={aboutUs_2} alt='aboutUsImg2'></img>
                </Col>
                
                <Col xs={19} sm={19} md={10} lg={11} xl={8} className='aboutTextP'>
                    <p style={{marginLeft:"25px", marginTop:'20px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </Col>
                <Col xs={4} sm={4} md={2} lg={2} xl={2} className="aboutText">
                    <h1 className='title_aboutus_2'>ABOUT US</h1>
                </Col>
                    
                
            </Row>
        </main>
    );
}
  

export default IntroAboutUs