import React from "react";
import CarouselFadeExample from "../../components/Carousel/Carousel";
import FlatList from "../../components/FlatList/flatlist";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Header/Navbar/navbar";
import UpperNav from "../../components/Header/Navbar/uppernav";
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
            <SectionCover text="Rent A House"/>
            <FlatList/>
            <SectionCover text="Buy A House"/>
            <FlatList/>
            <SectionCover text="Service Apartment"/>
            <FlatList/>
            <SectionCover text="Service for House Owner"/>
            <Footer/>
            
        </div>
        
    );
};

export default Home;