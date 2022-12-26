import React from "react";
import BlackSection from "../../components/Blackbox/blacksection";
import CarouselFadeExample from "../../components/Carousel/Carousel";
import FlatList from "../../components/FlatList/flatlist";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Header/Navbar/navbar";
import UpperNav from "../../components/Header/Navbar/uppernav";
import Intro from "../../components/Intro/intro";
import NewsList from "../../components/News/newslist";
import SectionCover from "../../components/Section Cover/sectioncover";
import ServiceList from "../../components/ServiceList/servicelist";
// import Product from "../../components/Product/product";

const Home = () => {
    return (
        <div>
            <UpperNav/>
            <Navbar/>
            <CarouselFadeExample/>
            <BlackSection/>
            <Intro/>
            <SectionCover text="Rent A House"/>
            <FlatList/>
            
            <SectionCover text="Buy A House"/>
            <FlatList/>
            <SectionCover text="Service Apartment"/>
            <FlatList/>
            <SectionCover text="Services for House Owner"/>
            <ServiceList/>
            <NewsList/>
            <Footer/>
            
        </div>
        
    );
};

export default Home;