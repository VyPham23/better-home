import { ArrowRightOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import './Rent.css'
import Select from 'react-select';

const RentAHouse = () => {

    const [projectList, setProjectList] = useState([])
    const [projectHot, setProjectHot] = useState([])
    const [apartList, setApartList] = useState([])
    const [projectSelected, setProjectSelected] = useState({
        label: "",
        value: 1
    })

    const [urlApartList, setUrlApartList] = useState("https://api.betterhomes.site/public/api/v1/forrent/")
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

    /*get project hot list*/
    useEffect(() => {
        const getHotProject = async () => {
            const projectHotFromServer = await fetchHotProject()
            setProjectHot(projectHotFromServer)
        }
        getHotProject()
    }, [])

    const fetchHotProject = async () => {
        const url_project_list = "https://api.betterhomes.site/public/api/v1/projecthot"
        const res = await fetch(url_project_list)
        const data = await res.json()
        return data['data']
    }
    /*--------------*/

    const getAllApartment = () => {
        setUrlApartList("https://api.betterhomes.site/public/api/v1/forrentall/")
        setDisplayButton(false)
    }

    /*get apartment for rent list when project selection change*/
    useEffect(() => {
        const getApartForRent = async () => {
            const apartForRentFromServer = await fetchApartList()
            setApartList(apartForRentFromServer)
        }
        getApartForRent()
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
                    {projectHot.map(projectHot => (
                            <div
                                onClick={() => setProjectSelected(
                                    {
                                        label: "",
                                        value: projectHot.id_project
                                    }
                                )}
                                className='col-12 col-lg-4 col-md-4 mt-5 project_hot_item'>
                                <img className='img-fluid' src={projectHot.project_image} alt="project-item" />
                                <div className='project_hot_name'>
                                    <p>{projectHot.project_name}</p>
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
        </section>
    );
}

export default RentAHouse;