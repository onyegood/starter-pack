import React from "react";
import AddCustomerForm from "../../forms/AddCustomerForm";

const AddCustomerPage = (props) => (
  <div className="container" style={{ height: "100vh" }}>
    <div className="row align-items-center" style={{ height: "100vh" }}>
      <div className="col col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
        <div className="card">
          <h2 className="card-header">New customer</h2>
          <div className="card-body">
            <AddCustomerForm  data={props}/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AddCustomerPage;
