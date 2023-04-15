import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import CustomInput from "../Components/CustomInput";

const LogIn = (event) => {
  const userdetails = JSON.parse(localStorage.getItem("customer"));

  const handleClick = () =>{
    // userdetails.map((ele, index) => {
    //   if(ele.name == name && ele.password == password){
        
  window.open('/');
    //   }
    // })
  }
  return (
    <div>
      <Meta title={"Log In"} />
      <BreadCrumb title="Log In" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Log-In</h3>
              <form onSubmit={(e)=> e.preventDefault()} action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email please..."
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password here..."
                />
                <div>
                  <Link to="/forgot-password">Forgot Password ?</Link>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button onClick={handleClick} className="button border-0" type="submit">
                      Log-in
                    </button>
                    <Link to="/signup" className="button signup">
                      Sign-Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LogIn;