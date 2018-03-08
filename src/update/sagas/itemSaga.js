import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';

import { createItem, updateItem, removeItem, findAllItems } from '../apis/itemAPI';


function* callCreateItem(service, action) {
  yield takeEvery(createItem, service, action.item);
}

function* createItemSaga(service){
  yield* takeEvery('CREATE_ITEM', callCreateItem, service);
}

function* callUpdateItem(service, action) {
  yield takeEvery(updateItem, service, action.id, action.newData);
}

function* updateItemSaga(service){
  yield* takeEvery('UPDATE_ITEM', callUpdateItem, service);
}

function* callRemoveItem(service, action) {
  yield takeEvery(removeItem, service, action.id);
}

function* removeItemSaga(service){
  yield* takeEvery('REMOVE_ITEM', callRemoveItem, service);
}

function* callFindAllItems(service, action) {
  yield takeEvery(findAllItems, service);
}

function* findAllSaga(service){
  yield* takeEvery('FIND_ALL_ITEMS_DONE', callFindAllItems, service);
}

export default function* root(service){
  yield [
    fork(findAllSaga, service),
    fork(createItemSaga, service),
    fork(updateItemSaga, service),
    fork(removeItemSaga, service)
  ]
}
