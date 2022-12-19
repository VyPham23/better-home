import React from 'react'
import './Rent.css'
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Rent() {
  return (
    <div>
      <Container>
      <Row className='mt-5'></Row>
        <Row>
            <Image src="./Images/map.png"/>
        </Row>
        <Row className='mt-5'></Row>
        <Row>
            <Col xs={1} ><button className='buttonsRent' >Large button</button></Col>
            
        </Row>
        <Row className='mt-5'></Row>
        <Row className='text-center'>
            <Col xs={12} md={4} >
                <Card className="shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img className='imgrent' src="./images/anh5.jpg" alt="Card image"/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}

            <Col xs={12} md={4}>
                <Card  className=" shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img src="./images/anh8.jpg" alt="Card image" className='imgrent'/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}
            <Col xs={12} md={4}>
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
            <Col xs={12} md={4}>
                <Card className="shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img className='imgrent' src="./images/anh5.jpg" alt="Card image"/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}

            <Col xs={12} md={4}>
                <Card className=" shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img src="./images/anh8.jpg" alt="Card image" className='imgrent'/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}
            <Col xs={12} md={4}>
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
            <Col xs={12} md={4}>
                <Card className="shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img className='imgrent' src="./images/anh5.jpg" alt="Card image"/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}

            <Col xs={12} md={4}>
                <Card className=" shadow bg-gray rounded bg-dark text-white" style={{width: '85%', height: '70%'}}>
                    <Card.Img src="./images/anh8.jpg" alt="Card image" className='imgrent'/>
                    <Card.ImgOverlay>
                    <Card.Text><h5 className='func'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>{/* end card */}
            </Col>{/* end col */}
            <Col xs={12} md={4}>
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
