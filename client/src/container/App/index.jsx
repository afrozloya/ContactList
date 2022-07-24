import { connect } from 'react-redux';
import Contact from '../../components/Contact';
import { FETCH_CONTACT, DELETE_CONTACT, ADD_CONTACT } from '../../redux/actionTypes/ContactActionTypes';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch({ type: FETCH_CONTACT,  payload: {}}),
    deleteContact: (uid) => dispatch({ type: DELETE_CONTACT,  payload: {uid}}),
    addContact: (contact) => dispatch({ type: ADD_CONTACT,  payload: {contact}}),
  }
}

const mapStateToProps = state => ({
  loading: state?.contact?.loading,
  orignalContactList: state?.contact?.contacts || [],
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)