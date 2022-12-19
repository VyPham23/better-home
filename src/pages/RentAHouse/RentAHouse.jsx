import { Footer } from 'antd/es/layout/layout';
import React from 'react'
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Rent from '../../components/RentAHouse/Rent';

function RentAHouse() {
  return (
    <div>
      <UpperNav/>
      <Navbar/>
      <Rent/>
      <Footer/>
    </div>
  )
}

export default RentAHouse
