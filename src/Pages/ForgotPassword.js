import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
import Container from "./Container";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  function Recover() {
    if (email.length >= 1) {
      alert("recovery mail sent to your mail-Id");
      setEmail("");
    } else {
      alert("please provide mail-Id");
    }
  }
  return (
    <div>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your Password
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                action=""
                className="d-flex flex-column gap-15"
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Email please..."
                  className={`form-control`}
                />
                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button
                      onClick={Recover}
                      className="button border-0"
                      type="submit"
                    >
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
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

export default ForgotPassword;
