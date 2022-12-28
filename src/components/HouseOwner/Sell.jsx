import { ArrowRightOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import './Sell.css';
import seviceImage1 from './service_HouseOwner.1.jpg'
import serviceImage2 from './service_HouseOwner.2.jpg'
import serviceImage3 from './service_HouseOwner.3..jpg'


const Sell = () => {
    return (
        <section>
            {/* SELL YOUR HOUSE */}
            <Row className='sellfHouseOwner' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={1} sm={1} md={1} lg={1} xl={2}>
                    <div className='greenLine' style={{ float: 'left' }}></div>
                </Col>
                <Col xs={23} sm={23} md={23} lg={10} xl={10}>
                    <div className="sellhouse_info">
                        <h1><span style={{ color: '#00908E' }}>Sell</span> Your House</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit orci, bibendum id malesuada sed,
                            elementum ac sem. Sed sem erat, placerat nec tellus vel, pretium auctor erat.
                            In bibendum tincidunt urna ac blandit. Sed aliquam vestibulum quam et sollicitudin.
                            Vivamus vehicula est nec molestie eleifend. Donec diam nisi, fermentum a tempus in, feugiat ut nunc.
                        </p>
                        <div className="button-moredetail">
                            <Button type="primary">Register
                                <ArrowRightOutlined className='icon_moredetail' />
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col className="imgSell" xs={23} sm={23} md={23} lg={12} xl={12}>
                    <img className='img-fluid' src={seviceImage1} alt='sellImage'></img>
                </Col>
            </Row>

            {/* Rent out your house */}

            <Row className='rentoutHouse' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="imgSell" xs={23} sm={23} md={23} lg={12} xl={12}>
                    <img className='img-fluid' src={seviceImage1} alt='rentOutmage'></img>
                </Col>
                <Col xs={23} sm={23} md={23} lg={10} xl={10}>
                    <div className="sellhouse_info" style={{ marginLeft: '40px' }}>
                        <h1><span style={{ color: '#00908E' }}>Rent Out</span> Your House</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit orci, bibendum id malesuada sed,
                            elementum ac sem. Sed sem erat, placerat nec tellus vel, pretium auctor erat.
                            In bibendum tincidunt urna ac blandit. Sed aliquam vestibulum quam et sollicitudin.
                            Vivamus vehicula est nec molestie eleifend. Donec diam nisi, fermentum a tempus in, feugiat ut nunc.
                        </p>
                        <div className="button-moredetail">
                            <Button type="primary">Register
                                <ArrowRightOutlined className='icon_moredetail' />
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={2}>
                    <div className='greenLine' style={{ float: 'right' }}></div>
                </Col>
            </Row>

            {/* manage service */}
            <h1 className='title_manage'><span style={{ color: '#00908E' }}>Manage</span> Service</h1>
            <Row className='sellfHouseOwner' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={1} sm={1} md={1} lg={2} xl={2}>
                    <div className='greenLine' style={{ float: 'left' }}></div>
                </Col>
                <Col xs={23} sm={23} md={11} lg={10} xl={10}>
                    <div className="sellhouse_info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit orci, bibendum id malesuada sed,
                            elementum ac sem. Sed sem erat, placerat nec tellus vel, pretium auctor erat.
                            In bibendum tincidunt urna ac blandit. Sed aliquam vestibulum quam et sollicitudin.
                            Vivamus vehicula est nec molestie eleifend. Donec diam nisi, fermentum a tempus in, feugiat ut nunc.
                        </p>
                        <div className="button-moredetail">
                            <Button type="primary">Register
                                <ArrowRightOutlined className='icon_moredetail' />
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col className='image_manage' xs={24} sm={24} md={12} lg={10} xl={10}>
                    <img className='img-fluid' src={serviceImage3} alt='manageImage'></img>
                </Col>
            </Row>


        </section>



    );
}

export default Sell;