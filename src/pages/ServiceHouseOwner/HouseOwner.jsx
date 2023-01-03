import Sell from "../../components/HouseOwner/Sell";
import './HouseOwner.css'
import UpperNav from "../../components/Header/Navbar/uppernav";
import Navbar from '../../components/Header/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import FloatingButton from "../../components/FloatingButton/floatingbutton";


function HouseOwner(){
    return(
        <div style={ {overflowX: "hidden"} }>
            <UpperNav/>
            <Navbar/>
            <Sell/>
            <FloatingButton/>
            <Footer/>
        </div>
    );
}

export default HouseOwner;