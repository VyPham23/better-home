import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const News_Details = () => {

    const { id } = useParams()
    const url_news_by_id = "http://localhost/admin_api/public/api/v1/newspage/" + id;

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState(<h2>ABC</h2>)

    /*get news by id*/
    useEffect(() => {
        const getNews = async () => {
            const newsFromServer = await fetchNews()
            setTitle(newsFromServer["title_news"])
            setAuthor(newsFromServer["author_news"])
            setDate(newsFromServer["created_at"])
            setDescription(newsFromServer["description_news"].replaceAll('"', ''))
        }
        getNews()
    }, [])

    const fetchNews = async () => {
        const res = await fetch(url_news_by_id)
        const data = await res.json()
        return data['data'][0]
    }

    const getDate = (date) =>{
        const getDate = date.substring(0, 10)
  
        const dateArray = getDate.split('-')
  
        const formatedDate = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]
  
        return formatedDate
    }

    /*----------------*/

    return (
        <div>
            <section className="intro_news mt-5">
                <div className='news_details_title'>
                    {title}
                </div>
                <div className='news_details_sub_infor'>
                    <span>{author}</span>
                    <span>{date ? getDate(date) : ""}</span>
                </div>
                <article>
                    {description}
                </article>
            </section>
            <section className="section-all-re">
                {/* <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 col-md-12 news-start">
                        <h2>Recent News</h2>
                    </div>
                   
                        <div className="col-lg-6 col-12 col-md-12">
                            <div className="news">
                                <div className="news-image">
                                    <img style={{height:"18rem"}} className="img-fluid" src="./images/anh7.jpg" alt="news" />
                                </div>
                                <div className="news-description">
                                    <div className="mb-3 news-text">
                                        <h4><a href="/"> </a></h4>
                                        <div className='news-infor mb-1' style={{display: "flex", justifyContent: "space-between"}}>
                                            <span><i class="bi bi-eye"></i></span>
                                            <span><i class="bi bi-pencil"></i></span>
                                            <span><i class="bi bi-calendar-minus"></i></span>
                                        </div>
                                        <span className='news-intro' ></span><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div> */}
            </section>
        </div>
    )
}

export default News_Details
