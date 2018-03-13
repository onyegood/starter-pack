import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomersListCard = ({ customers, deleteCustomerRequest }) => {

    return (
    <div className="container" style={{height: "100vh" }}>
        <div className="row align-items-center">
            {
                    customers.map(customer => (
                        <div className="col-md-3" 
                            key={customer.id} 
                            deleteCustomerRequest={deleteCustomerRequest}>

                            <div className="card">
                                <div className="card-header">
                                    <h5>{customer.first_name} {customer.last_name}</h5>
                                </div>
                                <div className="card-body">
                                    <p>{customer.email}</p>
                                </div>

                                <div className="card-footer">

                                    <Link to={`/customer/detail/${customer.id}`}
                                        className="btn btn-primary">
                                        Detail
                                    </Link >

                                    <span 
                                        onClick={() => deleteCustomerRequest(customer.id)}
                                        className="btn btn-danger">
                                        Delete
                                    </span>

                                    <Link to={`/customer/edit/${customer.id}`} 
                                        className="btn btn-success">
                                        Edit
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))
            }
        </div>
    </div>
)};

CustomersListCard.propTypes = {
    customers: propTypes
        .arrayOf(propTypes.shape({
            id: propTypes.number.isRequired, 
            first_name: propTypes.string.isRequired, 
            last_name: propTypes.string.isRequired, 
            email: propTypes.string.isRequired
        })).isRequired,
    deleteCustomerRequest: propTypes.func.isRequired
};

export default CustomersListCard;
