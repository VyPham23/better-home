import React from 'react'
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import RentaHouse from '../../components/RentAHouse/Rent';
import Footer from '../../components/Footer/footer';
import './RentaHouse.css'

function RentAHouse() {
  return (
    <div className='body_rentaHouse' style={ {overflowX: "hidden"} }>
      <UpperNav/>
      <Navbar/>
      <RentaHouse/>
      <Footer/>
    </div>
  )
}

export default RentAHouse
