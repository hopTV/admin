import React, { useState, useEffect } from "react";
import "./scss/homeProducts.scss";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { useHistory } from "react-router-dom";

import axios from "axios";

const HomeProducts = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setloading] = useState(false);

  let history = useHistory();

  const handleClick = (id) => {
    history.push(`/product/${id}`);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://622c5742087e0e041e08c677.mockapi.io/products/products"
      );
      let data = res.data.slice(8, 16);
      setloading(false);
      setDataProduct(data);

      // console.log(">> check data:", data);
    };
    getData();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <section className="section-product">
      <div className="container">
        <div className="top-titile">
          <h2 className="title">
            <span className="title-span">sản phẩm bán chạy</span>
          </h2>
        </div>
        <div className="product-content">
          <Carousel breakPoints={breakPoints}>
            <div className="product-content"></div>
            {loading === false &&
              dataProduct.map((item) => {
                return (
                  <div key={item.id} className="product-content-layout">
                    <div className="product-content-layout--img">
                      <img src={item.imageURL} className="img-design"></img>
                      <div className="img-hover">
                        <div className="btn">
                          <button className="btn-cart">Add To Cart</button>
                          <button
                            className="btn-detail"
                            onClick={() => handleClick(item.id)}
                          >
                            Xem Nhanh
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product-content-layout-des">
                      <h3 className="product-content-layout-des-h">
                        {item.name}
                      </h3>
                      <p className="product-content-layout-des-p">
                        Giá: {Intl.NumberFormat().format(item.prices)} đ
                      </p>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
