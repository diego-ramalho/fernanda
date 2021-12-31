import React from 'react';

const Home = () => (
  <div className='home-page'>
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="container" data-aos="fade-in">
        <h1>Welcome to Flexor</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <div className="d-flex align-items-center">
          <i className="fas fa-adjust get-started-icon"></i>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </div>
    </section>

    <section id="why-us" className="why-us">
      <div className="container">

        <div className="row">
          <div className="col-xl-4 col-lg-5" data-aos="fade-up">
            <div className="content">
              <h3>Why Choose Flexor for your company website?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 d-flex">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="fas fa-adjust"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="fas fa-adjust"></i>
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="fas fa-adjust"></i>
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
