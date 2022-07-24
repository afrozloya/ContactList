import RestClient from '../../utils/RestClient';
import { takeLatest, put } from 'redux-saga/effects';
import { LIST_USER_URL } from '../../constants/AppConstants';
import { FETCH_CONTACT, FETCH_CONTACT_SUCCESS } from '../actionTypes/ContactActionTypes';

function* fetchContactSaga() {
  try {
    const users = yield RestClient.get({url:LIST_USER_URL});
    const contacts = users?.data?.results ?? [];
    yield put({ type: FETCH_CONTACT_SUCCESS, payload: {contacts} });
  } catch (error) {
    console.log(error); //afroz something like error set in redux, loading false
  } 
}

export default function* watchFetchContactSaga() {
  yield takeLatest(FETCH_CONTACT, fetchContactSaga);
}
