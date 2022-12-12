import React from "react";
import CarouselFadeExample from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Header/Navbar/navbar";
import UpperNav from "../../components/Header/UpperNav/uppernav";
import Intro from "../../components/Intro/intro";
import SectionCover from "../../components/Section Cover/sectioncover";
// import Product from "../../components/Product/product";

const Home = () => {
    return (
        <div className="homepage">
            <UpperNav/>
            <Navbar/>
            <CarouselFadeExample/>
            <Intro/>
            <SectionCover/>
            <Footer/>
        </div>
        
    );
};

export default Home;