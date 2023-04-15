import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import ProductCard from "../Components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../Components/Color";
import { BiGitCompare, BiHeart } from "react-icons/bi";
import Container from "./Container";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";

const SingleProduct = () => {
  const [data, setData] = useState([]);
  const param = useParams();
  const [orderedProduct, setOrderedProduct] = useState(true);
 
  useEffect(() => {
    async function productData() {
      const Data = await fetch("https://api.escuelajs.co/api/v1/products");
      const res = await Data.json();
      setData(res);
    }

    productData();
  });

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      {data.map((ele, index) => {
        if (ele.id == param.id) {
          const props = {
            width: 400,
            height: 600,
            zoomWidth: 600,
            img: `${ele.images[0]}`,
          }

          return (
            <div>
              <Meta title={ele.title} />
              <BreadCrumb title={ele.title} />
              <Container className="main-product-wrapper home-wrapper-2 py-5">
                <div className="row">
                  <div className="col-6">
                    <div className="main-product-image">
                      <div>
                        <ReactImageZoom {...props} />
                      </div>
                    </div>
                    <div className="other-product-image d-flex flex-wrap gap-15">
                      <div>
                        <img
                          src={ele.images[1]}
                          className="img-fluid"
                          alt="watch"
                        />
                      </div>
                      <div>
                        <img
                          src={ele.images[2]}
                          className="img-fluid"
                          alt="watch"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="main-product-details">
                      <div className="border-bottom">
                        <h3 className="title">
                          {ele.title}
                        </h3>
                      </div>
                      <div className="border-bottom py-3">
                        <p className="price">$ {ele.price}</p>
                        <div className="d-flex align-items-center gap-10">
                          <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="mb-0 t-review">(2 reviews)</p>
                        </div>
                        <a className="review-btn" href="#review">
                          Write a Review
                        </a>
                      </div>
                      <div className="py-3">
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Update Date :</h3>
                          <p className="product-data">{ele.updatedAt}</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Brand :</h3>
                          <p className="product-data">Havels</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Category :</h3>
                          <p className="product-data">{ele.category["name"]}</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Creation Date :</h3>
                          <p className="product-data">{ele.creationAt}</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Availabity :</h3>
                          <p className="product-data">In Stocks</p>
                        </div>
                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                          <h3 className="product-heading">Size :</h3>
                          <div className="d-flex flex-wrap gap-15">
                            <span className="badge border border-1 bg-white text-dark border-secondary ">
                              S
                            </span>
                            <span className="badge border border-1 bg-white text-dark border-secondary ">
                              M
                            </span>
                            <span className="badge border border-1 bg-white text-dark border-secondary ">
                              XL
                            </span>
                            <span className="badge border border-1 bg-white text-dark border-secondary ">
                              XXL
                            </span>
                          </div>
                        </div>
                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                          <h3 className="product-heading">Color :</h3>
                          <Color />
                        </div>
                        <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                          <h3 className="product-heading">Quantity :</h3>
                          <div className="">
                            <input
                              type="number"
                              className="form-control"
                              min={1}
                              max={10}
                              style={{ width: "70px" }}
                              name=""
                              id=""
                            />
                          </div>
                          <div className="d-flex align-items-center gap-30 ms-5">
                            <Link to={`/cart/${ele.id}`} className="button border-0" type="submit">
                              Add To Cart
                            </Link>
                            <Link to="/signup" className="button signup">
                              Buy It Now
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                          <div>
                            <a href="">
                              <BiGitCompare className="fs-5 me-2" /> Add to
                              Compare
                            </a>
                          </div>
                          <div>
                            <a href="">
                              <BiHeart className="fs-5 me-2" /> Add to Wishlist
                            </a>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-10 my-3">
                          <h3 className="product-heading">
                            Shipping And Returns
                          </h3>
                          <p className="product-data">
                            Free Shipping and Returns available on all orders{" "}
                            <br /> We ship all domestic order{" "}
                            <b>within 5 - 10 buisiness days!</b>
                          </p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-3">
                          <h3 className="product-heading">Product link:</h3>
                          <a
                            href="javascript:void(0);"
                            onClick={() => {
                              copyToClipboard(
                                "https://images8.alphacoders.com/381/381648.jpg"
                              );
                            }}
                          >
                            Click here to Copy Product link
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description-wrapper py-5 home-wrapper-2">
                  <div className="container-xxl">
                    <div className="row">
                      <div className="col-12">
                        <h4>Description</h4>
                        <div className="bg-white p-3">
                          <p>
                            {ele.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Container className="reviews-wrapper home-wrapper-2">
                  <div className="row">
                    <div className="col-12">
                      <h3 id="review">Review</h3>
                      <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-end">
                          <div>
                            <h4>Customer Reviews</h4>
                            <div className="d-flex align-items-center gap-10">
                              <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                              />
                              <p className="mb-0">Based on 2 reviews</p>
                            </div>
                          </div>
                          {orderedProduct && (
                            <div>
                              <a
                                className="text-dark text-decoration-underline"
                                href=""
                              >
                                Write a review
                              </a>
                            </div>
                          )}
                        </div>
                        <div className="review-form py-4">
                          <h4>write a Review</h4>
                          <form action="" className="d-flex flex-column gap-15">
                            <div>
                              <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={true}
                                activeColor="#ffd700"
                              />
                            </div>
                            <div>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                className="w-100 form-control"
                                rows="4"
                                placeholder="comments"
                              ></textarea>
                            </div>
                            <div className="d-flex justify-content-end">
                              <button className="button border-0">
                                Submit Review
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="reviews mt-4">
                          <div className="review">
                            <div className="d-flex gap-10 align-items-center">
                              <h6 className="mb-0">Ratan</h6>
                              <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                              />
                            </div>
                            <p className="mt-3">
                              If you are going to use a passage of Lorem Ipsum,
                              you need to be sure there isn't anything
                              embarrassing hidden in the middle of text.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>

                <Container className="popular-wrapper py-5 home-wrapper-2">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-heading">
                        Our Popular Products
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <ProductCard ids={30}/>
                  </div>
                </Container>
              </Container>
            </div>
          );
        }
      })}
    </>
  );
};

export default SingleProduct;
