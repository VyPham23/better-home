import BodyContact from '../../components/Contact/BodyContact';
import ButtonsContact from '../../components/Contact/ButtonsContact';
import FloatingButton from '../../components/FloatingButton/floatingbutton';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';

function Contact() {
  return (
    <div style={{ overflowX: "hidden" }}>
        <UpperNav/>
        <Navbar/>
        <BodyContact/>
        <ButtonsContact/>
        <FloatingButton/>
        <Footer/>
    </div>
  )
}

export default Contact
