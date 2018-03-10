import React from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import {
    updateSingleCustomerRequest,
    fetchSingleCustomerRequest
} from "../../actions/customerActions";

class EditCustomerForm extends React.Component {
    state = {
        data: {
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
                : ''
        },
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.serverErrors});
    };

    componentWillMount = () => {
        if (this.props.data.match.params.id) {
            this.props.fetchSingleCustomerRequest(this.props.data.match.params.id);
        }
    };

    onChange = e => this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        }
    });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props.updateSingleCustomerRequest(this.state.data, this.props.data.match.params.id)
        }
    };

    validate = data => {
        const errors = {};

        if (!isEmail(data.email)) 
            errors.email = "Invalid email";
        if (!data.first_name) 
            errors.first_name = "Can't be blank";
        if (!data.last_name) 
            errors.last_name = "Can't be blank";
        if (!data.address) 
            errors.address = "Can't be blank";
        if (!data.state) 
            errors.state = "Can't be blank";
        if (!data.city) 
            errors.city = "Can't be blank";
        if (!data.phone) 
            errors.phone = "Can't be blank";
        
        return errors;
    };

    render() {

        const {data} = this.state;
        const errors = this.state.errors || {};

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
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
                        value={data.last_name}
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
                        value={data.email}
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
                        value={data.state}
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
                        value={data.city}
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
                        value={data.phone}
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
                        value={data.address}
                        onChange={this.onChange}
                        className={errors.address
                        ? "form-control is-invalid"
                        : "form-control"}/>
                    <div className="invalid-feedback">{errors.address}</div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    Update
                </button>

            </form>
        );

    }
}

EditCustomerForm.propTypes = {
    submit: propTypes.func.isRequired,
    actions: propTypes.func.isRequired
};

function mapStateToProps(state, props) {
    if (props.data.match.params.id) {
        return {
            customer: state
                .customers
                .customers
                .find(item => item.id === parseInt(props.data.match.params.id))
        }
    }

    return {serverErrors: state.formErrors.customer, isLoading: state.customers.isLoading, customer: null};
};

const mapDispatchToProps  = {
    updateSingleCustomerRequest,
    fetchSingleCustomerRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomerForm);
