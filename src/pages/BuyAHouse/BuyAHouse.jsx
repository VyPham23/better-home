import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from '../../components/Footer/footer';
import BuyAHouseArea from '../../components/BuyAHouse/BuyAHouse';
import './BuyaHouse.css'

function BuyAHouse() {
  return (
    <div className='main_BuyaHouse' style={{ overflowX: "hidden" }}>
      <UpperNav />
      <Navbar />
      <BuyAHouseArea />
      <Footer />
    </div>
  )
}

export default BuyAHouse
