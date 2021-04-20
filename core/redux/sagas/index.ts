import { all, fork } from 'redux-saga/effects'
import sagaUsers from './sagaUsers'

export default function* rootSaga() {
  yield all([fork(sagaUsers)])
}
