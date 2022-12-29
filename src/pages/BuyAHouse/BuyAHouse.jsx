import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from '../../components/Footer/footer';
import RentaHouse from '../../components/RentAHouse/Rent';
import './BuyaHouse.css'

function BuyAHouse() {
  return (
    <div className='main_BuyaHouse' style={{ overflowX: "hidden" }}>
      <UpperNav />
      <Navbar />
      {/* banner map */}
      <RentaHouse />
      <Footer />
    </div>
  )
}

export default BuyAHouse
