import { ADD_CONTACT, DELETE_CONTACT,UPDATE_CONTACT, FETCH_CONTACT, FETCH_CONTACT_SUCCESS } from '../actionTypes/ContactActionTypes';

export const addContact = (payload) => ({
  type: ADD_CONTACT,
  payload
});

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload
});

export const updateContact = (payload) => ({
  type: UPDATE_CONTACT,
  payload
});

export const fetchContact = (payload) => ({
  type: FETCH_CONTACT,
  payload
});

export const fetchContactSuccess = (payload) => ({
  type: FETCH_CONTACT_SUCCESS,
  payload
});