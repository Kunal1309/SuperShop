import React, { useState, useEffect } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Container from "./Container";

const SignUp = () => {
  const [user, setUser] = useState([]);
  const [kunal, setKunal] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("customer");
      const initialValue = JSON.parse(saved);
      setKunal(initialValue ? initialValue : "");
  }, [user]);

  function Signup(e) {
    e.preventDefault();
    if (
      name.length >= 1 &&
      email.length >= 1 &&
      number.length >= 1 &&
      password.length >= 1
    ) {
      setUser([...kunal, { name, password, email, number }]);

      localStorage.setItem("customer", JSON.stringify(user));

      alert(
        `Mr. ${name}, you completed your signUp. Now, LogIn again with new id and password!`
      );
      setName("");
      setEmail("");
      setNumber("");
      setPassword("");
    } else {
      alert("Please fill all details!");
    }
  }

  return (
    <div>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign-Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  type="text"
                  ame="name"
                  placeholder="Name please..."
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email please..."
                />
                <input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="form-control"
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number..."
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password here..."
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button onClick={Signup} className="button border-0">
                      Sign-Up
                    </button>
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

export default SignUp;
