import Logo from './logo.jpg';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (

    <header style={{ overflow: "hidden" }} className='main-nav'>
      <div className='left-nav col-lg-5 col-md-5 col-5'>
        <Link
        to={'/servicefor_HouseOwner'}>
          Service House Owner
        </Link>
        <Link
        to={'/real_este'}>
          Real Estate Business
        </Link>
      </div>
      <div className='logo col-lg-2 col-md-2 col-2'>
        <Link
        to={'/'}>
          <img src={Logo} alt='logo'/>
        </Link>
      </div>
      <div className='right-nav col-lg-5 col-md-5 col-5'>
        <Link
        to={'/buy_a_house'}>
          Buy House
        </Link>
        <Link
        to={'/rent_a_house'}>
          Rent House
        </Link>
        <Link
        to={'/service_apartment'}>
          Service Apartment
        </Link>
      </div>
    </header>

  );
}

export default Navbar;