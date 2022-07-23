import React from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function Confirm(props) {

  const {toggleShow, onToggleConfirmShow} = props;

  const onToggleShow = () => onToggleConfirmShow();

  const APP_NAME = "Contact App";

  const MSG = "Are you sure, you want to delete!";

  const onSetShow = (e) => {
    if(!e && onToggleShow){
      onToggleConfirmShow();
    }
  }

  const onConfirm = () => {
    props.deleteContact();
    onToggleConfirmShow();
  }

  return (
    <>
    <MDBModal show={toggleShow} setShow={onSetShow} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{APP_NAME}</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={onToggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>{MSG}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='muted' onClick={onToggleShow}>
              Cancel
            </MDBBtn>
            <MDBBtn onClick={onConfirm} color='danger'>Delete</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  );
}
