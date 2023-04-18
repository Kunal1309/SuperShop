import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Container from "./Container";
import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { InfinitySpin } from "react-loader-spinner";
import { cartData } from "../App";

const Sports = () => {

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const {getWishData} = useContext(cartData)

  useEffect(() => {
    setLoading(true);
    async function productData() {
      const Data = await fetch("https://api.escuelajs.co/api/v1/products");
      const res = await Data.json();
      setData(res);
      setLoading(false);
    }

    productData();
  }, []);

  return (
    <div>
      <Meta title={"Sports"} />
      <BreadCrumb title="Sports" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop by Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>
                    <Link
                      className="dropdown-item text-black"
                      to={`/category/electronics`}
                    >
                        Electronics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-black"
                      to={`/category/clothes`}
                    >
                      Clothes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-black"
                      to={`/category/sports`}
                    >
                      <b><u>Sports</u></b>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-black"
                      to={`/category/furniture`}
                    >
                      Furniture
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-black"
                      to={`/category/shoes`}
                    >
                      Shoes
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="category-col">
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
              data.map((ele, index) => {
                if (ele.category.name == "Sports") {
                    const Element = {
                        id: `${ele.id}`,
                        images: `${ele.images[0]}`,
                        title: `${ele.title}`,
                        price: `${ele.price}`,
                      };
                  return (
                    <div style={{width:"30%", margin:"1%"}}>
                      <Link
                        key={index}
                        to={`/product/${ele.id}`}
                        className="product-card position-relative"
                      >
                        <div className="wishlist-icons position-absolute">
                          <button className="border-0 bg-transparent">
                            <Link
                              onClick={() => getWishData(Element)}
                              to={`/wishlist`}
                            >
                              <img src={wish} alt="wish" />
                            </Link>
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src={ele.images[2]}
                            className="img-fluid"
                            alt="product images"
                          />
                          <img
                            src={ele.images[1]}
                            className="img-fluid"
                            alt="product images"
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="brand">{ele.brand}</h6>
                          <h5 className="product-title">{ele.title}</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p>
                            {ele.description}
                          </p>
                          <p className="price">${ele.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                              <img src={prodcompare} alt="prod compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img src={view} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img
                                className="bg-green"
                                src={addcart}
                                alt="add-cart"
                              />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sports