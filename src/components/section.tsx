import React from 'react'

const Section = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up" data-aos-delay="200">
              <h1>We Provide Next Generation Solutions For Your Business</h1>
              <h2>Technology on tips is a 2019 start-up which focuses on providing software solutions for the academic platforms and industrial sectors and its moto is to spread technology everywhere and are enthusiastic to provide services from kid to an industry expert in terms of technology.</h2>
              <div className="d-lg-flex">
                <a href="#about" className="btn-get-started scrollto">Get Started</a>
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox btn-watch-video" data-vbtype="video"
                  data-autoplay="true"> Watch Video <i className="icofont-play-alt-2"></i></a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section
