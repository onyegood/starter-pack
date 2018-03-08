import { combineReducers } from "redux";

import user from "./reducers/user";
import users from "./reducers/users";
import characters from "./reducers/characters";
import locale from "./reducers/locale";
import formErrors from "./reducers/formErrors";

import customers from "./reducers/customers";
import item from "./reducers/item";

export default combineReducers({
  user,
  users,
  characters,
  locale,
  formErrors,
  customers,
  item
});
