import { useState, useEffect } from 'react';
import './flatlist.css';
import './flatitem.css';

const FlatForRent = () => {
    const [apartForRentList, setApartForRentList] = useState([])

    /*get apartment for rent list*/
    useEffect(() => {
        const getApartForRent = async () => {
            const apartForRentFromServer = await fetchApartForRent()
            setApartForRentList(apartForRentFromServer)
        }
        getApartForRent()
    }, [])

    const fetchApartForRent = async () => {
        const url_apart_for_rent_list = "http://localhost/admin_api/public/api/v1/home/renthouse"
        const res = await fetch(url_apart_for_rent_list)
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
    /*--------------*/

    return (
        <section className="section-all-re">
            <div className="container">
                <div className="row">
                    {apartForRentList.map((apartForRent) => (
                        <div className="text-center col-lg-4 col-12 col-md-6">
                            <div className="item">
                                <div className="item-image">
                                    <img className="img-fluid" src={apartForRent.image} alt="flat" />
                                    <div className="item-price">
                                        <span>${numberWithCommas(apartForRent.price)}</span>
                                        <span>{apartForRent.view_count} <i class="bi bi-eye"></i></span>
                                    </div>
                                    <div className="item-date">
                                        <span>{apartForRent.available_from ? getDate(apartForRent.available_from) : "Hot"}</span>
                                    </div>
                                </div>
                                <div className="item-description">
                                    <div className="mb-3">
                                        <h4><a href="/">{apartForRent.apartment_code}</a></h4>
                                        <span >{apartForRent.address}, {apartForRent.project_name}</span><br />
                                    </div>
                                    <div className="align-items-center item-detail">
                                        <div className="detail bed">{apartForRent.num_beds}<br />bed</div>
                                        <div className="detail bath">{apartForRent.num_baths}<br />baths</div>
                                        <div className="detail sqrt">{apartForRent.sqft}<br />SQM</div>
                                        <div className="detail dom">{apartForRent.year_built}<br />Year</div>
                                    </div>
                                    <div className="align-items-center">
                                        <a href="/" className="item-title">
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

export default FlatForRent;