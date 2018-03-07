import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import * as actions from './modules/grid'
import * as api from '../lib/api'

export function* fetchGrids(action) {
  try {
    const grids = yield call(api.GET, 'grids')
    yield put(actions.fetchGridsSuccess(grids))
  } catch (error) {
    yield put(actions.fetchGridsFail(error))
  }
}

export function* createGrid(action) {
  try {
    const grid = yield call(api.POST, 'grids', { grid: action.payload })
    yield put(actions.createGridSuccess(grid))
    yield put(actions.closeSubview())
  } catch (error) {
    yield put(actions.createGridFail(error))
  }
}

export function* updateGrid(action) {
  try {
    const grid = yield call(api.PUT, `grids/${action.payload.id}`, { grid: action.payload })
    yield put(actions.updateGridSuccess(grid))
    yield put(actions.closeSubview())
  } catch (error) {
    yield put(actions.updateGridFail(error))
  }
}

export function* deleteGrid(action) {
  try {
    yield call(api.DELETE, `grids/${action.payload}`)
    yield put(actions.deleteGridSuccess(action.payload))
  } catch (error) {
    yield put(actions.deleteGridFail(error))
  }
}

export function* watchFetchGrids() {
  yield* takeLatest(actions.FETCH_GRIDS, fetchGrids)
}

export function* watchCreateGrid() {
  yield* takeLatest(actions.CREATE_GRID, createGrid)
}

export function* watchUpdateGrid() {
  yield* takeLatest(actions.UPDATE_GRID, updateGrid)
}

export function* watchDeleteGrid() {
  yield* takeLatest(actions.DELETE_GRID, deleteGrid)
}