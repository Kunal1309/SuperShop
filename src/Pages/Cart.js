import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import { cartData } from "../App";
import Color from "../Components/Color";

const Cart = () => {
  const [numb, setNumb] = useState(1);
  const {cartproduct, getCartDataAfterRemoved} = useContext(cartData);
  const [count, setCount] = useState(cartproduct.reduce(function (acc, obj) { return acc + Number(obj.price); }, 0));

  return (
    <div>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {cartproduct.map((element, index) => {
              return (
                <div
                  key={index}
                  className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center"
                >
                  <div className="cart-col-1 gap-15 d-flex align-items-center">
                    <div className="w-25">
                      <img
                        src={element.images}
                        alt="product images"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-75">
                      <p>{element.title}</p>
                      <p>Size: {element.size}</p>
                      <p>Color: {element.color}</p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">$ {element.price}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                      <input
                      onChange={(e)=>{setNumb(e.target.value);
                      if(numb>1){
                       setCount(cartproduct.reduce(function (acc, obj) { return acc + Number(obj.price); }, 0) + (element.price * numb))
                      }}}
                        value={numb}
                        min={1}
                        max={10}
                        className="form-control"
                        type="number"
                        name=""
                        id=""
                      />
                    </div>
                    <div>
                      <AiTwotoneDelete onClick={()=>getCartDataAfterRemoved(element.title)} className="text-danger fs-3" />
                    </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">$ {element.price * numb}</h5>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ {count}</h4>
                <p>Taxes and Shipping Calcullated at Checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;