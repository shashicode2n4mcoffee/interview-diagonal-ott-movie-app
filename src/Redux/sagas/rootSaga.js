import { all } from 'redux-saga/effects'
import { moviesSaga } from './index'

export function* rootSaga() {
  yield all([moviesSaga()])
}
