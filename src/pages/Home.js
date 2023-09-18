import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative P-3">
                <img
                  className="img-fluid rounded-3"
                  src="images/main-banner-1.jpg"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S-13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-01.jpg"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sake.</h4>
                    <h5>iPad S-13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-02.jpg"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival </h4>
                    <h5>But Ipad Air</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-03.jpg"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S-13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-04.jpg"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S-13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <img alt="services" src="images/service.png" />
                  <h6>Free Shipping</h6>
                  <p className="mb-0">all orders over $15</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img alt="services" src="images/service-02.png" />
                  <h6>daily surprise offers</h6>
                  <p className="mb-0">Save upto 25% off</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img alt="services" src="images/service-03.png" />
                  <h6>shop 24/7</h6>
                  <p className="mb-0">shop with an expert</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img alt="services" src="images/service-04.png" />
                  <h6>Affordable prices</h6>
                  <p className="mb-0">Get factory default prices</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img alt="services" src="images/service-05.png" />
                  <h6>Secure payments</h6>
                  <p className="mb-0">100% protected payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <div>cameras</div>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <div>Smart Tv</div>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <div>Smart Watch</div>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <div>Music and gamming</div>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <div>cameras</div>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <div>Smart Tv</div>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <div>Smart Watch</div>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <div>Music and gamming</div>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
