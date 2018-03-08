import { combineReducers } from "redux";
import customers from "./reducers/customers";
import formErrors from "./reducers/formErrors";
export default combineReducers({
    customers,
    formErrors
});