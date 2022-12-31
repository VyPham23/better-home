import { useState, useEffect } from 'react';
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

import SectionCover from "../../components/SectionCover/SectionCover";
import ServiceList from "../../components/ServiceList/servicelist";

import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';

const Home = () => {

    const [description, setDescription] = useState("Hermosa Beach is a beachfront city in Los Angeles County in the U.S. state of California, United States. Its population was 19,728 at the 2020 U.S. Census. The city is located in the South Bay region of the Greater Los Angeles area; it is one of the three Beach Cities.")
    const [numApart, setNumApart] = useState(0)

    return (
        <div style={{ overflowX: "hidden" }}>
            <UpperNav />
            <Navbar />
            <CarouselFadeExample />

            <BlackSection />
            <Intro />

            <SectionCover
                nameSection="Rent A House"
                description={description}
                numApart={100}
                picture={pic1}
                path={'/rent_a_house'} />
            <FlatForRent />

            <SectionCover
                nameSection="Buy A House"
                description={description}
                numApart={200}
                picture={pic2}
                path={'/buy_a_house'} />
            <FlatForSell />

            <SectionCover
                nameSection="Service Apartment"
                description={description}
                numApart={150}
                picture={pic3}
                path={'/service_apartment'} />
            <ServiceApart />

            <SectionCover
                nameSection="Service House Owner"
                description={description}
                numApart={120}
                picture={pic4}
                path={'/servicefor_houseowner'} />
            <ServiceList />

            <NewsList />
            <Footer />

        </div>

    );
};

export default Home;