import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from '../../components/Footer/footer';
import RealEsteBusiness from '../../components/RealEsteBusiness/RealEsteBusiness';
import FloatingButton from '../../components/FloatingButton/floatingbutton';
const RealEste = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <UpperNav />
            <Navbar />
            <RealEsteBusiness />
            <FloatingButton/>
            <Footer />
        </div>
    )
}

export default RealEste