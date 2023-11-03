import { call, put, takeLatest, cancel, fork } from 'redux-saga/effects'
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from '../actions/moviesActions'
import api from '../../Api'
import { FETCH_MOVIES_REQUEST } from '../types'

function* fetchMovies(data) {
  try {
    const response = yield call(api.get, data?.payload?.url || '')
    yield put(fetchMoviesSuccess(response.data))
  } catch (error) {
    yield put(fetchMoviesFailure(error.message))
  }
}

function* moviesSaga() {
  let task

  yield takeLatest(FETCH_MOVIES_REQUEST, function* (action) {
    if (task) {
      yield cancel(task)
    }
    task = yield fork(fetchMovies, action)
  })
}

export default moviesSaga
