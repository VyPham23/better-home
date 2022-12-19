import React from 'react'
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from '../../components/Footer/footer';
import Buy from '../../components/BuyAHouse/Buy';

function BuyAHouse() {
  return (
    <div>
      <UpperNav/>
      <Navbar/>
      <Buy/>
      <Footer/>
    </div>
  )
}

export default BuyAHouse
