import React from 'react'
import './Buttons.css'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function ButtonsNews() {
  return (
    <div>
      <> 
    <section className='buttons'>
      <Container fluid>
      <Row>
          <Card className="bg-dark text-white">
          <Card.Img src="./images/anh4.jpg" alt="Card image"/>
          <Card.ImgOverlay>
            <Card.Title><h5 className='lastest'>Lastest News</h5></Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Row> {/* end row */}
      <Row className='mt-4'></Row>
        <Row className='all_buttons_news'>
          <Col xs={12} md={6} lg="4" className='buttons_news'>
          <Card className='shadow  bg-white rounded' >
            <Card.Img variant="top" src="./images/anh1.jpg" className='img_card_news'/>
            <Card.Body className='card_body_news'>
              <Card.Title className='card_title_news'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-4'></Row>
              <Row>
                <Col className='card_text_news' xs={6} md={2}> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col className='card_text_news' xs={6} md={4}><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col className='card_text_news' xs={6} md={6}><p>26 Nov.2022</p></Col>
              </Row>  
            </Card.Body>
          </Card>
          </Col>  {/* end col */}

          <Col xs={12} md={6} lg="4" className='buttons_news'>
          <Card className='shadow  bg-white rounded' >
            <Card.Img variant="top" src="./images/anh1.jpg" className='img_card_news'/>
            <Card.Body className='card_body_news'>
              <Card.Title className='card_title_news'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-4'></Row>
              <Row>
                <Col className='card_text_news' xs={6} md={2}> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col className='card_text_news' xs={6} md={4}><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col className='card_text_news' xs={6} md={6}><p>26 Nov.2022</p></Col>
              </Row>  
            </Card.Body>
          </Card>
          </Col>  {/* end col */}

          <Col xs={12} md={6} lg="4" className='buttons_news'>
          <Card className='shadow  bg-white rounded' >
            <Card.Img variant="top" src="./images/anh1.jpg" className='img_card_news'/>
            <Card.Body className='card_body_news'>
              <Card.Title className='card_title_news'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-4'></Row>
              <Row>
                <Col className='card_text_news' xs={6} md={2}> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col className='card_text_news' xs={6} md={4}><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col className='card_text_news' xs={6} md={6}><p>26 Nov.2022</p></Col>
              </Row>  
            </Card.Body>
          </Card>
          </Col>  {/* end col */}
        </Row>{/* end row */}

        <Row className='all_buttons_news'>
          <Col xs={12} md={6} lg="4" className='buttons_news'>
          <Card className='shadow  bg-white rounded' >
            <Card.Img variant="top" src="./images/anh1.jpg" className='img_card_news'/>
            <Card.Body className='card_body_news'>
              <Card.Title className='card_title_news'>Some quick example text
              </Card.Title>
              <Row className='mt-4'></Row>
              <Row>
                <Col className='card_text_news' xs={6} md={2}> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col className='card_text_news' xs={6} md={4}><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col className='card_text_news' xs={6} md={6}><p>26 Nov.2022</p></Col>
              </Row>  
            </Card.Body>
          </Card>
          </Col>  {/* end col */}

          <Col xs={12} md={6} lg="4" className='buttons_news'>
          <Card className='shadow  bg-white rounded' >
            <Card.Img variant="top" src="./images/anh1.jpg" className='img_card_news'/>
            <Card.Body className='card_body_news'>
              <Card.Title className='card_title_news'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-4'></Row>
              <Row>
                <Col className='card_text_news' xs={6} md={2}> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col className='card_text_news' xs={6} md={4}><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col className='card_text_news' xs={6} md={6}><p>26 Nov.2022</p></Col>
              </Row>  
            </Card.Body>
          </Card>
          </Col>  {/* end col */}

          <Col xs={12} md={6} lg="4" className='buttons_news'>
          <Card className='shadow  bg-white rounded' >
            <Card.Img variant="top" src="./images/anh1.jpg" className='img_card_news'/>
            <Card.Body className='card_body_news'>
              <Card.Title className='card_title_news'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-4'></Row>
              <Row>
                <Col className='card_text_news' xs={6} md={2}> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col className='card_text_news' xs={6} md={4}><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col className='card_text_news' xs={6} md={6}><p>26 Nov.2022</p></Col>
              </Row>  
            </Card.Body>
          </Card>
          </Col>  {/* end col */}
        </Row>{/* end row */}


        <Row >
          <div className="prevNext_news">
            <LeftOutlined className="left_news"/>
            <RightOutlined  className="right_news"/>
          </div>
        </Row>
      </Container>
    </section>
    </>
    </div>
  )
}
