import React, {Component} from "react";
import {connect} from "react-redux";
import { fetchAllUsersRequest } from "../../../actions/users";
import PersonCard from "../../../components/cards/PersonCard";

class allUserPage extends Component {
	componentDidMount() {
		this.props.fetchAllUsersRequest();
	}

	render() {
	const { users, isLoading } = this.props
	//console.log('All Users', users);

		if (isLoading) {
			return <p>loading, please wait...</p>
		}

		return (
			<div>
			<h1>Topic Info</h1>
			<PersonCard users={users} />
		</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoading: state.users.isLoading,
	users: state.users.users,
	serverErrors: state.formErrors.users
});

const mapDispatchToProps = {
	fetchAllUsersRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(allUserPage);
