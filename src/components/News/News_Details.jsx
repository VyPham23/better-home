import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const News_Details = () => {

    const { id } = useParams()
    const url_news_by_id = "http://localhost/admin_api/public/api/v1/newspage/" + id;

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")

    const [newsList, setNewsList] = useState([])

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
    /*---------------*/

    const getDate = (date) =>{
        const getDate = date.substring(0, 10)
  
        const dateArray = getDate.split('-')
  
        const formatedDate = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]
  
        return formatedDate
    }

    /*----------------*/

    return (
        <div>
            <section className="news_details_area mt-5 container">
                <div className='news_details_title'>
                    {title}
                </div>
                <div className='news_details_sub_infor mb-5'>
                    <span>{author}</span>
                    <span>{date ? getDate(date) : ""}</span>
                </div>
                <div
                style={{textAlign:"justify"}}
                className='container news_details_description'
                dangerouslySetInnerHTML={{__html: description}}
                >
                </div>
            </section>
        </div>
    )
}

export default News_Details
