import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import AppPage from './components/appPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Details from './pages/Detail/Detail';
import News from './pages/News/News';
import RealEste from './pages/RealEste/RealEste';
import RentAHouse from './pages/RentAHouse/RentAHouse';
import BuyAHouse from './pages/BuyAHouse/BuyAHouse';
import HouseOwner from './pages/ServiceHouseOwner/HouseOwner';
import ServiceforApart from './pages/ServiceApartment/ServiceForApartment';
import NewsDetails from './pages/NewsDetails/NewsDetails';
import ReactGa  from 'react-ga';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    ReactGa.initialize("UA-253557742-1")
    ReactGa.pageview('/')
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<AppPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/rent_a_house' element={<RentAHouse />} />
          <Route path='/buy_a_house' element={<BuyAHouse />} />
          <Route path='/real_este' element={<RealEste />} />
          <Route path='/service_apartment' element={<ServiceforApart />} />
          <Route path='/servicefor_HouseOwner' element={<HouseOwner />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/news_details/:id' element={<NewsDetails />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
