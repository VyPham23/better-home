import React from 'react';
import './news.css';
import News from './news';

const NewsList = () => {
    return (
        <section className="section-all-re">
            <div className="container">
                {/* <Title title={title.text} description={title.description} /> */}
                <div className="row">
                    <div className="col-lg-12 col-12 col-md-12 news-start">
                        <h2><a href="/">Recent News</a></h2>
                    </div>
                    <News title="New 1 Ahaha"/>
                    <News title="New 2 Ahaha"/>
                    <News title="New 3 Ahaha"/>
                    <News title="New 4 Ahaha"/>
                </div>
            </div>
        </section>
    );
};

export default NewsList;