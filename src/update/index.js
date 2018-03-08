import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./rootReducer";
import {
  fetchCurrentUserSuccess,
  fetchCurrentUserRequest
} from "./actions/users";
import { localeSet } from "./actions/locale";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import rootSaga from "./rootSaga";

import itemSaga from "./sagas/itemSaga";

import history from "./history";

import { fetchCustomersRequest } from "./actions/customers";

import { findAllItems } from "./actions/item";


addLocaleData(en);
addLocaleData(ru);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);
sagaMiddleware.run(rootSaga, itemSaga);

if (localStorage.bookwormJWT) {
  setAuthorizationHeader(localStorage.bookwormJWT);
  store.dispatch(fetchCurrentUserRequest());
} else {
  store.dispatch(fetchCurrentUserSuccess({}));
}

if (localStorage.alhubLang) {
  store.dispatch(localeSet(localStorage.alhubLang));
}

//To be remove
store.dispatch(fetchCustomersRequest());
store.dispatch(findAllItems());

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
