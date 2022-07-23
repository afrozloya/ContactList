import { connect } from 'react-redux';
import Contact from '../../components/Contact';
import { FETCH_CONTACT, DELETE_CONTACT } from '../../redux/actionTypes/ContactActionTypes';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch({ type: FETCH_CONTACT,  payload: {}}),
    deleteContact: (uid) => dispatch({ type: DELETE_CONTACT,  payload: {uid}}),
  }
}

const mapStateToProps = state => ({
  loading: state?.contact?.loading,
  orignalContactList: state?.contact?.contacts || [],
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)