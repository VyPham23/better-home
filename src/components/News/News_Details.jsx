const News_Details = () => {
  return (
    <div>
      <section className="section-all-re">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 col-md-12 news-start">
                        <h2><a href="/">Recent News</a></h2>
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
                        </div> {/* end col */}

                </div>{/* end row */}
            </div>
        </section>
    </div>
  )
}

export default News_Details
