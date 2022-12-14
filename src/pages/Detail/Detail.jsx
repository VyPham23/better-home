import Navbar from '../../components/Header/Navbar/navbar';
import UpperNav from '../../components/Header/Navbar/uppernav';
import Footer from "../../components/Footer/footer";
import DetailDes from '../../components/Features/detaildes';
import FloatingButton from '../../components/FloatingButton/floatingbutton';

const Detail = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <UpperNav/>
            <Navbar/>
            <DetailDes/>
            <FloatingButton/>
            <Footer/>
        </div>
    );
};

export default Detail;