import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCustomersSuccess } from "../../actions/customerActions";
import CustomersListCard from "../../includes/cards/CustomersListCard";

class AllCustomersPage extends Component {

    state = {
        customers: []
    }

    componentDidMount() {
       this.props.fetchCustomersSuccess;
    }

    render() {
        const { customers, isLoading } = this.props

		if (isLoading) {
			return <p>loading, please wait...</p>
		}

        return (
            <div>
                <h1>Customers Lists</h1>
                <CustomersListCard customers={customers}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading : state.customers.isLoading,
    customers : state.customers.customers,
    serverErrors : state.formErrors.customer
});

const mapDispatchToProps = {
    fetchCustomersSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCustomersPage);
