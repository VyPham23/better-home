import React from 'react'
import ButtonsNews from '../../components/News/ButtonsNews';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';

function News() {
  return (
    <div>
        <UpperNav/>
      <Navbar/>
      <ButtonsNews/>
      <Footer/>

    </div>
  )
}

export default News
