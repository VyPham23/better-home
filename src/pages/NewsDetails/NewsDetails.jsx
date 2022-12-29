import React from 'react'
import Footer from '../../components/Footer/footer';
import Navbar from "../../components/Header/Navbar/navbar";
import UpperNav from "../../components/Header/Navbar/uppernav";
import News_Details from '../../components/News/News_Details';


function NewsDetails() {
  return (
    <div>
        <UpperNav />
        <Navbar />
        <News_Details/>
        <Footer/>

    </div>
  )
}

export default NewsDetails
