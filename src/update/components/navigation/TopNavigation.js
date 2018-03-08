import React from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import { NavLink as RouterNavLink } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import { FormattedMessage } from "react-intl";
import { logoutUserRequest } from "../../actions/auth";
import { setLocale } from "../../actions/locale";

class TopNavigation extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { user, logout } = this.props;

    return (
      <Navbar light expand="sm" color="faded">
        <NavbarBrand tag={RouterNavLink} activeClassName="active" to="/">
          ALHub
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                tag={RouterNavLink}
                activeClassName="active"
                to="/dashboard"
              >
                <FormattedMessage
                  id="nav.dashboard"
                  defaultMessage="Dashboard"
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RouterNavLink}
                activeClassName="active"
                to="/characters"
              >
                <FormattedMessage
                  id="nav.characters"
                  defaultMessage="My Characters"
                />
              </NavLink>
            </NavItem>
            <NavItem>
	           <NavLink
                  tag={RouterNavLink}
                  activeClassName="active"
                  to="/all/users"
                  >
                 <FormattedMessage
                  id="nav.users"
                  defaultMessage="All Users"
                 />
            </NavLink>
		      </NavItem>

          <NavItem>
           <NavLink
                tag={RouterNavLink}
                activeClassName="active"
                to="/customer/new"
                >
               <FormattedMessage
                id="nav.customer"
                defaultMessage="Add customer"
               />
          </NavLink>
          </NavItem>

          <NavItem>
           <NavLink
                tag={RouterNavLink}
                activeClassName="active"
                to="/all/customers"
                >
               <FormattedMessage
                id="nav.customers"
                defaultMessage="All Customers"
               />
          </NavLink>
          </NavItem>




          </Nav>

          <Nav className="ml-auto" navbar>
            <a role="button" onClick={() => this.props.setLocale("en")}>
              EN
            </a>{" "}
            |
            <a role="button" onClick={() => this.props.setLocale("ru")}>
              RU
            </a>
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
              {user.username}
                <img
                  className="img-fluid rounded-circle"
                  src={gravatarUrl(user.email, { size: 40 })}
                  alt="Gravatar"
                />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>My Account</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired,
  setLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logout: logoutUserRequest, setLocale },
  null,
  {
    pure: false
  }
)(TopNavigation);
