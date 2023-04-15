import React from 'react';
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Container from "./Container";

const RefundPolicy = () => {
  return (
    <div>
    <Meta title={"Refund Policy"} />
    <BreadCrumb title="Refund Policy" />
    <Container class1="policy-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default RefundPolicy