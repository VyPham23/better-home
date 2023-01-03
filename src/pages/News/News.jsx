import React from 'react'
import ButtonsNews from '../../components/News/ButtonsNews';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import FloatingButton from '../../components/FloatingButton/floatingbutton';

function News() {
  return (
    <div>
      <UpperNav/>
      <Navbar/>
      <ButtonsNews/>
      <FloatingButton/>
      <Footer/>
    </div>
  )
}

export default News
