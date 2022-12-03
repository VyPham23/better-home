import React from "react";
import CarouselFadeExample from "../../components/Header/Carousel/Carousel";
import Navbar from "../../components/Header/Navbar/navbar";
import UpperNav from "../../components/Header/UpperNav/uppernav";

const Home = () => {
    return (
        <div className="homepage">
            <UpperNav/>
            <Navbar/>
            <CarouselFadeExample/>
        </div>
        
    );
};

export default Home;