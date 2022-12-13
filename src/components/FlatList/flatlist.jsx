import React from 'react';
import './flatlist.css';
import FlatItem from '../FlatItem/flatitem';

const FlatList = () => {
    // const title = {
    //     text: "Lorem Ipsum",
    //     description: "Lorem ipsum dolor sit ame"
    // }

    return (
        <section className="section-all-re">
            <div className="container">
                {/* <Title title={title.text} description={title.description} /> */}
                <div className="row">
                    <FlatItem />
                    <FlatItem />
                    <FlatItem />
                </div>
            </div>
        </section>
    );
};

export default FlatList;