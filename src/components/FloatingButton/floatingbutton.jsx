import React from 'react';
import whatsapp from './whatsapp.png';
import viber from './viber.png';
import zalo from './zalo.png';
import './floatingbutton.css';

const FloatingButton = () => {
    return (
        <div class="calltoaction">
            <ul>
                <li>
                    <a class="whatsappicon" href="" title="Chat Whatsapp">
                        <img src={whatsapp} alt=""/>
                    </a>
                </li>
                <li>
                    <a class="zaloicon" href="" title="Chat Zalo">
                        <img src={zalo} alt=""/>
                    </a>
                </li>
                <li>
                    <a class="vibericon" href="" title="Chat Viber">
                        <img src={viber} alt=""/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FloatingButton;