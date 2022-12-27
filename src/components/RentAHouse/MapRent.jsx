import React from "react";
import { Col, Row, } from 'antd';
import './Rent.css'

const MapbannerRent= () =>{
    return(
        <section>
            <Row justify="center">
                <Col span={24} className='mapImg'>
                    <img src="https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/banner_mapsHD.png" alt="mapImageBanner"></img>
                </Col>
            </Row>
        </section>
    );

}
export default MapbannerRent;