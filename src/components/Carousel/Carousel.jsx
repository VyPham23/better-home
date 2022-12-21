import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo1 from './photo-1560448204-e02f11c3d0e2.jpg';
import photo2 from './photo-1565402170291-8491f14678db.jpg';
import photo3 from './photo-1582407947304-fd86f028f716.jpg';
import './Carousel.css';

function CarouselFadeExample(props) {
    return (
        <div id="slider">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 cr-img"
                        src={photo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 cr-img"
                        src={photo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 cr-img"
                        src={photo3}
                        alt="Third slide"

                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselFadeExample;