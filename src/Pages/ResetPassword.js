import React from 'react';
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Container from "./Container";
import CustomInput from "../Components/CustomInput";

const ResetPassword = () => {
  return (
    <div>
        <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className="text-center mb-3">Reset Password</h3>
                    <form action="" className="d-flex flex-column gap-15">
                        <CustomInput type="password" name="password" placeholder="password..."/>
                        <CustomInput type="confirm password" name="confirm-password" placeholder="Confirm Password..."/>
                        <div>
                            <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                <button className="button border-0">Ok</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default ResetPassword