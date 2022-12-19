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
            <Card.Img src="./images/anh4.jpg" alt="Card image"/>
            <Card.ImgOverlay>
              <Card.Title><h5 className='text'>Contact Us</h5></Card.Title>
              <Card.Text><p className='news'>Anytime, anywhere, with superior quality products, we are with you at every moment</p></Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
      <Row className='mt-5'></Row>
        <Row>
          <Col xs='1'></Col>
          <Col xs='5' >
            <Card className='shadow  bg-gray rounded' style={{ width: '100%'}}>
              <Card.Img variant="top" style={{ height: '25rem' }} src="./images/anh3.png" />
              <Button className='bg-green' style={{width: '60%'}}>Name</Button>
              <Card.Body>
                <Row className='mt-3'></Row>
                  <p><i className='bi bi-whatsapp' style={{ fontSize: 30 }}/>     https://www.whatsapp.com/</p>
                  <p> <Image className='img1' src="./images/zalo.png" class="rounded float-left" alt="..."/>https://play.google.com/store/apps</p>
                  <p> <Image className='img2' src="./images/talk.png" class="rounded float-left" alt="..."/>https://www.kakaocorp.com/page/servicn</p>  
              </Card.Body>
            </Card>
            </Col>  {/* end col */}

            <Col xs='5'>
            <Card className='shadow  bg-gray rounded' style={{ width: '100%' }}>
              <Card.Img variant="top" style={{ height: '25rem' }} src="./images/anh2.jpg" />
              <Button className='bg-green' style={{width: '60%'}}>Name</Button>
              <Card.Body>
                <Row className='mt-3'></Row>
                <p><i className='bi bi-whatsapp' style={{ fontSize: 30 }}/>     https://www.whatsapp.com/</p>
                  <p> <Image className='img1' src="./images/zalo.png" class="rounded float-left" alt="..."/>https://play.google.com/store/apps</p>
                  <p> <Image className='img2' src="./images/talk.png" class="rounded float-left" alt="..."/>https://www.kakaocorp.com/page/servicn</p>   
              </Card.Body>
            </Card>
            </Col>  {/* end col */}
            <Col xs='1'></Col>
        </Row>{/* end row */}
        <Row className='mt-5'></Row>

       
        {/* <Row>
            <div className="intro_button">
                <button className="navbutton"><i class="bi bi-geo-alt" style={{fontSize: 20}}></i> <br/>Room 302, Saigon Pearl Office Building, 
                <br/> 92C Nguyen Huu Canh St, 
                <br/> Binh Thanh District, Ho Chi Minh City, VietNam</button>
                <button className="navbutton" ><i class="bi bi-telephone" style={{fontSize: 20}}></i><br/>(+84) 090. 453.234</button>
                <button className="navbutton"><i class="bi bi-envelope-paper" style={{fontSize: 20}}></i><br/>betterhomesinvest@gmail.com</button>
            </div>
        </Row> */}
      </Container>
    </div>
  )
}
