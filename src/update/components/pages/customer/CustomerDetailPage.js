import React from "react";
import CustomerDetailCard from "../../cards/CustomerDetailCard";

const CustomerDetailPage = (props) => (
  <div className="container" style={{ height: "100vh" }}>
    <div className="row align-items-center" style={{ height: "100vh" }}>
      <div className="col col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
        <CustomerDetailCard data={props}/>
      </div>
    </div>
  </div>
);

export default CustomerDetailPage;
