import React from 'react'
import { Container } from 'react-bootstrap'
import './Contact.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ButtonsContact() {
  return (
    <div className='buttons_contact'>
      <h2 id='title1'  >Get in touch</h2>
      <p id='title2' className='text-center'>Anytime, anywhere, with superior quality products, we are with you at every moment</p>
      <Container>
      <Row className='mt-5'></Row>
        <Row className="intro_button_1">
          <Col xs={12} md={4}> <button className="intro_button_2"><i class="bi bi-geo-alt" style={{fontSize: 20}}></i> <br/>Room 302, Saigon Pearl Office Building, 
        <br/> 92C Nguyen Huu Canh St, 
        <br/> Binh Thanh District, Ho Chi Minh City, VietNam</button></Col>
        <Col xs={12} md={4}> <button className="intro_button_2"><i class="bi bi-telephone" style={{fontSize: 20}}></i><br/>(+84) 090. 453.234</button></Col>
        <Col xs={12} md={4}> <button className="intro_button_2"><i class="bi bi-envelope-open" style={{fontSize: 20}}></i><br/>betterhomesinvest@gmail.com</button></Col>
        </Row>
      </Container>
    </div>
    
  )
}
