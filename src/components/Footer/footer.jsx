import ContactCover from './contactcover';
import './footer.css';

const Footer = () => {
    return (
        <section className="footer">

            <ContactCover />

            <div className="container mt-5">
                <div className="row">

                    <div className="block-infor col-lg-4 col-md-6 col-6">
                        <div className="footer-title d-flex">
                            <i className="fas fa-home"></i><p>&nbsp; Better Home</p>
                        </div>

                        <ul className="footer-ul">
                            <li className="d-flex">
                                <div className="footer-info-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <span className='infor-company'>&nbsp;
                                    Room 302, Saigon Pearl Office Building,
                                    92C Nguyen Huu Canh St, Binh Thanh District,
                                    Ho Chi Minh City, VietNam
                                </span>
                            </li>

                            <li className="d-flex">
                                <div className="footer-info-item" >
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <span className='infor-company'>&nbsp;betterhomesinvest@gmail.com</span>
                            </li>

                            <li className="d-flex">
                                <div className="footer-info-item">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <span className='infor-company'>&nbsp;(+84) 090. 453.234</span>
                            </li>
                        </ul>

                    </div>
                    <div className="block-infor col-lg-3 col-md-6 col-6">
                        <p className="footer-title d-flex">Menu</p>
                        <ul className="footer-ul">
                            <li className="d-flex infor-company"><a href='/buy_a_house'>Buy A House</a></li>
                            <li className="d-flex infor-company"><a href='/rent_a_house'>Rent A House</a></li>
                            <li className="d-flex infor-company"><a href='/service_apartment'>Service Apartment</a></li>
                            <li className="d-flex infor-company"><a href='/servicefor_HouseOwner'>Service for House Owner</a></li>
                            <li className="d-flex infor-company"><a href='/property'>Real Estate fo Business</a></li>
                        </ul>
                    </div>
                    <div className="block-infor col-lg-3 col-md-6 col-6">
                        <div>
                            <p className="footer-title d-flex">Our Company</p>
                            <ul className="footer-ul">
                                <li className="d-flex infor-company"><a href='/contact'>Contact</a></li>
                                <li className="d-flex infor-company"><a href='/about'>About Us</a></li>
                                <li className="d-flex infor-company"><a href='/news'>News</a></li>
                            </ul>


                        </div>
                    </div>

                    <div className="block-infor col-lg-2 col-md-6 col-6">
                        <p className="footer-title d-flex">Social Media</p>
                        <div className="footer-social">
                            <div className="footer-social-item fbicon"><i className="fab fa-facebook-f"></i></div>
                            <div className="footer-social-item twticon"><i className="fab fa-twitter"></i></div>
                            <div className="footer-social-item igicon"> <i className="fab fa-instagram"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;