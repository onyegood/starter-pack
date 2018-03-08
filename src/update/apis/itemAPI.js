import axios from "axios";
import {baseURL} from "../baseURL";

export function createItem(service, item) {
  axios.post(baseURL + 'api/customer/', { service, item })
  .then((data) => data)
}

export function removeItem(service, id) {
  axios.delete(baseURL + 'api/customer/delete/', { id })
  .then((data) => data)
}

export function updateItem(service, id, newData) {
  axios.put(baseURL + 'api/customer/update/', {id, newData })
  .then((data) => data)
}

export function findAllItems(service) {
  axios.get(baseURL + 'api/customers')
  .then((data) => data)
}
