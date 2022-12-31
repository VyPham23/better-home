import './RealEsteStyle.css';
import image_intro from './image_real_este.jpg';
import image_business_location from './image_business_location.jpg';
import background_co_working from './background_co_working.jpg';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const RealEsteBusiness = () => {
    return (
        <div>
            <div className='row real_este_intro'>
                <div className='description_real_este'>
                    <h1>Shophouse</h1>
                    <p>
                        &emsp;&emsp;&emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laudantium unde dolor, culpa dignissimos, cupiditate exercitationem
                        amet sint iste quibusdam id debitis accusamus tempore, odit alias
                        tenetur omnis a explicabo consequuntur.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laudantium unde dolor, culpa dignissimos, cupiditate exercitationem
                        amet sint iste quibusdam id debitis accusamus tempore, odit alias
                        tenetur omnis a explicabo consequuntur.
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laudantium unde dolor, culpa dignissimos, cupiditate exercitationem
                        amet sint iste quibusdam id debitis accusamus tempore, odit alias
                        tenetur omnis a explicabo consequuntur.
                    </p>
                    <div className="button_register_real_este">
                        <Button type="primary">Register
                            <ArrowRightOutlined className='icon_moredetail' />
                        </Button>
                    </div>
                </div>
                <div className="image_real_este">
                    <img className='img-fluid' src={image_intro} alt="image-intro" />
                </div>
            </div>
            <div className='row business_location_area'>
                <div className='business_location_img'>
                    <img className='img-fluid' src={image_business_location} alt="image-intro" />
                </div>
                <div className='description_business_location'>
                    <h1>Shophouse</h1>
                    <p>
                        &emsp;&emsp;&emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laudantium unde dolor, culpa dignissimos, cupiditate exercitationem
                        amet sint iste quibusdam id debitis accusamus tempore, odit alias
                        tenetur omnis a explicabo consequuntur.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laudantium unde dolor, culpa dignissimos, cupiditate exercitationem
                        amet sint iste quibusdam id debitis accusamus tempore, odit alias
                        tenetur omnis a explicabo consequuntur.
                    </p>
                    <p>
                        &emsp;&emsp;&emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laudantium unde dolor, culpa dignissimos, cupiditate exercitationem
                        amet sint iste quibusdam id debitis accusamus tempore, odit alias
                        tenetur omnis a explicabo consequuntur.
                    </p>
                    <div className="button_register_real_este">
                        <Button type="primary">Register
                            <ArrowRightOutlined className='icon_moredetail' />
                        </Button>
                    </div>
                </div>
            </div>
            <div className='co_working_area'>
                <div className='block_title_co_working'>
                    <span className='title_co_working'>Co-Working Space</span>
                </div>
                <div className='image_co_working'>
                    <img className='img-fluid' src={background_co_working} alt="image-item" />
                </div>
                <div className='block_co_working'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laudantium unde dolor, culpa dignissimos, cupiditate exercitationem
                        amet sint iste quibusdam id debitis accusamus tempore, odit alias
                        tenetur omnis a explicabo consequuntur.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laudantium unde dolor, culpa dignissimos, cupiditate exercitationem
                        amet sint iste quibusdam id debitis accusamus tempore, odit alias
                        tenetur omnis a explicabo consequuntur.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Laudantium unde dolor, culpa dignissimos, cupiditate exercitationem
                        amet sint iste quibusdam id debitis accusamus tempore, odit alias
                        tenetur omnis a explicabo consequuntur.
                    </p>
                    <div className="button_register_real_este">
                        <Button type="primary">Register
                            <ArrowRightOutlined className='icon_moredetail' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealEsteBusiness