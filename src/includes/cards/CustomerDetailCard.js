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
    
const customer = this.props.customer || {};

    return(
      <div className="container" style={{height: "100vh"}}>
       <div className = "row align-items-center" > 
          <div className="col-md-12">
              <h2>{customer.first_name} {customer.last_name}</h2>
                  <p>{customer.email}</p>
                  <p>{customer.phone}</p>
                  <p>{customer.address}</p>
                  <p>{customer.state}</p>
                  <p>{customer.city}</p>
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
        customer: null
      };
}


export default connect(mapStateToProps, { fetchSingleCustomerRequest })(CustomerDetailCard);
