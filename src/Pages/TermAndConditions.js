import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Container from "./Container";

const TermAndConditions = () => {
  return (
    <div>
      <Meta title={"Term and Conditions"} />
      <BreadCrumb title="Term and Conditions" />
      <Container className="policy-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
      </Container>
    </div>
  );
};

export default TermAndConditions;