import ContactCover from './contactcover';
import './footer.css';

const Footer = () => {
    return (
        <section className="footer">
            
            <ContactCover/>

            <div className="container">
                <div className="row">

                    <div className="block-infor col-lg-4 col-md-6">
                        <div className="footer-title d-flex">
                            <i className="fas fa-home"></i> <p> &nbsp; Better Home</p>
                        </div>
                        
                        <ul className="footer-ul">
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-map-marker-alt"></i></div> <span>
                                Room 302, Saigon Pearl Office Building,<br/>
                                92C Nguyen Huu Canh St, Binh Thanh District, <br/>
                                Ho Chi Minh City, VietNam
                                </span>
                            </li>

                            <li className="d-flex">
                                <div className="footer-info-item" ><i className="fas fa-envelope"></i></div> <span>betterhomesinvest@gmail.com</span>
                            </li>
                            
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-phone-alt"></i></div> <span>(+84) 090. 453.234</span>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="block-infor col-lg-3 col-md-6">
                        <p className="footer-title d-flex">Menu</p>
                        <ul className="footer-ul">
                            <li className="d-flex">Buy</li>
                            <li className="d-flex">Rent</li>
                            <li className="d-flex">Service Apartment</li>
                            <li className="d-flex">Service for House Owner</li>
                            <li className="d-flex">Real Estate fo Business</li>
                        </ul>
                    </div>
                    <div className="block-infor col-lg-3 col-md-6">
                        <div>
                            <p className="footer-title d-flex">Our Company</p>
                            <ul className="footer-ul">
                                <li className="d-flex">Contact</li>
                                <li className="d-flex">About Us</li>
                                <li className="d-flex">News</li>
                            </ul>

                            
                        </div>
                    </div>

                    <div className="block-infor col-lg-2 col-md-6">
                        <p className="footer-title d-flex">Social Media</p>
                        <div className="footer-social">
                            <div className="footer-social-item"><i className="fab fa-facebook"></i></div>
                            <div className="footer-social-item"><i className="fab fa-twitter"></i></div>
                            <div className="footer-social-item"> <i className="fab fa-instagram"></i></div>
                        </div>
                    </div>

                   

                </div>
            </div>
        </section>
    );
};

export default Footer;