import Sell from "../../components/HouseOwner/Sell";
import './HouseOwner.css'
import UpperNav from "../../components/Header/Navbar/uppernav";
import Navbar from '../../components/Header/Navbar/navbar';
import Footer from '../../components/Footer/footer';


function HouseOwner(){
    return(
        <>
            <UpperNav/>
            <Navbar/>
            <Sell/>
            <Footer/>
        </>

    );
}

export default HouseOwner;