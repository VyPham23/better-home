import ImgRent1 from './rentaHouse1.jpg'
import ImgRent2 from './rentaHouse2.jpg'
import ImgRent3 from './rentaHouse3.jpg'
import { ArrowRightOutlined } from '@ant-design/icons';
import axios from "axios";
import { useState, useEffect } from 'react';
import './Rent.css'
import Select from 'react-select';

const RentAHouse = () => {

    const [projectList, setProjectList] = useState([])
    const [apartForRentList, setApartForRentList] = useState([])
    const [projectSelected, setProjectSelected] = useState({
        label: "",
        value: 0
    })

    /*get project list*/
    useEffect(() => {
        const getProject = async () => {
            const projectFromServer = await fetchProject()
            setProjectList(projectFromServer)
        }
        getProject()
    }, [])

    const fetchProject = async () => {
        const url_project_list = "http://localhost/admin_api/public/api/v1/projectlist"
        const res = await fetch(url_project_list)
        const data = await res.json()
        return data['data']
    }
    /*--------------*/

    /*get apartment for rent list*/
    useEffect(() => {
        const getApartForRent = async () => {
            const apartForRentFromServer = await fetchApartForRent()
            setApartForRentList(apartForRentFromServer)
        }
        getApartForRent()
    }, [projectSelected])

    const fetchApartForRent = async () => {
        const id_project_selected = projectSelected.value
        const url_apart_for_rent_list = "http://localhost/admin_api/public/api/v1/forrent/" + id_project_selected
        const res = await fetch(url_apart_for_rent_list)
        const data = await res.json()
        return data['data']
    }
    /*--------------*/

    const dataProject = []
    for (let i = 0; i < projectList.length; i++) {
        dataProject.push({
            label: projectList[i].project_name,
            value: projectList[i].id_project
        })
    }

    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderRadius: "5px",
            padding: "12px"
        })
    };

    console.log(apartForRentList)

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
            </div>

            <div className='apartment_by_project'>
                <Select
                    className='col-12 col-lg-4 col-md-12 mt-5 project_list'
                    styles={customStyles}
                    options={dataProject}
                    defaultValue={dataProject[0]}
                    onChange={setProjectSelected}
                />

                <div className="row">
                    {apartForRentList.map((apartForRent) => (
                        <div className='col-12 col-lg-4 col-md-6 mt-5 apartment_item'>
                            <img className='img-fluid' src={apartForRent.image} alt="project-item" />
                            <div className='apartment_name'>
                                <div>
                                    <span>{apartForRent.apartment_code}</span>
                                </div>
                                <div>
                                    <span><i class="bi bi-eye"></i> {apartForRent.view_count}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='row mb-5 btn_readmore_area'>
                    <button className='btn_readmore_apartment'>
                        Read More &nbsp;<ArrowRightOutlined className='icon_readMore' />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default RentAHouse;