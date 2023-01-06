import BedImg from './100-bed.png';
import BathImg from './102-bath.png';
import SqftImg from './101-sqft.png'
import House from './house.png'

/*---------*/
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import apartment from './product1.jpeg';
import './features.css';

import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";

const DetailDes = () => {

    const { id } = useParams()
    const url_apart_by_id = "https://api.betterhomes.site/public/api/v1/details/" + id

    /*all property of apart for rent*/
    const [projectName, setProjectName] = useState("")
    const [apartCode, setApartCode] = useState("")
    const [purpose, setPurpose] = useState("")
    const [price, setPrice] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")

    const [numBed, setNumBed] = useState("")
    const [numPath, setNumPath] = useState("")
    const [sqft, setSQFT] = useState("")
    const [type, setType] = useState("")
    const [yearBuild, setYearBuild] = useState("")
    const [parking, setParking] = useState("")
    const [heating, setHeating] = useState("")
    const [lot, setLot] = useState("")

    const [featureList, setFeatureList] = useState([])

    const [imagesList, setImagesList] = useState([])

    /*------------------------------*/

    /*get apartment for rent by id*/
    useEffect(() => {
        const getApartForRentByID = async () => {
            const apartForRentFromServer = await fetchApartForRent()
            setProjectName(apartForRentFromServer["apart_infor"][0]["project_name"])
            setApartCode(apartForRentFromServer["apart_infor"][0]["apartment_code"])
            setPurpose(apartForRentFromServer["apart_infor"][0]["purpose"])
            setPrice(numberWithCommas(apartForRentFromServer["apart_infor"][0]["price"]))
            setAddress(apartForRentFromServer["apart_infor"][0]["address"])
            setDescription(apartForRentFromServer["apart_infor"][0]["description"])

            setNumBed(apartForRentFromServer["apart_infor"][0]['num_beds'])
            setNumPath(apartForRentFromServer["apart_infor"][0]['num_baths'])
            setSQFT(apartForRentFromServer["apart_infor"][0]['sqft'])
            setType(apartForRentFromServer["apart_infor"][0]['type'])
            setYearBuild(apartForRentFromServer["apart_infor"][0]['year_built'])
            setParking(apartForRentFromServer["apart_infor"][0]['parking'])
            setHeating(apartForRentFromServer["apart_infor"][0]['heating'])
            setLot(apartForRentFromServer["apart_infor"][0]['lot'])

            setFeatureList(apartForRentFromServer["features_infor"])

            setImagesList(apartForRentFromServer["images_infor"])
        }
        getApartForRentByID()
    }, [])

    const fetchApartForRent = async () => {
        const res = await fetch(url_apart_by_id)
        const data = await res.json()
        return data['data']
    }
    /*--------------*/

    /*formating data*/
    function numberWithCommas(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function getIcon(icon) {
        return icon.toLowerCase().replaceAll('/', '_').replaceAll(' ', '_')
    }
    /*------------------*/

    /*format carousel button*/
    const ref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1)

    const onPrevClick = () => {
        if (currentIndex !== 1) {
            setCurrentIndex(currentIndex - 1)
            ref.current.prev();
        }
    };
    const onNextClick = () => {
        if (currentIndex === imagesList.length) {
            setCurrentIndex(1)
        }
        else {
            setCurrentIndex(currentIndex + 1)
        }
        ref.current.next();
    };
    /*------------------*/

    return (
        <div className='details_apartment_area pb-5'>
            <div className='slider_area'>
                <Carousel
                    ref={ref}
                    fade>
                    {imagesList.map((image) => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100 cr-img img-fluid"
                                src={image.image_description}
                                alt="apartment-image"
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div class="row in_slider_area">
                    <div className='col-lg-4 col-md-12 col-12 in_slider_display'>
                        <img className='icon_details' src={House} alt="item" />
                        <span>{apartCode}</span>
                    </div>
                    <div className='col-lg-4 col-md-12 col-12 not_display'>
                    </div>
                    <div className='col-lg-4 col-md-12 col-12 in_slider_display in_slider_display_photo'>
                        <span>Photos</span>
                        <span className='button_pagination_area'>
                            <button
                                onClick={onPrevClick}
                                className='button_pagination'>&lt;</button>
                            {currentIndex} / {imagesList.length}
                            <button
                                onClick={onNextClick}
                                className='button_pagination'>&gt;</button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row in_slider_display_responsive">
                <div className='col-lg-4 col-md-12 col-12 in_slider_display in_slider_display_photo'>
                    <span>Photos</span>
                    <span className='button_pagination_area'>
                        <button
                            onClick={onPrevClick}
                            className='button_pagination'>&lt;</button>
                        {currentIndex} / {imagesList.length}
                        <button
                            onClick={onNextClick}
                            className='button_pagination'>&gt;</button>
                    </span>
                </div>

                <div className='col-lg-4 col-md-12 col-12 not_display'>
                </div>

                <div className='col-lg-4 col-md-12 col-12 in_slider_display'>
                    <img className='icon_details' src={House} alt="item" />
                    <span>{apartCode}</span>
                </div>
            </div>

            <div className="row apart_detail_area">
                <div className="apart_detail_area_left col-lg-3 col-md-12 col-12">
                    <div className="apart_detail_area_left_block">
                        <span>
                            {purpose === 'for_rent' ? "FOR RENT" : <>
                                {purpose === 'for_sell' ? "FOR SELL" : "SERVICE APARTMENT"}
                            </>}
                        </span>
                        <p>{price} VND</p>
                    </div>
                </div>
                <div className="apart_detail_area_middle col-lg-6 col-md-12 col-12">
                    <div className='apart_name' style={{ textAlign: "justify" }}>
                        <span>
                            {projectName}, {address}
                        </span>
                    </div>
                    <div className='apart_detail_icon_infor'>
                        <span className='title_icon'>
                            <img className='icon_details' src={BedImg} alt="detail_icon" /> BEDS
                            &nbsp; <span className='number'>{numBed}</span>
                        </span>
                        <span className='title_icon'>
                            <img className='icon_details' src={BathImg} alt="detail_icon" /> BATHS
                            &nbsp; <span className='number'>{numPath}</span>
                        </span>
                        <span className='title_icon'>
                            <img className='icon_details' src={SqftImg} alt="detail_icon" /> SQFT
                            &nbsp; <span className='number'>{sqft}</span>
                        </span>
                    </div>
                    <div style={{ textAlign: "justify" }}>
                        <span className='apart_description' >
                            {description}
                        </span>
                    </div>
                </div>
                <div className="apart_detail_area_right col-lg-3 col-md-12 col-12">
                    <div style={{ textAlign: "justify" }} className="row apart_detail_area_right_1">
                        <div>
                            <span>TYPE</span>
                            <p>{type}</p>
                        </div>
                        <div>
                            <span>PARKING</span>
                            <p>{parking}</p>
                        </div>
                    </div>
                    <div style={{ textAlign: "justify" }} className="row apart_detail_area_right_2">
                        <div>
                            <span>YEAR BUILT</span>
                            <p>{yearBuild}</p>
                        </div>
                        <div>
                            <span>LOT</span>
                            <p>{lot}</p>
                        </div>
                    </div>
                    <div className="row apart_detail_area_right_3" style={{ textAlign: "justify" }}>
                        <div>
                            <span>HEATING</span>
                            <p>{heating}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='features_area'>
                <div className='row feature_title'>
                    <span>FEATURES</span>
                </div>
                <div className="row features_item pb-4">
                    {featureList.map((feature) => (
                        <div className='col-4 col-lg-4 col-md-4'>
                            <img className='icon_details' src={`/images/Icon_Features/${getIcon(feature.feature_name)}.png`} alt="feature-item" />
                            &nbsp; <span className='feature_item_name'>{feature.feature_name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailDes;