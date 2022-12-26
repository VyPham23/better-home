import BlackSection from "../../components/Blackbox/blacksection";
import CarouselFadeExample from "../../components/Carousel/Carousel";

import FlatForRent from "../../components/FlatList/FlatForRent";
import FlatForSell from "../../components/FlatList/FlatForSell";
import ServiceApart from "../../components/FlatList/ServiceApart";

import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Header/Navbar/navbar";
import UpperNav from "../../components/Header/Navbar/uppernav";
import Intro from "../../components/Intro/intro";
import NewsList from "../../components/News/newslist";

import SectionServiceOwner from "../../components/SectionCover/SectionServiceOwner";
import SectionForRent from "../../components/SectionCover/SectionForRent";
import SectionForSell from "../../components/SectionCover/SectionForSell";
import SectionServiceApart from "../../components/SectionCover/SectionServiceApart";

import ServiceList from "../../components/ServiceList/servicelist";
// import Product from "../../components/Product/product";

const Home = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <UpperNav/>
            <Navbar/>
            <CarouselFadeExample/>
            <BlackSection/>
            <Intro/>

            <SectionForRent/>
            <FlatForRent/>

            <SectionForSell/>
            <FlatForSell/>

            <SectionServiceApart/>
            <ServiceApart/>

            <SectionServiceOwner/>
            <ServiceList/>

            <NewsList/>
            <Footer/>
            
        </div>
        
    );
};

export default Home;