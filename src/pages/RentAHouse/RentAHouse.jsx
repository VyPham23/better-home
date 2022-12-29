import React from 'react'
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import RentAHouseArea from '../../components/RentAHouse/RentAHouse';
import Footer from '../../components/Footer/footer';
import './RentaHouse.css'

function RentAHouse() {
  return (
    <div className='body_rentaHouse' style={ {overflowX: "hidden"} }>
      <UpperNav/>
      <Navbar/>
      <RentAHouseArea/>
      <Footer/>
    </div>
  )
}

export default RentAHouse
