import React from 'react';
import CarouselFadeExample from '../../components/Carousel/Carousel';
import Features from '../../components/Features/features';
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from "../../components/Footer/footer";

const Detail = () => {
    return (
        <div>
            <UpperNav/>
            <Navbar/>
            <CarouselFadeExample/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Detail;