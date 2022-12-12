import React from 'react';
import ClientSay from '../../components/AboutUs/ClientSay/ClientSay';
import IntroAboutUs from '../../components/AboutUs/IntroAboutUs/IntroAboutUs';
import WhyChooseUs from '../../components/AboutUs/ChooseUs/WhyChooseUs';
import UpperNav from '../../components/Header/UpperNav/uppernav';
import Navbar from '../../components/Header/Navbar/navbar';

function AboutUs() {
  return (
    <div>
      <UpperNav/>
      <Navbar/>
      <IntroAboutUs/>
      <WhyChooseUs/>
      <ClientSay/>
    </div>
  )
}

export default AboutUs