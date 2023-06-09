import React, { useContext } from "react";
import { cartData } from "../App";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Container from "./Container";

const Wishlist = () => {
  const { wishproduct, getWishDataAfterRemoved } = useContext(cartData);
  return (
    <div>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishproduct.map((ele, index) => {
            return (
              <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                onClick={()=>getWishDataAfterRemoved(ele.title)}
                  src="images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src={ele.images}
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">{ele.title}</h5>
                  <h6 className="price">$ {ele.price}</h6>
                </div>
              </div>
            </div>
            )
          })}
          {/* <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8GB ROM 7Inch with Wi-Fi +5G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1GB RAM 8GB ROM 7Inch with Wi-Fi +5G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Wishlist;
