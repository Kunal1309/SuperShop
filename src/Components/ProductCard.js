import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { InfinitySpin } from "react-loader-spinner";
import { cartData } from "../App";


const ProductCard = (props) => {
  const [loading, setLoading] = useState(false);
  const { grid } = props;
  let location = useLocation();

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
  }, [props.ids]);

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
        data.map((ele, index) => {
          if (ele.id <= props.ids) {
            const Element = {
              id: `${ele.id}`,
              images: `${ele.images[0]}`,
              title: `${ele.title}`,
              price: `${ele.price}`,
            };
  
            return (
              <div
                className={` ${
                  location.pathname === "/product" ? `gr-${grid}` : "col-3"
                } `}
              >
                <Link
                  key={index}
                  to={`/product/${ele.id}`}
                  className="product-card position-relative"
                >
                  <div className="wishlist-icons position-absolute">
                    <button className="border-0 bg-transparent">
                      <Link onClick={()=>getWishData(Element)} to={`/wishlist`} >
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
                    <p
                      className={`description ${
                        grid === 12 ? "d-block" : "d-none"
                      }`}
                    >
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
    </>
  );
};

export default ProductCard;
