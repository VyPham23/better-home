import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import AppPage from './components/appPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import News from './pages/News/News';
import RentAHouse from './pages/RentAHouse/RentAHouse';
import BuyAHouse from './pages/BuyAHouse/BuyAHouse';
import HouseOwner from './pages/ServiceforHouseOwner/HouseOwner';
import ServiceforApart from './pages/ServiceForApartment/ServiceForApartment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<AppPage/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/rent_a_house' element={<RentAHouse/>}/>
            <Route path='/buy_a_house' element={<BuyAHouse/>}/>
            <Route path='/service_apartment' element={<ServiceforApart/>}/>
            <Route path='/servicefor_HouseOwner' element={<HouseOwner/>}/>
            <Route path='/detail' element={<Detail/>}/>
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
