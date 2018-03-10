import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import AddCustomerPage from './pages/customer/AddCustomerPage';
import AllCustomersPage from './pages/customer/AllCustomersPage';
import EditCustomerPage from './pages/customer/EditCustomerPage';
import CustomerDetailPage from './pages/customer/CustomerDetailPage';

class App extends Component {
  render() {

    const {location} = this.props;

    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/new/customer">Add Customer</Link>
        

        <Route
              location={location}
              path="/"
              exact
              component={ AllCustomersPage } />

        <Route location={location} 
              path="/new/customer"
              exact
              component={ AddCustomerPage } />
        <Route location={location}
              path="/customer/edit/:id"
              exact
              component={EditCustomerPage} />
        <Route
              location={location}
              path="/customer/detail/:id"
              exact
              component={CustomerDetailPage}
            />

      </div>
    
    );
  }
}

export default App;
