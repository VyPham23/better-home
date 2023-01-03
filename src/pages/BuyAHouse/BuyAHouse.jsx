import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from '../../components/Footer/footer';
import BuyAHouseArea from '../../components/BuyAHouse/BuyAHouse';
import './BuyaHouse.css'
import FloatingButton from '../../components/FloatingButton/floatingbutton';

function BuyAHouse() {
  return (
    <div className='main_BuyaHouse' style={{ overflowX: "hidden" }}>
      <UpperNav />
      <Navbar />
      <BuyAHouseArea />
      <FloatingButton/>
      <Footer />
    </div>
  )
}

export default BuyAHouse
