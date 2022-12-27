import React from 'react'
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import RentaHouse from '../../components/RentAHouse/Rent';
import Footer from '../../components/Footer/footer';
import './RentaHouse.css'
import MapbannerRent from '../../components/RentAHouse/MapRent';

function RentAHouse() {
  return (
    <div className='body_rentaHouse'>
      <UpperNav/>
      <Navbar/>
      {/* banner map */}
      <div className="mapbanner">
        <MapbannerRent/>
      </div>
      <RentaHouse/>
      <Footer/>
    </div>
  )
}

export default RentAHouse
