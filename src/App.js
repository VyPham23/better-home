import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import AppPage from './components/appPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import RentAHouse from './pages/RentAHouse/RentAHouse';
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
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
