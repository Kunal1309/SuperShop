import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import OurStore from "./Pages/OurStore";
import Blog from "./Pages/Blog";
import CompareProduct from "./Pages/CompareProduct";
import Wishlist from "./Pages/Wishlist";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import SingleBlog from "./Pages/SingleBlog";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import ShippingPolicy from "./Pages/ShippingPolicy";
import TermAndConditions from "./Pages/TermAndConditions";
import SingleProduct from "./Pages/SingleProduct";
import PopSingle from "./Pages/PopSingle";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import watch from "./images/watch.jpg";
import Color from "./Components/Color";
import Electronics from "./Pages/Electronics";
import Clothes from "./Pages/Clothes";
import Furniture from "./Pages/Furniture";
import Sports from "./Pages/Sports";
import Shoes from "./Pages/Shoes";

export const cartData = createContext();

function App() {
  const [userName, setUserName] = useState('LogIn');
  const [user, setUser] = useState([
    {
      email: "titarekunal@gmail.com",
      password: "Kunal12345",
      name: "Kunal",
      number: "6202745560",
    },
  ])

  function getUserData(items){
    setUser([...user, items]);
    console.log(user)
  }

  function checkUser(items){
    user.map((ele)=>{
      if(ele.email == items.email && ele.password == items.password){
        setUserName(ele.name)
      }
    })
  }

  const [cartproduct, setCartproduct] = useState([
    {
      id: 1,
      images: `${watch}`,
      title: "Watch",
      size: "abc",
      color: <Color/>,
      price: 100,
    },
  ]);

  function getCartData(items){
    setCartproduct([...cartproduct, items]);
  }

  function getCartDataAfterRemoved(itemTitle){
    const result = cartproduct.filter((ele)=> ele.title != itemTitle)
    setCartproduct(result);
  }

  const [wishproduct, setWishproduct] = useState([
    {
      id: 1,
      images: `${watch}`,
      title: "Watch",
      price: 100,
    },
  ]);

  function getWishData(items){
    setWishproduct([...wishproduct, items]);
  }

  function getWishDataAfterRemoved(itemTitle){
    const result = wishproduct.filter((ele)=> ele.title != itemTitle)
    setWishproduct(result);
  }

  return (
    <div className="App">
      <cartData.Provider value={{use:user, getUserData:getUserData, checkUser:checkUser, userName:userName, cartproduct:cartproduct, getCartData:getCartData, getCartDataAfterRemoved:getCartDataAfterRemoved, wishproduct:wishproduct, getWishData:getWishData, getWishDataAfterRemoved:getWishDataAfterRemoved}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="product" element={<OurStore />} />
              <Route path="product/:id" element={<SingleProduct />} />
              <Route path="product/popular/:id" element={<PopSingle />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="blogs/:id" element={<SingleBlog />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="compare-product" element={<CompareProduct />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="login" element={<LogIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="refund-policy" element={<RefundPolicy />} />
              <Route path="shipping-policy" element={<ShippingPolicy />} />
              <Route path="term-conditions" element={<TermAndConditions />} />
              <Route path="category/electronics" element={<Electronics />} />
              <Route path="category/sports" element={<Sports />} />
              <Route path="category/clothes" element={<Clothes />} />
              <Route path="category/furniture" element={<Furniture />} />
              <Route path="category/shoes" element={<Shoes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </cartData.Provider>
    </div>
  );
}

export default App;
