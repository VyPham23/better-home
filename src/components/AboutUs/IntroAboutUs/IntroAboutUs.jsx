import React from 'react';
import { Col, Row } from 'antd';
import './IntroAboutUs.css';
import aboutUs_1 from './aboutUs_1.jpg';
import aboutUs_2 from './aboutUs_2.jpg';

const IntroAboutUs = () =>{
    return(
        <main style={{padding:'0px', margin:'0px'}}>
            {/* ABOUT us 1 */}
            <Row className='aboutUs_main firts_about_main' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={4} sm={4} md={2} lg={2} xl={2} className="aboutText">
                    <h2 className='title_aboutus'>ABOUT US</h2>
                </Col>

                <Col xs={19} sm={19} md={10} lg={12} xl={12} className='aboutTextP'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book.
                    </p>
                </Col>
                
                <Col xs={12} sm={12} md={12} lg={10} xl={10} className='aboutImage'>
                    <img className='img-fluid' src={aboutUs_1} alt='aboutUsImg1'></img>
                </Col>

                <Col xs={12} sm={12} md={12} lg={10} xl={10} className='aboutImage small_screen_image_2'>
                    <img className='img-fluid' src={aboutUs_2} alt='aboutUsImg2'></img>
                </Col>
            </Row>

            {/* intro 2 */}
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='aboutUs_main mt-2'>
                <Col xs={24} sm={24} md={12} lg={10} xl={10} className='aboutImage large_image_2'>
                    <img className='img-fluid' src={aboutUs_2} alt='aboutUsImg2'></img>
                </Col>
                
                <Col xs={19} sm={19} md={10} lg={12} xl={12} className='aboutTextP second_about_main'>
                    <p style={{marginLeft:"25px", marginTop:'20px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <p style={{marginLeft:"25px", marginTop:'20px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.
                    </p>
                </Col>
                <Col xs={4} sm={4} md={2} lg={2} xl={2} className="aboutText">
                    <h2 className='title_aboutus_2'>ABOUT US</h2>
                </Col>
                    
                
            </Row>
        </main>
    );
}
  

export default IntroAboutUs