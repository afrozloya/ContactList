import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, FETCH_CONTACT, FETCH_CONTACT_SUCCESS } from '../actionTypes/ContactActionTypes';

const defaultState = {
  loading: false,
  contacts: []
};

const contact = (state = defaultState, action) => {
  let filteredContacts = [];
  const {payload} = action;
  switch (action.type) {
    case ADD_CONTACT:
      return {
        contacts: [
          ...state.contacts,
          payload.contact
        ]
      };
    case DELETE_CONTACT:
      filteredContacts = state.contacts.filter(contact => contact.uid !== payload.uid);
      return {
        contacts: [
          ...filteredContacts
        ]
      };
    case UPDATE_CONTACT:
      let selContact = state.contacts.find(contact => contact.uid === payload.uid);
      selContact = { ...selContact, ...payload.contact }
      filteredContacts = state.contacts.filter(contact => contact.uid !== payload.uid);
      return {
        contacts: [
          ...filteredContacts,
          selContact
        ]
      };
    case FETCH_CONTACT:
      return {
        ...state,
        loading: true
      };
    case FETCH_CONTACT_SUCCESS:
      return {
        contacts: action.payload.contacts.map(c1 => {
          c1['uid'] = c1['login']['uuid'];
          return c1;
        }),
        loading: false
      };
    default:
      return state;
  }
};

export default contact;
