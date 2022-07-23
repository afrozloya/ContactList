import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_CONTACT, FETCH_CONTACT_SUCCESS } from '../actionTypes/ContactActionTypes';
// import RestClient from '../Utils/RestClient';

function* fetchContactSaga() {
  // const requestObject = {
  //   url: `base-url/${action.payload.queryParam}`,
  // };
  // const response = yield call(RestClient.get, requestObject);
  // const url = LIST_USER_URL;
  const url = "data.json";  
  try {
    const users = yield axios.get(url);
    const contacts = users.data.results;
    yield put({ type: FETCH_CONTACT_SUCCESS, payload: {contacts} });
  } catch (error) {
    console.log(error); //afroz something like error set in redux, loading false
  } 
}

export default function* watchFetchContactSaga() {
  yield takeLatest(FETCH_CONTACT, fetchContactSaga);
}
