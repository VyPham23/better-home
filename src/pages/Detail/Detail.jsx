import React from 'react';
import CarouselFadeExample from '../../components/Carousel/Carousel';
import Features from '../../components/Features/features';
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from "../../components/Footer/footer";
import DetailDes from '../../components/Features/detaildes';

const Detail = () => {
    return (
        <div>
            <UpperNav/>
            <Navbar/>
            <CarouselFadeExample/>
            <DetailDes/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Detail;