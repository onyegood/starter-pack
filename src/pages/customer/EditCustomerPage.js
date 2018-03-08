import React from "react";
import EditCustomerForm from "../../includes/forms/EditCustomerForm";

const EditCustomerPage = (props) => (
  <div className="container" style={{ height: "100vh" }}>
    <div className="row align-items-center" style={{ height: "100vh" }}>
      <div className="col col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
        <div className="card">
          <h2 className="card-header">Update customer</h2>
          <div className="card-body">
            <EditCustomerForm  data={props} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EditCustomerPage;