import React from "react";
import CarouselFadeExample from "../../components/Carousel/Carousel";
import Navbar from "../../components/Header/Navbar/navbar";
import UpperNav from "../../components/Header/UpperNav/uppernav";
import Intro from "../../components/Intro/intro";

const Home = () => {
    return (
        <div className="homepage">
            <UpperNav/>
            <Navbar/>
            <CarouselFadeExample/>
            <Intro/>
        </div>
        
    );
};

export default Home;