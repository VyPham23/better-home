import React from 'react';
import './sectioncover.css';

const SectionCover = ({ nameSection, description, picture, path, numberApart }) => {
    return (
        <div className="banner d-flex align-items-center w-100" style={{ backgroundImage: `url(${picture})` }}>
            <div className="section_cover_area">
                <div className="title_cover">
                    <h2>{nameSection}</h2>
                </div>

                <div className='description_cover_center'>
                    <div className="description_cover_area">
                        <div className="row description_cover_area_details">
                            <div className='description_cover_area_details_left'>
                                <span>{numberApart}</span> <br />
                                <span>Properties Available </span>
                            </div>
                            <div className='description_cover_area_details_middle'>
                                <span>{description}</span>
                            </div>
                            <div className='description_cover_area_details_right'>
                                <button className="btn_view_all">
                                    <a href={path}>VIEW ALL</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;