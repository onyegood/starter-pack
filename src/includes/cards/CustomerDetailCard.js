import React, {Component} from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {
  fetchSingleCustomerRequest
} from "../../actions/customerActions";

class CustomerDetailCard extends Component {

  state = {
    isLoading: false,
    errors: null
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.serverErrors });
  };

  componentWillMount = () => {
    if (this.props.data.match.params.id) {
      this.props.fetchSingleCustomerRequest(this.props.data.match.params.id);
    }
  };

  render(){

    return(
      <div className="container" style={{height: "100vh"}}>
         <div className="row align-items-center">
          	<div className="col-md-12">
               <h2>{ this.props.customer.first_name +' '+ this.props.customer.last_name }</h2>
               <p>{this.props.customer.email}</p>
               <p>{this.props.customer.phone}</p>
               <p>{this.props.customer.address}</p>
               <p>{this.props.customer.state}</p>
               <p>{this.props.customer.city}</p>

            </div>
       </div>
     </div>
    );
  }
}


CustomerDetailCard.propTypes = {
  customer: propTypes.shape({
    id: propTypes.number.isRequired,
    first_name: propTypes.string.isRequired,
    last_name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    state: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    phone: propTypes.string.isRequired,
    address: propTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
      return {
        customer: state.customers.customers.find(
          item => item.id === parseInt(props.data.match.params.id)
        )
      }
    }

    return {
        serverErrors: state.formErrors.customer,
        isLoading: state.customer.isLoading,
        customer: state.customers.customers
      };
}


export default connect(mapStateToProps, {
  fetchSingleCustomerRequest })(CustomerDetailCard);
