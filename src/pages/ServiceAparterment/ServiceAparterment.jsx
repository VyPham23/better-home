import React from 'react'
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from '../../components/Footer/footer';
import ServiceApar from '../../components/ServiceAparterment/ServiceApar';

function ServiceAparterment() {
  return (
    <div>
      <UpperNav/>
      <Navbar/>
      <ServiceApar/>
      <Footer/>
    </div>
  )
}

export default ServiceAparterment
