import './service.css';

const ServiceItem = ({name, picture}) => {
    return (
        <div className="text-center col-lg-3 col-12 col-md-6">
            <div className="sv">
                <div className="sv-image">
                    <img className="img-fluid" src={picture} alt="flat" />
                </div>
                <div className="sv-description">
                    <div className="mb-3 sv-text">
                        <p>{name}</p>
                    </div>
                    <div className="align-items-center">
                        <a href="/" className="item-title">
                            <button className="btn" id="btn-detail">
                                <a className='button_nav_home' href="/">REGISTER</a>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;