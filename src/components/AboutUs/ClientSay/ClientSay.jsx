import React, {useState} from "react";
import {LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import './ClientSay.css';
import DataClients from "./DataClientSay";

const ClientSay=()=>{
    const [index, setIndex] = useState(0);
    const {name, job,image, text } = DataClients[index];

    const checkNumber = (number)=>{
        if(number > DataClients.length - 1){
            return 0;
        }
        if(number < 0){
            return DataClients.length - 1;
        }
        return number;
    }


    const prevClients = () =>{
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }
    const nextClients = () =>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex);      
        })
    }
    return(
        <main>
            <section className="clientSay">

            <Row>
                <Col span={24} justify="center">
                    <h1 className="title_clientSay">What Clients Say</h1>
                    <div className="info_clientSay">
                        <img src={image} alt={name} className="img_clientSay"></img>
                        <p>{text}</p>
                    <div className="name_clientSay">
                        <h3>{name}</h3>                      
                        <p>{job}</p>
                    </div>
                    <div className="prevNext_clientSay">
                        <LeftOutlined className="left_clientSay" onClick={prevClients} />
                        <RightOutlined  onClick={nextClients} className="right_clientSay"/>
                    </div>
                </div>
                </Col>
            </Row>
                
            </section>
        </main>




    );

}

export default ClientSay;