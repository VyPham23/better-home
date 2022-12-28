import BodyContact from '../../components/Contact/BodyContact';
import ButtonsContact from '../../components/Contact/ButtonsContact';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';

function Contact() {
  return (
    <div>
        <UpperNav/>
        <Navbar/>
        <BodyContact/>
        <ButtonsContact/>
        <Footer/>
    </div>
  )
}

export default Contact
