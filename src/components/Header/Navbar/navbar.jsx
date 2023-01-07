import Logo from './logo.jpg';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className='nav_bar_area w-100'>
      <div className="nav_bar_list">
        <div className="nav_left">
          <Link
            to={'/servicefor_houseowner'}>
            Service House Owner
          </Link>
          <Link
            to={'/real_este'}>
            Real Estate Business
          </Link>
        </div>
        <div className="nav_middle">
          <Link
            to={'/'}>
            <img className='img-fluid image_logo' src={Logo} alt='logo' />
          </Link>
        </div>
        <div className="nav_right">
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
      </div>
    </div>
  );
}

export default Navbar;