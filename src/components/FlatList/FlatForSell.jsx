import { useState, useEffect } from 'react';
import './flatlist.css';
import './flatitem.css';


const FlatForSell = () => {

    const [apartForSellList, setApartForSellList] = useState([])

    /*get apartment for sell list*/
    useEffect(() => {
        const getApartForSell = async () => {
            const apartForSellFromServer = await fetchApartForSell()
            setApartForSellList(apartForSellFromServer)
        }
        getApartForSell()
    }, [])

    const fetchApartForSell = async () => {
        const url_apart_for_sell_list = "http://localhost/admin_api/public/api/v1/home/buyhouse"
        const res = await fetch(url_apart_for_sell_list)
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
                    {apartForSellList.map((apartForSell) => (
                        <div className="text-center col-lg-4 col-12 col-md-12">
                            <div className="item">
                                <div className="item-image">
                                    <img className="img-fluid" src={apartForSell.image} alt="flat" />
                                    <div className="item-price">
                                        <span>${numberWithCommas(apartForSell.price)}</span>
                                        <span>{apartForSell.view_count} <i class="bi bi-eye"></i></span>
                                    </div>
                                    <div className="item-date">
                                        <span>{apartForSell.available_from ? getDate(apartForSell.available_from) : "Hot"}</span>
                                    </div>
                                </div>
                                <div className="item-description">
                                    <div className="mb-3">
                                        <h4><a href="/">{apartForSell.apartment_code}</a></h4>
                                        <span >{apartForSell.address}, {apartForSell.project_name}</span><br />
                                    </div>
                                    <div className="align-items-center item-detail">
                                        <div className="detail bed">{apartForSell.num_beds}<br />bed</div>
                                        <div className="detail bath">{apartForSell.num_baths}<br />baths</div>
                                        <div className="detail sqrt">{apartForSell.sqft}<br />SQM</div>
                                        <div className="detail dom">{apartForSell.year_built}<br />Year</div>
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

export default FlatForSell;