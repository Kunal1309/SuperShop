import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { cartData } from "../App";
import Color from "../Components/Color";

const SpeialProduct = (props) => {
  const [spProducts, setSpProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {getCartData} = useContext(cartData);

  useEffect(() => {
    setLoading(true);
    async function getSpecialProducts() {
      const result = await fetch("https://dummyjson.com/products");
      const res = await result.json();
      setSpProducts(res.products);
      setLoading(false);
    }

    getSpecialProducts();
  }, [props.special]);

  return (
    <>
      {loading ? (
        <div>
          <InfinitySpin width="200" color="#4fa94d" />
          <InfinitySpin width="200" color="#4fa94d" />
          <InfinitySpin width="200" color="#4fa94d" />
          <InfinitySpin width="200" color="#4fa94d" />
          <InfinitySpin width="200" color="#4fa94d" />
          <InfinitySpin width="200" color="#4fa94d" />
        </div>
      ) : (
        spProducts.map((ele, index) => {
          if (ele.id <= props.special) {
            const Element = {
              id: `${ele.id}`,
              images: `${ele.images[0]}`,
              title: `${ele.title}`,
              size: "abc",
              color: <Color/>,
              price: `${ele.price}`,
            };
            return (
              <div key={index} className="col-6">
                <div className="special-product-card mb-3">
                  <div className="d-flex justify-content-between">
                    <div className="spCard-images">
                      <img
                        src={ele.images[0]}
                        className="img-fluid"
                        alt="watch"
                      />
                      <img
                        src={ele.images[1]}
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="special-product-content">
                      <h5 className="brand">{ele.brand}</h5>
                      <h6 className="title">{ele.title}</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">
                        <span className="red-p">${ele.price}</span> &nbsp;{" "}
                        <strike>${ele.price + 200}</strike>
                      </p>
                      <div className="discount-till d-flex align-items-center gap-10">
                        <p className="mb-0">
                          <b>5</b> Days
                        </p>
                        <div className="d-flex gap-10 align-items-center">
                          <span className="badge rounded-circle p-3 bg-danger">
                            1
                          </span>
                          :
                          <span className="badge rounded-circle p-3 bg-danger">
                            1
                          </span>
                          :
                          <span className="badge rounded-circle p-3 bg-danger">
                            1
                          </span>
                        </div>
                      </div>
                      <div className="prod-count my-3">
                        <p>Products: 5</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <Link onClick={()=>getCartData(Element)} to={`/cart`} className="button">Add to Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })
      )}
    </>
  );
};

export default SpeialProduct;