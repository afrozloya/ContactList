import { fork } from 'redux-saga/effects';
import FetchContactSaga from './FetchContactSaga';
// import DecrCounterSaga from './DecrCountSaga';

// List of all sagas combined as root sagas
export default function* rootSagas() {
  yield* [fork(FetchContactSaga)];
  // yield* [fork(FetchContactSaga), fork(DecrCounterSaga)];
}
