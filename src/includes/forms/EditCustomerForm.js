import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import isEmail from "validator/lib/isEmail";
import {
    updateCustomerRequest
} from "../../actions/customerActions";

class EditCustomerForm extends Component {
    state = {
            id: this.props.customer
                ? this.props.customer.id
                : null,
            first_name: this.props.customer
                ? this.props.customer.first_name
                : '',
            last_name: this.props.customer
                ? this.props.customer.last_name
                : '',
            email: this.props.customer
                ? this.props.customer.email
                : '',
            address: this.props.customer
                ? this.props.customer.address
                : '',
            state: this.props.customer
                ? this.props.customer.state
                : '',
            city: this.props.customer
                ? this.props.customer.city
                : '',
            phone: this.props.customer
                ? this.props.customer.phone
                : '',
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.serverErrors});

        this.setState({
                id: nextProps.customer.id,
                first_name: nextProps.customer.first_name,
                last_name: nextProps.customer.last_name,
                email: nextProps.customer.email,
                address: nextProps.customer.address,
                state: nextProps.customer.state,
                city: nextProps.customer.city,
                phone: nextProps.customer.phone
            });
        
    };

    onChange = e => this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state);
        this.setState({errors});
        
        if (Object.keys(errors).length === 0) {
            this.setState({isLoading: true});
            this.props.updateCustomerRequest(this.state, this.props.data.match.params.id);
            this.setState({msg: true});
        }
    };

    validate() {
        const errors = {};
        if (!isEmail(this.state.email)) 
            errors.email = "Invalid email";
        if (!this.state.first_name) 
            errors.first_name = "Can't be blank";
        if (!this.state.last_name) 
            errors.last_name = "Can't be blank";
        if (!this.state.address) 
            errors.address = "Can't be blank";
        if (!this.state.state) 
            errors.state = "Can't be blank";
        if (!this.state.city) 
            errors.city = "Can't be blank";
        if (!this.state.phone) 
            errors.phone = "Can't be blank";
        
        return errors;
    };

    render() {

        const {msg, isLoading} = this.state;
        const errors = this.state.errors || {};


        const form = <form onSubmit={this.onSubmit}>
                
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.onChange}
                        className={errors.first_name
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.first_name}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.onChange}
                        className={errors.last_name
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.last_name}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        className={errors.email
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.email}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                        type="state"
                        id="state"
                        name="state"
                        value={this.state.state}
                        onChange={this.onChange}
                        className={errors.state
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.state}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="city"
                        id="city"
                        name="city"
                        value={this.state.city}
                        onChange={this.onChange}
                        className={errors.city
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.city}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                        className={errors.phone
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.phone}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="address"
                        id="address"
                        name="address"
                        value={this.state.address}
                        onChange={this.onChange}
                        className={errors.address
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.address}</div>
                </div>

                <button 
                    type="submit" 
                    className={isLoading ? 'btn btn-success btn-block' : 'btn btn-primary btn-block'}>
                    {isLoading ? 'Updated!' : 'Update'}
                </button>

        </form>;
        
        // if (msg) {
		// 	return <p>You have successfully updated you profile! <Link to="/">Back to Customers List</Link></p>
		// }

        return ( 
            form
        );

    }
}

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return {
            customer: state
                .customers
                .customers
                .find(item => item.id === parseInt(props.data.match.params.id))
        }
    }

    return {
        serverErrors: state.formErrors.customer,
        msg : state.customers.msg,
        isLoading : state.customers.isLoading,
        customer: null
    };
};

const mapDispatchToProps  = {
    updateCustomerRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomerForm);
