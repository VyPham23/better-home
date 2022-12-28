import React from 'react'
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from '../../components/Footer/footer';
import RentaHouse from '../../components/RentAHouse/Rent';
import './BuyaHouse.css'
import MapbannerRent from '../../components/RentAHouse/MapRent';

function BuyAHouse() {
  return (
    <div className='main_BuyaHouse' style={{ overflowX: "hidden" }}>
      <UpperNav />
      <Navbar />
      {/* banner map */}
      <div className="mapbanner">
        <MapbannerRent />
      </div>
      <RentaHouse />
      <Footer />
    </div>
  )
}

export default BuyAHouse
