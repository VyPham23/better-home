import React from 'react'
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from '../../components/Footer/footer';
import './ServiceForApartment.css'
import ServiceApart from '../../components/ServiceApartment/ServiceApar';
import RentaHouse from '../../components/RentAHouse/Rent';


function ServiceforApart() {
  return (
    <div className='main_serviceApart'>
      <UpperNav/>
      <Navbar/>
      <ServiceApart/>
      <RentaHouse className='rentaHouse_service'/>
      <Footer/>
    </div>
  )
}

export default ServiceforApart;
