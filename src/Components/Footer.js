import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  const [state, setState] = useState("");

  function subscription(){
    state.length>0 ? alert(`${state} Subscribed`): alert("Enter email");
    setState("")
  }
  return (
    <div>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-item-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                value={state}
                onChange={(e)=>setState(e.target.value)}
                  type="text py-2"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span onClick={subscription} className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Address: Rajiv Gandhi Colony, Chimur
                  <br />
                  Dist: Chandrapur, Maharashtra, INDIA
                  <br />
                  Pin code: 442903
                </address>
                <a href="tel:+91 6202745560" className="mt-3 d-block mb-1 text-white">+91 6202745560</a>
                <a href="mailto:titarekunal@gmail.com" className="mt-2 d-block mb-0 text-white">titarekunal@gmail.com</a>
                <div className="social-icons d-flex align-item-center gap-30 mt-4">
                  <a href="/#" className="text-white"><BsLinkedin className="fs-4"/></a>
                  <a href="/#" className="text-white"><BsGithub className="fs-4"/></a>
                  <a href="/#" className="text-white"><BsInstagram className="fs-4"/></a>
                  <a href="/#" className="text-white"><BsYoutube className="fs-4"/></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-4">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0 text-white">
              <p className="text-center">
                &copy; {new Date().getFullYear()}; Powered by Kunal
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
