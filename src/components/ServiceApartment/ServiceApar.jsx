import { ArrowRightOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import seviceImage1 from './service_HouseOwner.1.jpg'

const ServiceApart = () => {
    return(
        <main style={{marginBottom:'80px'}}>
            {/* SELL YOUR HOUSE */}
            <Row className='sellfHouseOwner' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={1} sm={1} md={1} lg={1} xl={2}>
                    <div className='greenLine' style={{float:'left'}}></div>
                </Col>
                <Col  xs={23} sm={23} md={11} lg={11} xl={9}>
                    <div className="sellhouse_info">
                        <h1><span style={{color:'#00908E'}}>Sell</span> Your House</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit orci, bibendum id malesuada sed, 
                            elementum ac sem. Sed sem erat, placerat nec tellus vel, pretium auctor erat. 
                            In bibendum tincidunt urna ac blandit. Sed aliquam vestibulum quam et sollicitudin. 
                            Vivamus vehicula est nec molestie eleifend. Donec diam nisi, fermentum a tempus in, feugiat ut nunc.
                        </p>
                        <div className="button-moredetail">
                            <Button type="primary">Register
                                <ArrowRightOutlined className='icon_moredetail'/>
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col className="imgSell" xs={24} sm={24} md={12} lg={12} xl={13}>
                    <img src={seviceImage1} alt='sellImage'></img>
                </Col>
            </Row>
        </main>
    );
}
export default ServiceApart;