import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BodyContact() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs='1'></Col>
        <Col xs='5'>
          <Card className='shadow  bg-gray rounded' style={{ width: '25rem'}}>
            <Card.Img variant="top" style={{ height: '25rem' }} src="./images/anh3.png" />
            <Button className='bg-green' style={{width: '250px'}}>Name</Button>
            <Card.Body>
              <Row className='mt-3'></Row>
                <p ><i className='bi bi-whatsapp' style={{ fontSize: 30 }}/>     https://www.whatsapp.com/</p>
                <p><Card.Img src="./images/zalo.png" style={{ width: '40px' }}/> https://play.google.com/store/apps</p>
                <p><Card.Img src="./images/talk.png" style={{ width: '40px' }}/>https://www.kakaocorp.com/page/servicn</p>  
            </Card.Body>
          </Card>
          </Col>  {/* end col */}

          <Col xs='5'>
          <Card className='shadow  bg-gray rounded' style={{ width: '25rem' }}>
            <Card.Img variant="top" style={{ height: '25rem' }} src="./images/anh2.jpg" />
            <Button className='bg-green' style={{width: '250px'}}>Name</Button>
            <Card.Body>
              <Row className='mt-3'></Row>
                <p ><i className='bi bi-whatsapp' style={{ fontSize: 30 }}/>     https://www.whatsapp.com/</p>
                <p><Card.Img src="./images/zalo.png" style={{ width: '40px' }}/> https://play.google.com/store/apps</p>
                <p><Card.Img src="./images/talk.png" style={{ width: '40px' }}/>https://www.kakaocorp.com/page/servicn</p>  
            </Card.Body>
          </Card>
          </Col>  {/* end col */}
          <Col xs='1'></Col>
        </Row>{/* end row */}

        <Row className='mt-5'></Row>

        <Row>
          <h5 className='text-center' >Get in tough</h5>
        </Row>

        <Row className='mt-3'></Row>

        <Row>
          <p className='text-center'>Anytime, anywhere, with superior quality products, we are with you at every moment</p>
        </Row>

        
      </Container>
    </div>
  )
}
