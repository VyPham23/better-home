import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import './Carousel.css';

function CarouselFadeExample(props) {

    const [sliderList, setSliderList] = useState([])

    /*get slider list*/
    useEffect(() => {
        const getSlider = async () => {
            const sliderFromServer = await fetchSlider()
            setSliderList(sliderFromServer)
        }
        getSlider()
    }, [])

    const fetchSlider = async () => {
        const url_slider_list = "http://localhost/admin_api/public/api/v1/home/sliders"
        const res = await fetch(url_slider_list)
        const data = await res.json()
        return data['data']
    }
    /*--------------*/

    return (
        <div id="slider">
            <Carousel fade>
                {sliderList.map((slider) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100 cr-img img-fluid"
                            src={slider.image_slider}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselFadeExample;