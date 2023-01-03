import React from 'react';
import whatsapp from './whatsapp.png';
import kkt from './KakaoTalk.png';
import zalo from './zalo.png';
import './floatingbutton.css';

const FloatingButton = () => {
    return (
        <div class="calltoaction">
            <ul>
                <li>
                    <a class="whatsappicon" href="" title="Chat Whatsapp">
                    {/* href=" https://wa.me/+84" */}
                        <img src={whatsapp} alt=""/>
                    </a>
                </li>
                <li>
                    <a class="zaloicon" href="" title="Chat Zalo">
                    {/* href="https://zalo.me/number" */}
                        <img src={zalo} alt=""/>
                    </a>
                </li>
                <li>
                    <a class="vibericon" href="" title="Chat Viber">
                        <img src={kkt} alt=""/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FloatingButton;