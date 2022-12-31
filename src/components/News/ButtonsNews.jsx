import './Buttons.css'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from 'react';

export default function ButtonsNews() {

  const [newsList, setNewsList] = useState([])

  /*get news list*/
  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fetchNews()
      setNewsList(newsFromServer)
      // setFilterNews(newsFromServer)
    }
    getNews()
  }, [])

  const fetchNews = async () => {
    const url_news_list = "http://localhost/admin_api/public/api/v1/newspage/newslist"
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
    <div>
      <>
        <section className='buttons'>
          <Container fluid>
            <h5 className='lastest mt-5'>LATEST NEWS</h5>
            <Row className='mt-4'></Row>

            <Row className='all_buttons_news'>
              {newsList.map((news) => (
                <div className='buttons_news col-lg-4 col-md-6 col-12'>
                  <Card className='shadow bg-white rounded box-news' >
                    <img src={news.image_news} className='img_card_news img-fluid' alt="news-image" />
                    <div className='cart_body_news'>
                      <a href={`/news_details/${news.id_news}`}>
                      <Card.Title className='card_title_news'>
                          {news.title_news}
                        </Card.Title>
                      </a>
                      <Row className='mt-4'></Row>
                      <Row>
                        <div className='news_information'>
                          <div>
                            <i class="bi bi-eye"></i> {news.view_count}
                          </div>
                          <div>
                            <i class="bi bi-pencil"></i> {news.author_news}
                          </div>
                          <div>
                            <i class="bi bi-clock"></i> {news.created_at ? getDate(news.created_at) : ""}
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Card>
                </div>
              ))} {/* end col */}
            </Row>{/* end row */}

            <Row className='mb-3'>
              <div className="prevNext_news">
                <LeftOutlined className="left_news" />
                <RightOutlined className="right_news" />
              </div>
            </Row>
          </Container>
        </section>
      </>
    </div>
  )
}
