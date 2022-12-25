import React from 'react'
import './Contact.css'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


export default function BodyContact() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Card className="bg-dark text-white">
            <Card.Img src="./images/anh4.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title><h5 className='text_contact'>Contact Us</h5></Card.Title>
              <Card.Text><p className='news_contact'>Anytime, anywhere, with superior quality products, we are with you at every moment</p></Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
      <Row className='mt-5'></Row>
        <Row className='person_buttons_contact'>
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={5} lg="4" className='button_contact1'>
            <Card className='shadow  bg-gray rounded' style={{ width: '100%'}}>
              <Card.Img variant="top" style={{ height: '25rem' }} src="./images/anh3.png" />
              <Button className='bg-green' style={{width: '60%'}}>Name</Button>
              <Card.Body>
                <Row className='mt-3'></Row>
                <Row className='text_buttons_contact'>
                  <Col><Image className='img1' src="./images/whatsapp.png" class="rounded float-left" alt="..."/></Col>
                  <Col><p className='text_contact1'>https://play.google.com/store/apps</p></Col>
                </Row>{/* end row */}
                <Row>
                  <Col><Image className='img2' src="./images/zalo.png" class="rounded float-left" alt="..."/></Col>
                  <Col><p className='text_contact2'> https://play.google.com/store/apps</p></Col>
                  </Row>{/* end row */}
                <Row>
                  <Col><Image className='img3' src="./images/talk.png" class="rounded float-left" alt="..."/></Col>
                  <Col><p className='text_contact3'> https://play.google.com/store/apps</p></Col>
                  </Row>{/* end row */}
              </Card.Body>
            </Card>
            </Col>  {/* end col */}
            
            <Col xs={12} md={5} lg="4" className='button_contact1'>
            <Card className='shadow  bg-gray rounded' style={{ width: '100%'}}>
              <Card.Img variant="top" style={{ height: '25rem' }} src="./images/anh2.jpg" />
              <Button className='bg-green' style={{width: '60%'}}>Name</Button>
              <Card.Body>
                <Row className='mt-3'></Row>
                <Row>
                  <Col><Image className='img1' src="./images/whatsapp.png" class="rounded float-left" alt="..."/></Col>
                  <Col><p className='text_contact1'>https://play.google.com/store/apps</p></Col>
                </Row>{/* end row */}
                <Row>
                  <Col><Image className='img2' src="./images/zalo.png" class="rounded float-left" alt="..."/></Col>
                  <Col><p className='text_contact2'> https://play.google.com/store/apps</p></Col>
                  </Row>{/* end row */}
                <Row>
                  <Col><Image className='img3' src="./images/talk.png" class="rounded float-left" alt="..."/></Col>
                  <Col><p className='text_contact3'> https://play.google.com/store/apps</p></Col>
                  </Row>{/* end row */}
              </Card.Body>
            </Card>
            </Col>  {/* end col */}
            <Col xs={12} md={1}></Col>
        </Row>{/* end row */}
        <Row className='mt-5'></Row>
      </Container>
    </div>
  )
}
