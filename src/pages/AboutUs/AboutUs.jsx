import ClientSay from '../../components/AboutUs/ClientSay/ClientSay';
import IntroAboutUs from '../../components/AboutUs/IntroAboutUs/IntroAboutUs';
import WhyChooseUs from '../../components/AboutUs/ChooseUs/WhyChooseUs';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Navbar from '../../components/Header/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import './AboutUs.css'
import FloatingButton from '../../components/FloatingButton/floatingbutton';

function AboutUs() {
  return (
    <div style={{overflowX : "hidden"}} className='Aboutus_mainpage' >
      <UpperNav/>
      <Navbar/>

      <IntroAboutUs/>
      <WhyChooseUs/>
      
      <ClientSay/>
      <FloatingButton/>
      <Footer/>
    </div>
  )
}

export default AboutUs