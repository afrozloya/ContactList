import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function ContactDetails(props) {
  const {contact} = props;  
  const {location} = contact;
  const name = `${contact?.name?.title} ${contact?.name?.first} ${contact?.name?.last}`;
  const address =location?.street?.number + " " + location?.street?.name + " " + location?.city + " " + 
    location?.state + " " + location?.country + " " + location?.postcode;
  const dob =   contact?.dob?.date?.substring(0,10);
  return (
    <MDBCard>
      <MDBRow className='g-0'>
        <MDBCol md='6'>
          <MDBCardImage className='w-100 h-100' src={contact?.picture?.large}  alt='...' fluid />
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody>
            <MDBRow>
            <MDBCol><MDBCardText><span className='fw-bold'>Address: </span>{address}</MDBCardText></MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol><MDBCardText><span className='fw-bold'>Phone No: </span>{contact?.phone}</MDBCardText></MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol><MDBCardText><span className='fw-bold'>Mobile No: </span>{contact?.cell}</MDBCardText></MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol><MDBCardText><span className='fw-bold'>EMail: </span>{contact?.email}</MDBCardText></MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol><MDBCardText><span className='fw-bold'>DOB: </span>{dob}</MDBCardText></MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol><MDBCardText><span className='fw-bold'>Age: </span>{contact?.dob?.age}</MDBCardText></MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}