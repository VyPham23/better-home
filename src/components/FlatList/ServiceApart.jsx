import { useState, useEffect } from 'react';
import './flatlist.css';
import './flatitem.css';


const ServiceApart = () => {

    const [serviceApart, setServiceApart] = useState([])

    /*get service apartment list*/
    useEffect(() => {
        const getServiceApart = async () => {
            const serviceApartFromServer = await fetchServiceApart()
            setServiceApart(serviceApartFromServer)
        }
        getServiceApart()
    }, [])

    const fetchServiceApart = async () => {
        const url_service_apart = "https://api.betterhomes.site/public/api/v1/home/serviceapart"
        const res = await fetch(url_service_apart)
        const data = await res.json()
        return data['data']
    }
    /*--------------*/

    const getDate = (date) => {
        const getDate = date.substring(0, 10)

        const dateArray = getDate.split('-')

        const formatedDate = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]

        return formatedDate
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <section className="section-all-re">
            <div className="container">
                <div className="row">
                    {serviceApart.map((serviceApart) => (
                        <div className="text-center col-lg-4 col-12 col-md-12">
                            <div className="item">
                                <div className="item-image">
                                    <img className="img-fluid" src={serviceApart.image} alt="flat" />
                                    <div className="item-price">
                                        <span>${numberWithCommas(serviceApart.price)}</span>
                                        <span>{serviceApart.view_count} <i class="bi bi-eye"></i></span>
                                    </div>
                                    <div className="item-date">
                                        <span>{serviceApart.available_from ? getDate(serviceApart.available_from) : "Hot"}</span>
                                    </div>
                                </div>
                                <div className="item-description">
                                    <div className="mb-3 item-description-top">
                                        <h4>{serviceApart.apartment_code}</h4>
                                        <span >{serviceApart.address}, {serviceApart.project_name}</span><br />
                                    </div>
                                    <div className="align-items-center item-detail">
                                        <div className="detail bed">{serviceApart.num_beds}<br />bed</div>
                                        <div className="detail bath">{serviceApart.num_baths}<br />baths</div>
                                        <div className="detail sqrt">{serviceApart.sqft}<br />SQM</div>
                                        <div className="detail dom">{serviceApart.year_built}<br />Year</div>
                                    </div>
                                    <div className="align-items-center">
                                        <a href={`/details/${serviceApart.id_apartment}`} className="item-title">
                                            <button className="btn" id="btn-detail">VIEW</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceApart;