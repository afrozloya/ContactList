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

export default function MyModal(props) {

  const {toggleShow, onToggleModalShow, cancel} = props;

  const onToggleShow = () => onToggleModalShow();

  const APP_NAME = props.title || "Contact App";

  const onSetShow = (e) => {
    if(!e && toggleShow){
      onToggleModalShow();
    }
  }

  return (    
    <>
    <MDBModal show={toggleShow} setShow={onSetShow} tabIndex='-1'>
      <MDBModalDialog className='mw-100 w-50'>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{APP_NAME}</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={onToggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>{props.children}</MDBModalBody>
          <MDBModalFooter>
            { cancel && <MDBBtn color='muted' onClick={onToggleShow}>
                Cancel
            </MDBBtn>}
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  );
}
