import React from 'react'
import './ServiceApar.css'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Row, Col,} from 'antd';

export default function ServiceApar() {
  return (
    <div>
      <Container>
      <Row className='mt-5'></Row>
        <Row className='sellfHouseOwner' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <div className='greenLine' style={{float:'left'}}></div>
                    </Col>
                    <Col  xs={23} sm={23} md={11} lg={11} xl={10}>
                        <div className="sellhouse_info">
                            <h1><span style={{color:'#00908E'}}>Sell</span> Your House</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit orci, bibendum id malesuada sed, 
                                elementum ac sem. Sed sem erat, placerat nec tellus vel, pretium auctor erat. 
                                In bibendum tincidunt urna ac blandit. Sed aliquam vestibulum quam et sollicitudin. 
                                Vivamus vehicula est nec molestie eleifend. Donec diam nisi, fermentum a tempus in, feugiat ut nunc.
                            </p>
                        </div>
                    </Col>
                    <Col className="imgSell" xs={24} sm={24} md={12} lg={12} xl={13}>
                        <img src="./images/service_HouseOwner.1.jpg" alt='sellImage'></img>
                    </Col>
                </Row>{/* end row */}
        <Row className='mt-5'></Row>
        <Row>
            <Col xs={1} ><button className='buttonsRent' >Large button</button></Col>
            
        </Row>
        <Row className='mt-5'></Row>
        <Row className='text-center'>
            <Col xs={24} md={8} >
                <Card className="shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img className='imgrent' src="./images/anh5.jpg" alt="Card image"/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}

            <Col xs={24} md={8}>
                <Card  className=" shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img src="./images/anh8.jpg" alt="Card image" className='imgrent'/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}
            <Col xs={24} md={8}>
                <Card className="shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img src="./images/anh6.jpg" alt="Card image" className='imgrent'/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}
        </Row>{/* end row */}
        <Row>
            <Col><h5 className='readmore'>READ MORE <i class="bi bi-arrow-right"></i></h5></Col>
        </Row>
        <Row>
        <Col xs={1}><button className='buttonsRent' >Large button</button></Col>
        </Row>
        <Row className='mt-5'></Row>
        <Row>
            <Col xs={24} md={8}>
                <Card className="shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img className='imgrent' src="./images/anh5.jpg" alt="Card image"/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}

            <Col xs={24} md={8}>
                <Card className=" shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img src="./images/anh8.jpg" alt="Card image" className='imgrent'/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}
            <Col xs={24} md={8}>
                <Card className="shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img src="./images/anh6.jpg" alt="Card image" className='imgrent'/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}
        </Row>{/* end row */}
        <Row>
            <Col xs={24} md={8}>
                <Card className="shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img className='imgrent' src="./images/anh5.jpg" alt="Card image"/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}

            <Col xs={24} md={8}>
                <Card className=" shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img src="./images/anh8.jpg" alt="Card image" className='imgrent'/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}
            <Col xs={24} md={8}>
                <Card className="shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img src="./images/anh6.jpg" alt="Card image" className='imgrent'/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}
        </Row>{/* end row */}
        <Row>
            <Col><h5 className='readmore'>READ MORE <i class="bi bi-arrow-right"></i></h5></Col>
        </Row>
      </Container>
    </div>
  )
}
