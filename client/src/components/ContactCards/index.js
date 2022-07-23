import React from 'react';
import { MDBRow } from 'mdb-react-ui-kit';
import ContactCard from './ContactCard';

export default function ContactCards(props) {
  const { contacts } = props;
  return (
    <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      {contacts?.map((contact, index) => (
        //afroz no index
        <ContactCard contact={contact} key={index} />
      ))}
    </MDBRow>
  );
}