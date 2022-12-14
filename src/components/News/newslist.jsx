import React from 'react';
import { useState, useEffect } from 'react';
import './news.css';

const NewsList = () => {

    const [newsList, setNewsList] = useState([])

    /*get news list*/
    useEffect(() => {
        const getNews = async () => {
            const newsFromServer = await fetchNews()
            setNewsList(newsFromServer)
        }
        getNews()
    }, [])

    const fetchNews = async () => {
        const url_news_list = "https://api.betterhomes.site/public/api/v1/home/news"
        const res = await fetch(url_news_list)
        const data = await res.json()
        return data['data']
    }
    /*--------------*/

    const getDate = (date) => {
        const getDate = date.substring(0, 10)

        const dateArray = getDate.split('-')

        const formatedDate = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]

        return formatedDate
    }

    return (
        <section className="section_news_list">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 col-md-12 news-start">
                        <div className="border_news_section">
                            <h2>RECENT NEWS</h2>
                        </div>
                    </div>
                    {newsList.map((news) => (
                        <div className="col-lg-6 col-12 col-md-6 news_block">
                            <div className="news">
                                <div className="news_image_cover" style={{ backgroundImage: `url(${news.image_news})` }}>
                                    <div className="news_image">
                                        <div className="news_title">
                                            <a className='title_news' href={`/news_details/${news.id_news}`}>
                                                <h4>{news.title_news}</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-description">
                                    <div className="mb-3 news-text">
                                        <div className='news-infor mb-1' style={{ display: "flex", justifyContent: "space-between" }}>
                                            <span><i class="bi bi-eye"></i> {news.view_count}</span>
                                            <span><i class="bi bi-pencil"></i> {news.author_news}</span>
                                            <span><i class="bi bi-calendar-minus"></i> {news.created_at ? getDate(news.created_at) : ""}</span>
                                        </div>
                                        <div className='news-intro'>
                                            <span>{news.intro_news}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsList;