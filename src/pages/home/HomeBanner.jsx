import React from "react";
import "./scss/homeBanner.scss";

import banner1 from "../../components/img/banner.webp";
import banner2 from "../../components/img/banner2.webp";

const HomeBanner = () => {
  return (
    <section className="section-banner">
      <div className="container">
        <div className="content">
          <div className="item banner-hover">
            <div className="banner-img">
              <img src={banner1} alt="banner" />
              <div className="description">
                <h1 className="description-title">high performance</h1>
                <p className="description-p">sale up to 10% off</p>
              </div>
            </div>
          </div>
          <div className="item banner-hover">
            <div className="banner-img">
              <img src={banner2} alt="banner" />
              <div className="description">
                <h1 className="description-title">high performance</h1>
                <p className="description-p">sale up to 20% off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
