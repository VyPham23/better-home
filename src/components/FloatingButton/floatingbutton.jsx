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
                    <a class="whatsappicon" href="https://wa.me/+84935300095" title="Chat Whatsapp">
                    {/* href=" https://wa.me/+84935300095" */}
                        <img src={whatsapp} alt=""/>
                    </a>
                </li>
                <li>
                    <a class="zaloicon" href="https://zalo.me/0935300095" title="Chat Zalo">
                    {/* href="https://zalo.me/0935300095" */}
                        <img src={zalo} alt=""/>
                    </a>
                </li>
                <li>
                    <a class="kkticon" href="" title="Chat Kakaotalk">
                    {/* href="tel:+84xxx" */}
                        <img src={kkt} alt=""/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FloatingButton;