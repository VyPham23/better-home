import React from "react";
import { Col, Row, Card, Button,  } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import ImgRent1 from './rentaHouse1.jpg'
import ImgRent2 from './rentaHouse2.jpg'
import ImgRent3 from './rentaHouse3.jpg'
import Dropdowntitle from "./DropdownTitle";
import './Rent.css'

const RentaHouse = () =>{               
    return(
        <section className="Rentahouse_sec">
            <div className="Funvin">
                {/* title 1  */}
                <div className="title_address">
                    <h6>FUN VIN PEALR</h6> 
                </div>
                {/* posts */}
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="cardHouse_main">
                    <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                        <Card hoverable className="card_house"
                            cover={<img alt="house1" src={ImgRent1} />}
                        >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                        </Card>
                    </Col>

                    <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                        <Card hoverable className="card_house"
                            cover={<img alt="house2" src={ImgRent2}/>}
                        >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                        </Card>
                    </Col>

                    <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                        <Card hoverable className="card_house"
                            cover={<img alt="house3" src={ImgRent3} />}
                        >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                        </Card>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col span={6}>
                        <div className="button-readMore">
                            <Button type="primary">READ MORE
                                <ArrowRightOutlined className='icon_readMore'/>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="Vinhouse_info">
                <div className="dropdown_title">
                    <Dropdowntitle className='dropdown_element'/>
                </div>

                {/* display posts */}
                <div className="Funvin">
                    {/* 3 post */}
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="cardHouse_main">
                        <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                            <Card hoverable className="card_house"
                                cover={<img alt="house1" src={ImgRent1} />}
                            >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                            </Card>
                        </Col>

                        <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                            <Card hoverable className="card_house"
                                cover={<img alt="house2" src={ImgRent2}/>}
                            >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                            </Card>
                        </Col>

                        <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                            <Card hoverable className="card_house"
                                cover={<img alt="house3" src={ImgRent3} />}
                            >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                            </Card>
                        </Col>
                    </Row>

                    {/* 3post */}
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="cardHouse_main">
                        <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                            <Card hoverable className="card_house"
                                cover={<img alt="house1" src={ImgRent1} />}
                            >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                            </Card>
                        </Col>

                        <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                            <Card hoverable className="card_house"
                                cover={<img alt="house2" src={ImgRent2}/>}
                            >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                            </Card>
                        </Col>

                        <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                            <Card hoverable className="card_house"
                                cover={<img alt="house3" src={ImgRent3} />}
                            >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                            </Card>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Col span={6}>
                            <div className="button-readMore">
                                <Button type="primary">READ MORE
                                    <ArrowRightOutlined className='icon_readMore'/>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            

            


            
            



        </section>
    );
}

export default RentaHouse;