import React from 'react'
import './Contact.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

export default function BodyContact() {
  return (
    <div>
      <Row className='mt-5'></Row>
      <div className='contact-area'>
        <Col xs={12} md={1}></Col>

        <div className='row col-lg-10 col-md-10 col-12 contact-block'>
          <div className='col-lg-5 col-md-10 col-12 box'>
            <Card className='shadow  bg-gray rounded' style={{ width: '100%' }}>
              <div className="contact-top">
                <img className='image-contact-ava' src="./images/anh3.png" alt="image-contact" />
                <div className='contact-name'>Trần Đông Giang</div>
              </div>
              <div className='box-contact'>
                <div className='row contact_details'>
                  <Col><Image className='img1' src="./images/whatsapp.png" class="rounded float-left" alt="..." /></Col>
                  <Col><p className='text_contact_details'>0905 934 981</p></Col>
                </div>{/* end row */}
                <div className='row contact_details'>
                  <Col><Image className='img1' src="./images/zalo.png" class="rounded float-left" alt="..." /></Col>
                  <Col><p className='text_contact_details'>0905 934 981</p></Col>
                </div>{/* end row */}
                <div className='row contact_details'>
                  <Col><Image className='img1' src="./images/talk.png" class="rounded float-left" alt="..." /></Col>
                  <Col><p className='text_contact_details'>0905 934 981</p></Col>
                </div>{/* end row */}
              </div>
            </Card>
          </div>

          <div className='col-lg-5 col-md-10 col-12 box'>
            <Card className='shadow  bg-gray rounded' style={{ width: '100%' }}>
              <div className="contact-top">
                <img className='image-contact-ava' src="./images/anh2.jpg" alt="image-contact" />
                <div className='contact-name'>Trần Văn A</div>
              </div>
              <div className='box-contact'>
                <div className='row contact_details'>
                  <Col><Image className='img1' src="./images/whatsapp.png" class="rounded float-left" alt="..." /></Col>
                  <Col><p className='text_contact_details'>0905 934 981</p></Col>
                </div>{/* end row */}
                <div className='row contact_details'>
                  <Col><Image className='img1' src="./images/zalo.png" class="rounded float-left" alt="..." /></Col>
                  <Col><p className='text_contact_details'>0905 934 981</p></Col>
                </div>{/* end row */}
                <div className='row contact_details'>
                  <Col><Image className='img1' src="./images/talk.png" class="rounded float-left" alt="..." /></Col>
                  <Col><p className='text_contact_details'>0905 934 981</p></Col>
                </div>{/* end row */}
              </div>
            </Card>
          </div>
        </div>

        <Col xs={12} md={1}></Col>
      </div>
      <Row className='mt-5'></Row>
    </div>
  )
}
