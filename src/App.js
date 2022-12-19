import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import AppPage from './components/appPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import RentAHouse from './pages/RentAHouse/RentAHouse';
import BuyAHouse from './pages/BuyAHouse/BuyAHouse';
import ServiceAparterment from './pages/ServiceAparterment/ServiceAparterment';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<AppPage/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/property' element={<RentAHouse/>}/>
            <Route path='/property' element={<BuyAHouse/>}/>
            <Route path='/property' element={<ServiceAparterment/>}/>
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
