import React from 'react';
import { Col, Row } from 'antd';
import './IntroAboutUs.css';
import aboutUs_1 from './aboutUs_1.jpg';
import aboutUs_2 from './aboutUs_2.jpg';

const IntroAboutUs = () =>{
    return(
        <main className='IntroAbout'>
            {/* intro 2 */}
            <Row span={12} className='aboutUs_main'>
                <Col span={12} className="aboutText">
                    <Row>
                        <Col xs={10} sm={8} md={8} lg={6} xl={4}>
                            <h1 className='title_aboutus'>ABOUT US</h1>
                        </Col>
                        <Col xs={24} sm={16} md={16} lg={18} xl={20}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed velit orci, bibendum id malesuada sed, elementum ac sem. Sed sem erat, placerat nec tellus vel, pretium auctor erat. 
                                In bibendum tincidunt urna ac blandit. 
                                Sed aliquam vestibulum quam et sollicitudin. 
                                Vivamus vehicula est nec molestie eleifend. 
                                <br></br><br></br>
                                In bibendum tincidunt urna ac blandit. 
                                Sed aliquam vestibulum quam et sollicitudin. 
                                Vivamus vehicula est nec molestie eleifend. 
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className='aboutImage'>
                    <img src={aboutUs_1} alt='aboutUsImg1'></img>
                </Col>
            </Row><br></br>


            {/* intro 2 */}
            <Row span={12} className='aboutUs_main'>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className='aboutImage'>
                    <img src={aboutUs_2} alt='aboutUsImg2'></img>
                </Col>
                
                <Col span={12} className="aboutText">
                    <Row>
                        <Col xs={16} sm={16} md={16} lg={18} xl={20}>
                            <p style={{marginLeft:"15px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed velit orci, bibendum id malesuada sed, elementum ac sem. Sed sem erat, placerat nec tellus vel, pretium auctor erat. 
                                In bibendum tincidunt urna ac blandit. 
                                Sed aliquam vestibulum quam et sollicitudin. 
                                Vivamus vehicula est nec molestie eleifend. 
                                <br></br><br></br>
                                In bibendum tincidunt urna ac blandit. 
                                Sed aliquam vestibulum quam et sollicitudin. 
                                Vivamus vehicula est nec molestie eleifend. 
                            </p>
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={6} xl={4}>
                            <h1 className='title_aboutUs_2'>ABOUT US</h1>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </main>
    );
}
  

export default IntroAboutUs