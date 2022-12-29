import ImgRent1 from './rentaHouse1.jpg'
import ImgRent2 from './rentaHouse2.jpg'
import ImgRent3 from './rentaHouse3.jpg'
import { ArrowRightOutlined } from '@ant-design/icons';
import './Rent.css'
import Select from 'react-select';

const RentAHouse = () => {

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
        <section>
            <div>
                <img
                    className="img-fluid w-100 img_map"
                    src="https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/banner_mapsHD.png" alt="mapImageBanner" />
            </div>
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
        </section>
    );
}

export default RentAHouse;