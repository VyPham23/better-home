import React from 'react'
import './Buttons.css'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <Row>
              <Card className="bg-dark text-white">
                <Card.Img src="./images/anh4.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title><h5 className='lastest'>Lastest News</h5></Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Row> {/* end row */}
            <Row className='mt-4'></Row>

            <Row className='all_buttons_news'>
              {newsList.map((news) => (
                <Col xs={12} md={6} lg="4" className='buttons_news'>
                  <Card className='shadow  bg-white rounded' >
                    <Card.Img variant="top" src={news.image_news} className='img_card_news' />
                    <Card.Body className='card_body_news'>
                      <Card.Title className='card_title_news'>{news.title_news}
                      </Card.Title>
                      <Row className='mt-4'></Row>
                      <Row>
                        <div className='news_information'>
                          <span>
                            <i class="bi bi-eye"></i> {news.view_count}
                          </span>
                          <span>
                            <i class="bi bi-pencil"></i> {news.author_news}
                          </span>
                          <span>
                            <i class="bi bi-clock"></i> {news.created_at ? getDate(news.created_at) : ""}
                          </span>
                        </div>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))} {/* end col */}
            </Row>{/* end row */}

            <Row >
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
