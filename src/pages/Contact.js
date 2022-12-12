import React from 'react'
import BodyContact from '../components/Contact/BodyContact';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Header/Navbar/navbar';
import UpperNav from '../components/Header/UpperNav/uppernav';




function Contact() {
  return (
    <div>
        <UpperNav/>
        <Navbar/>
        <BodyContact/>
        <Footer/>
    </div>
  )
}

export default Contact
