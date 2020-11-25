import React from 'react'

const Services = () => {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>We provide best in class services offering globally with client satisfactory and reasonable price </p>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxl-dribbble"></i></div>
                            <h4><a href="">Application Maintenance Service</a></h4>
                            <p>application maintenance and support services aim to reduce system outages and improve the performance and efficiency of the application portfolios.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                        data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-file"></i></div>
                            <h4><a href="">Web Designing and maintenance</a></h4>
                            <p>We have a full-stack, end-to-end Web App Development with de-coupled architecture and highly scalable and easily maintainable</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                        data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4><a href="">Android App </a></h4>
                            <p>we are good at effective native app developement which are developed purely based on java and kotaline</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                        data-aos-delay="400">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-layer"></i></div>
                            <h4><a href="">Lead Management system</a></h4>
                            <p>We offer an End-to-End Lead Management solutons for most of the auto-mobile industries</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services
