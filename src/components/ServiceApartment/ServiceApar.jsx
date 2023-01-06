import { ArrowRightOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import seviceImage1 from './service_HouseOwner.1.jpg'
import { useState, useEffect } from 'react';
import Select from 'react-select';
import './ServiceApartStyle.css'

const ServiceApart = () => {

    const [projectList, setProjectList] = useState([])
    const [apartList, setApartList] = useState([])
    const [projectSelected, setProjectSelected] = useState({
        label: "",
        value: 1
    })

    const [urlApartList, setUrlApartList] = useState("https://api.betterhomes.site/public/api/v1/service/")
    const [displayButton, setDisplayButton] = useState(true)

    /*get project list*/
    useEffect(() => {
        const getProject = async () => {
            const projectFromServer = await fetchProject()
            setProjectList(projectFromServer)
        }
        getProject()
    }, [])

    const fetchProject = async () => {
        const url_project_list = "https://api.betterhomes.site/public/api/v1/projectlist"
        const res = await fetch(url_project_list)
        const data = await res.json()
        return data['data']
    }
    /*--------------*/

    const getAllApartment = () => {
        setUrlApartList("https://api.betterhomes.site/public/api/v1/serviceall/")
        setDisplayButton(false)
    }

    /*get service apartment list when project selection change*/
    useEffect(() => {
        const getServiceApart = async () => {
            const serviceApartFromServer = await fetchApartList()
            setApartList(serviceApartFromServer)
        }
        getServiceApart()
    }, [projectSelected, urlApartList])

    const fetchApartList = async () => {
        const id_project_selected = projectSelected.value
        const url_apart_list = urlApartList + id_project_selected
        const res = await fetch(url_apart_list)
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
                        <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit orci, bibendum id malesuada sed,
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
                    {projectList.filter(project => projectList.project_status = "Hot")
                        .map(filteredProject => (
                            <div
                                onClick={() => setProjectSelected(
                                    {
                                        label: "",
                                        value: filteredProject.id_project
                                    }
                                )}
                                className='col-12 col-lg-4 col-md-4 mt-5 project_hot_item'>
                                <img className='img-fluid' src={filteredProject.project_image} alt="project-item" />
                                <div className='project_hot_name'>
                                    <p>{filteredProject.project_name}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className='apartment_by_project'>
                <Select
                    className='col-12 col-lg-4 col-md-12 mt-5 project_list'
                    placeholder="Choose A Project"
                    styles={customStyles}
                    options={dataProject}
                    defaultValue={dataProject[0]}
                    onChange={setProjectSelected}
                />

                <div className="row mb-5">
                    {apartList.map((apart) => (
                        <div className='col-12 col-lg-4 col-md-6 mt-5 apartment_item'>
                            <a href={`/details/${apart.id_apartment}`}>
                                <img className='img-fluid' src={apart.image} alt="project-item" />
                                <div className='apartment_name'>
                                    <div>
                                        <span>{apart.apartment_code}</span>
                                    </div>
                                    <div>
                                        <span><i class="bi bi-eye"></i> {apart.view_count}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {displayButton ?
                    <div className='row mb-5 btn_readmore_area'>
                        <button
                            onClick={getAllApartment}
                            className='btn_readmore_apartment'>
                            Read More &nbsp;<ArrowRightOutlined className='icon_readMore' />
                        </button>
                    </div>
                    : ""}
            </div>
        </main>
    );
}
export default ServiceApart;