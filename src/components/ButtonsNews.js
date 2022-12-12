import React from 'react'
import '../components/Buttons.css'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination'; 

export default function ButtonsNews() {
  return (
    <div>
      <> 
    <section className='buttons'>
      <Container>
        <Row>
          <Col>
          <Card className='shadow  bg-white rounded' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="./images/anh1.jpg" />
            <Card.Body>
              <Card.Title className='text-right'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-5'></Row>
              <Row>
                <Col> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col><p>26 Nov.2022</p></Col>
              </Row>   
            </Card.Body>
          </Card>
          </Col>  {/* end col */}

          <Col>
          <Card className='shadow  bg-white rounded' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="./images/anh1.jpg" />
            <Card.Body>
              <Card.Title className='text-right'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-5'></Row>
              <Row>
                <Col> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col><p>26 Nov.2022</p></Col>
              </Row>   
            </Card.Body>
          </Card>
          </Col>{/* end col */}

          <Col>
          <Card className='shadow  bg-white rounded' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="./images/anh1.jpg" />
            <Card.Body>
              <Card.Title className='text-right'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-5'></Row>
              <Row>
                <Col> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col><p>26 Nov.2022</p></Col>
              </Row>   
            </Card.Body>
          </Card>
          </Col>{/* end col */}
        </Row>{/* end row */}

        <Row className='mt-5'></Row>

        <Row>
          <Col>
          <Card className='shadow  bg-white rounded' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="./images/anh1.jpg" />
            <Card.Body>
              <Card.Title className='text-right'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-5'></Row>
              <Row>
                <Col> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col><p>26 Nov.2022</p></Col>
              </Row>   
            </Card.Body>
          </Card>
          </Col>  {/* end col */}

          <Col>
          <Card className='shadow  bg-white rounded' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="./images/anh1.jpg" />
            <Card.Body>
              <Card.Title className='text-right'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-5'></Row>
              <Row>
                <Col> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col><p>26 Nov.2022</p></Col>
              </Row>   
            </Card.Body>
          </Card>
          </Col>{/* end col */}

          <Col>
          <Card className='shadow  bg-white rounded' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="./images/anh1.jpg" />
            <Card.Body>
              <Card.Title className='text-right'>Some quick example text to build on the card title and make up the
              </Card.Title>
              <Row className='mt-5'></Row>
              <Row>
                <Col> <p ><i className='bi bi-moon-stars'/>   20</p></Col>
                <Col><p><i class="bi bi-clock"> </i> 4 min</p></Col>
                <Col><p>26 Nov.2022</p></Col>
              </Row>   
            </Card.Body>
          </Card>
          </Col>{/* end col */}
        </Row>{/* end row */}

        <Row className='mt-5'></Row>

        <Row>
          <Pagination className='justify-content-center '>
            
            <Pagination.Prev style={{width: '4rem'}}  />
            <Col xs="6"></Col>
            <Pagination.Next style={{width: '4rem'}} />
           
          </Pagination>
        </Row>{/* end row */}
      </Container>
    </section>
    </>
    
    </div>
  )
}
