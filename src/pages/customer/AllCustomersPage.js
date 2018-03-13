import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {fetchCustomersSuccess, deleteCustomerRequest} from "../../actions/customerActions";
import CustomersListCard from "../../includes/cards/CustomersListCard";

class AllCustomersPage extends Component {

    state = {
        customers: []
    }
    
    render() {
        const { customers, isLoading } = this.props;

		if (isLoading) {
			return <p>loading, please wait...</p>
		}

        return (
            <div>
                <h1>Customers Lists</h1>
                <CustomersListCard 
                customers={customers} 
                deleteCustomerRequest={this.props.deleteCustomerRequest}/>
            </div>
        );
    }
}
AllCustomersPage.propTypes = {
    deleteCustomerRequest: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isLoading : state.customers.isLoading,
    customers : state.customers.customers,
    serverErrors : state.formErrors.customers
});

const mapDispatchToProps = {
    fetchCustomersSuccess,
    deleteCustomerRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCustomersPage);
