import React from 'react';
import ClientSay from '../../components/AboutUs/ClientSay/ClientSay';
import IntroAboutUs from '../../components/AboutUs/IntroAboutUs/IntroAboutUs';
import WhyChooseUs from '../../components/AboutUs/ChooseUs/WhyChooseUs';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Navbar from '../../components/Header/Navbar/navbar';
import Footer from '../../components/Footer/footer';

function AboutUs() {
  return (
    <div>
      <UpperNav/>
      <Navbar/>
      <IntroAboutUs/>
      <WhyChooseUs/>
      <ClientSay/>
      <Footer/>
    </div>
  )
}

export default AboutUs