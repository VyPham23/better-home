import { ArrowRightOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import seviceImage1 from './service_HouseOwner.1.jpg'
import ImgRent1 from './rentaHouse1.jpg'
import ImgRent2 from './rentaHouse2.jpg'
import ImgRent3 from './rentaHouse3.jpg'
import Select from 'react-select';
import './ServiceApartStyle.css'

const ServiceApart = () => {

    const dataProject = [
        { label: "Vinhome Central Park", value: "Vinhome Central Park" },
        { label: "Vinhome Golden River", value: "Vinhome Golden River" },
        { label: "Vinhome River Park", value: "Vinhome River Park" }
    ]

    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderRadius: "5px",
            padding: "12px"
        })
    };

    return (
        <main>
            {/* SELL YOUR HOUSE */}
            <Row className='sellfHouseOwner' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={1} sm={1} md={1} lg={1} xl={2}>
                    <div className='greenLine' style={{ float: 'left' }}></div>
                </Col>
                <Col xs={23} sm={23} md={11} lg={11} xl={9}>
                    <div className="sellhouse_info">
                        <h1><span style={{ color: '#00908E' }}>Sell</span> Your House</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit orci, bibendum id malesuada sed,
                            elementum ac sem. Sed sem erat, placerat nec tellus vel, pretium auctor erat.
                            In bibendum tincidunt urna ac blandit. Sed aliquam vestibulum quam et sollicitudin.
                            Vivamus vehicula est nec molestie eleifend. Donec diam nisi, fermentum a tempus in, feugiat ut nunc.
                        </p>
                        <div className="button-moredetail">
                            <Button type="primary">Register
                                <ArrowRightOutlined className='icon_moredetail' />
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col className="imgSell" xs={24} sm={24} md={12} lg={12} xl={13}>
                    <img src={seviceImage1} className="img-fluid" alt='sellImage'></img>
                </Col>
            </Row>

            <div className='project_hot'>
                <div
                    className='col-12 col-lg-4 col-md-4 mt-5 project_hot_title'
                >HOT PROJECT
                </div>

                <div className="row">
                    <div className='col-12 col-lg-4 col-md-4 mt-5 project_hot_item'>
                        <img className='img-fluid' src={ImgRent1} alt="project-item" />
                        <p className='project_hot_name'>Vinhome Central Park</p>
                    </div>
                    <div className='col-12 col-lg-4 col-md-4 mt-5 project_hot_item'>
                        <img className='img-fluid' src={ImgRent2} alt="project-item" />
                        <p className='project_hot_name'>Vinhome Central Park</p>
                    </div>
                    <div className='col-12 col-lg-4 col-md-4 mt-5 project_hot_item'>
                        <img className='img-fluid' src={ImgRent3} alt="project-item" />
                        <p className='project_hot_name'>Vinhome Central Park</p>
                    </div>
                </div>

                <div className='row btn_readmore_area'>
                    <button className='btn_readmore_project'>
                        Read More &nbsp;<ArrowRightOutlined className='icon_readMore' />
                    </button>
                </div>
            </div>

            <div className='apartment_by_project'>
                <Select
                    className='col-12 col-lg-4 col-md-12 mt-5 project_list'
                    styles={customStyles}
                    options={dataProject}
                    defaultValue={dataProject[0]}
                />

                <div className="row">
                    <div className='col-12 col-lg-4 col-md-6 mt-5 apartment_item'>
                        <img className='img-fluid' src={ImgRent1} alt="project-item" />
                        <p className='apartment_name'>Vinhome Central Park</p>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6 mt-5 apartment_item'>
                        <img className='img-fluid' src={ImgRent2} alt="project-item" />
                        <p className='apartment_name'>Vinhome Central Park</p>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6 mt-5 apartment_item'>
                        <img className='img-fluid' src={ImgRent3} alt="project-item" />
                        <p className='apartment_name'>Vinhome Central Park</p>
                    </div>

                    <div className='col-12 col-lg-4 col-md-6 mt-5 apartment_item'>
                        <img className='img-fluid' src={ImgRent1} alt="project-item" />
                        <p className='apartment_name'>Vinhome Central Park</p>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6 mt-5 apartment_item'>
                        <img className='img-fluid' src={ImgRent2} alt="project-item" />
                        <p className='apartment_name'>Vinhome Central Park</p>
                    </div>
                    <div className='col-12 col-lg-4 col-md-6 mt-5 apartment_item'>
                        <img className='img-fluid' src={ImgRent3} alt="project-item" />
                        <p className='apartment_name'>Vinhome Central Park</p>
                    </div>

                    <div className='row mt-5 btn_readmore_area'>
                        <button className='btn_readmore_apartment'>
                            Read More &nbsp;<ArrowRightOutlined className='icon_readMore' />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default ServiceApart;