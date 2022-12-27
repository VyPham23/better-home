import Logo from './logo.jpg';
import './navbar.css';

function Navbar(props) {
  return (

    <header style={{ overflow: "hidden" }} className='main-nav'>
      <div className='left-nav col-lg-5 col-md-5 col-5'>
        <a href='/servicefor_HouseOwner'>Service For House Owner</a>
        <a href='/property'>Real Estate For Business</a>
      </div>
      <div className='logo col-lg-2 col-md-2 col-2'>
        <a href='/'><img src={Logo} alt='' /></a>
      </div>
      <div className='right-nav col-lg-5 col-md-5 col-5'>
        <a href='/buy_a_house'>Buy A House</a>
        <a href='/rent_a_house'>Rent A House</a>
        <a href='/service_apartment' className='nav-item-removed'>Service Apartment</a>
      </div>
    </header>

  );
}

export default Navbar;