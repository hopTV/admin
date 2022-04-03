import React from "react";
import "./scss/homebannerFooter.scss";
import banner3 from "../../components/img/bannerf.webp";

import banner4 from "../../components/img/bannerf2.jpg";

const HomeBannerFooter = () => {
  return (
    <section className="section-banner">
      <div className="container">
        <div className="content">
          <div className="item banner-hover">
            <div className="banner-img">
              <img src={banner3} style={{ margin: "0 auto" }} alt="banner" />
              <div className="description">
                <h1 className="description-title">high performance</h1>
                <p className="description-p">sale up to 10% off</p>
              </div>
            </div>
          </div>
          <div className="item banner-hover">
            <div className="banner-img">
              <img src={banner4} alt="banner" style={{ margin: "0 auto" }} />
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

export default HomeBannerFooter;
