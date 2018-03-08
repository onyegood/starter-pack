import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from "react-router-dom";
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import history from "./history";

import {fetchCustomersRequest} from "./actions/customerActions";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware,thunk)
    )
);

sagaMiddleware.run(rootSaga);


store.dispatch(fetchCustomersRequest());

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <BrowserRouter>
               <Route component={App} />
            </BrowserRouter>
        </Provider>
    </Router>,
    document.getElementById('root'));
    registerServiceWorker();
