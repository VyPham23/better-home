import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from '../../components/Footer/footer';
import './ServiceForApartment.css'
import ServiceApart from '../../components/ServiceApartment/ServiceApar';
import FloatingButton from '../../components/FloatingButton/floatingbutton';

function ServiceforApart() {
  return (
    <div className='main_serviceApart' style={ {overflowX: "hidden"} }>
      <UpperNav/>
      <Navbar/>
      <ServiceApart/>
      <FloatingButton/>
      <Footer/>
    </div>
  )
}

export default ServiceforApart;
