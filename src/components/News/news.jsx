import React from 'react';
import photo from './37.png';
import './news.css';

const News = ( {title} ) => {
    return (
        <div className="col-lg-6 col-12 col-md-12">
            <div className="news">
                <div className="news-image">
                    <img className="img-fluid" src={photo} alt="news" />
                </div>
                <div className="news-description">
                    <div className="mb-3 news-text">
                        <h4><a href="/"> {title} </a></h4>
                        <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint temporibus rem dolore voluptate mollitia id obcaecati reiciendis aut blanditiis, dolores magni animi explicabo inventore alias in iusto unde ea?</span><br/>
                    </div>
                    {/* <div className="align-items-center">                        
                        <a href="/" className="item-title">
                            <button className="btn" id="btn-detail">MORE</button>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default News;